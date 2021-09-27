import React from 'react';
import Button from './_form/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Mail: React.FC = ({ children }) => {
  return (
    <Button
      size="lg"
      href="mailto:hi.fathur.rohman@gmail.com?subject=Hello, I am interested!&body=Hello Fathur, "
      target="_blank"
    >
      <FontAwesomeIcon icon={faEnvelope} /> Contact Me Now!
    </Button>
  );
};

export default Mail;
