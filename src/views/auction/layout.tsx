import React from 'react';
import Link from 'next/link';
import Section from '../../components/_layout/section';
import Container from '../../components/_layout/container';
import { useAuth0 } from '@auth0/auth0-react';

const Layout: React.FC = ({ children }) => {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div className="relative">
      {/*Navigation*/}
      <div className={'static w-full z-20 bg-emerald-500 text-white'}>
        <div className={'container mx-auto px-2 py-4 '}>
          <div className="grid grid-cols-2">
            <div className="font-light text-2xl">
              <Link href="/auction">Auction</Link>
            </div>

            <div className="text-right">
              <a onClick={() => loginWithRedirect()} className="cursor-pointer">
                Login
              </a>

              <a onClick={() => logout()} className="cursor-pointer">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      {children}

      {/*Footer*/}
      <Section className="bg-emerald-500 text-white">
        <Container className="text-center">Fathur Rohman</Container>
      </Section>
    </div>
  );
};

export default Layout;
