import React, { useEffect, useRef } from 'react';
import Layout from '../../views/auction/layout';
import Section from '../../components/_layout/section';
import Container from '../../components/_layout/container';
import { H1 } from '../../components/_content/typography';
import Button from '../../components/_form/button';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Link from 'next/link';
import Panel from '../../components/panel';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Auction } from '../../types';
import useSWR from 'swr';
import dayjs, { Dayjs } from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Countdown from 'react-countdown';
import { CountdownRendererFn } from 'react-countdown';
import Currency from 'react-currency-formatter';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classNames from 'classnames';
import _ from 'lodash';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
});

const getFetcher = (url: string) =>
  axiosInstance.get(url).then((resp) => resp.data.data);

const RendererCountdown: CountdownRendererFn = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    return <span>You are good to go!</span>;
  }
  return (
    <div>
      <span className={days > 0 ? '' : 'd-none'}>
        {days} <small>days, </small>
      </span>
      <span className={hours > 0 ? '' : 'd-none'}>
        {hours} <small>hours, </small>
      </span>
      <span className={minutes > 0 ? '' : 'd-none'}>
        {minutes} <small>minutes, </small>
      </span>
      {seconds} <small>seconds</small>
    </div>
  );
};
interface IBidFormInput {
  nominal: number;
}

const schema = yup.object().shape({
  nominal: yup
    .number()
    .typeError('bid value must be a number')
    .positive()
    .required(),
});

const Detail: React.FC = () => {
  const bidInput = useRef<HTMLInputElement>(null);
  const [autoBid, setAutoBid] = useState<boolean>(false);
  const [bidding, setBidding] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors: formErrors },
  } = useForm<IBidFormInput>({
    // @ts-ignore
    resolver: yupResolver(schema),
  });
  console.log(formErrors);
  useEffect(() => {
    bidInput.current?.focus();
  }, []);
  const { id } = router.query;

  const { data, error } = useSWR('/auctions/' + id, getFetcher, {
    isPaused: () => {
      return id === undefined;
    },
  });

  const onChangeAutoBid = async (value: boolean) => {
    setAutoBid(value);
    // await axiosInstance.post(`/auctions/${id}/preferences`, {
    //   key: 'auto_bid',
    //   value,
    // });
  };

  const bidNow = handleSubmit((data: IBidFormInput) => {
    setBidding(true);
  });

  if (!data && !error) {
    return (
      <Layout>
        <FontAwesomeIcon icon={faSpinner} spin={true} />
      </Layout>
    );
  }

  if (error) {
    return <Layout>{error}</Layout>;
  }

  return (
    <Layout>
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="border" />
            </div>
            <div className="col-span-2">
              <H1>{data.title}</H1>
              <div className="my-3 text-gray-600">{data.description}</div>

              <div className="text-lg font-semibold">
                Remaining time{' '}
                <Countdown
                  date={dayjs(data.finished_at).toDate()}
                  renderer={RendererCountdown}
                />
              </div>

              <Panel className="mt-5">
                <div className="">
                  <div className="text-gray-500">
                    Highest bid{' '}
                    <Currency quantity={data.max_bid} currency="USD" />
                  </div>
                  <form onSubmit={bidNow}>
                    <div className="relative inline-block items-center">
                      <input
                        type="text"
                        disabled={bidding}
                        {...register('nominal')}
                        // ref={bidInput}
                        className={classNames(
                          [
                            'border rounded-full pl-4 pr-20 py-2 transition-all duration-300 ease-in-out',
                            'focus:outline-none focus:shadow-xl',
                          ],
                          {
                            'focus:border-red-400': !_.isEmpty(formErrors),
                            'focus:border-emerald-400': _.isEmpty(formErrors),
                          },
                        )}
                      />
                      <button
                        type="submit"
                        disabled={bidding}
                        className={classNames(
                          'absolute right-2 transition-all duration-300 ease-in-out text-sm px-3 py-1 rounded-full text-white',
                          {
                            ' bg-emerald-500 hover:bg-emerald-700 focus:bg-emerald-700 focus:ring-emerald-600 focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1':
                              !bidding,
                            'bg-gray-300 cursor-default': bidding,
                          },
                        )}
                        style={{
                          top: '0.4rem',
                        }}
                      >
                        {bidding ? (
                          <span>
                            <FontAwesomeIcon icon={faSpinner} spin={true} />{' '}
                            Bidding
                          </span>
                        ) : (
                          'Bid now'
                        )}
                      </button>
                    </div>

                    <p className="text-red-500 text-xs mt-2">
                      {formErrors.nominal?.message}
                    </p>
                  </form>

                  <div className="mt-3">
                    <Switch.Group>
                      <Switch.Label className="mr-4">
                        Enable autobid
                      </Switch.Label>
                      <Switch
                        checked={autoBid}
                        onChange={onChangeAutoBid}
                        className={`${
                          autoBid ? 'bg-emerald-600' : 'bg-gray-200'
                        } relative inline-flex items-center h-6 rounded-full w-11`}
                      >
                        <span className="sr-only">Enable autobid</span>
                        <span
                          className={`${
                            autoBid ? 'translate-x-6' : 'translate-x-1'
                          } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
                        />
                      </Switch>
                    </Switch.Group>
                  </div>

                  <Link href={`/auction/preference`}>
                    <a className="text-xs text-emerald-400 hover:text-emerald-500">
                      Configure autobid
                    </a>
                  </Link>
                </div>
              </Panel>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Detail;
