import React from 'react';
import Button from './_form/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Whatsapp: React.FC = ({ children }) => {
  return (
    <Button
      size="lg"
      href={
        'https://api.whatsapp.com/send?phone=6289699518803&text=Hi%2C%20I%27m%20interested%20in%20your%20web%20application%20development%20service.'
      }
      target="_blank"
    >
      <FontAwesomeIcon icon={faWhatsapp} /> Contact Me Now!
    </Button>
  );
};

export default Whatsapp;
