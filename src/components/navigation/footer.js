import React from 'react';

import ContactsIcon from '@material-ui/icons/Contacts';
import TimeLapseIcon from '@material-ui/icons/Timelapse';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
  return (
    <footer>
      <div className="bck_b_dark">
        <div className="container">
          <div className="logo">Waves</div>
          <div className="wrapper">
            <div className="left">
              <h2>Contact Information</h2>
              <div className="business_nfo">
                <div className="tag">
                  <ContactsIcon />
                  <div className="nfo">
                    <div>Address</div>
                    <div>Arlington Street</div>
                  </div>
                </div>
                <div className="tag">
                  <PhoneIcon />
                  <div className="nfo">
                    <div>Phone</div>
                    <div>234523452345</div>
                  </div>
                </div>
                <div className="tag">
                  <TimeLapseIcon />
                  <div className="nfo">
                    <div>Working Hours</div>
                    <div>Temporary closed due to pandemy</div>
                  </div>
                </div>
                <div className="tag">
                  <EmailIcon />
                  <div className="nfo">
                    <div>Email</div>
                    <div>oman@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <h2>Be the first to know</h2>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                ex ipsa obcaecati recusandae fugit atque magni mollitia
                temporibus in accusamus maiores ullam, possimus, optio sapiente
                commodi, vel voluptatum autem ipsum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
