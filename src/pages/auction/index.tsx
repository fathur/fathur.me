import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../views/auction/layout';
import Section from '../../components/_layout/section';
import Container from '../../components/_layout/container';
import Button from '../../components/_form/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortAlphaDown,
  faSortAmountDown,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import useSWRInfinite, { SWRResponse } from 'swr';
import { Auction } from '../../types';
import axios from 'axios';

const Index: React.FC = () => {
  const searchBox = useRef<HTMLInputElement>(null);
  const [auctions, setAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    if (searchBox.current) {
      searchBox.current.focus();
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/auctions').then((response) => {
      setAuctions(response.data?.data);
    });
  }, []);

  return (
    <Layout>
      <Section className="bg-white border-b-2">
        <Container>
          <form>
            <input
              type="text"
              name="search"
              placeholder="Search name and description"
              autoFocus={true}
              autoComplete="off"
              ref={searchBox}
              className="bg-white border rounded-full px-5 py-3 w-full focus:outline-none focus:border-emerald-400 focus:shadow-lg transition-all duration-300 ease-in-out"
            />
          </form>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-6 text-right">
            <button className="border px-3 py-2 bg-white rounded-sm focus:bg-gray-50">
              <FontAwesomeIcon icon={faSortAmountDown} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-start">
            {auctions.map((auction) => (
              <div
                className="w-60 h-60 bg-blue-50 px-5 py-5 rounded-xl border border-blue-200"
                key={auction.id}
              >
                <Button href={`/auction/${auction.id}`}>Bid Now</Button>
              </div>
            ))}
          </div>

          <div className="mt-6">Paging here</div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Index;
