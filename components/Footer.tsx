'use client';
// import Link from 'next/link';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import CookieConsent from 'react-cookie-consent';

type Props = {
  enableCookieConcent: boolean;
  googleAnalyticsEnabled: boolean;
  enableCookieConcentDebug: boolean;
  cookieConcent?: boolean | null;
  // setCookieConcent: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const Footer = ({ enableCookieConcent, googleAnalyticsEnabled, cookieConcent, enableCookieConcentDebug }: Props) => {
  return (
    <footer id="footer" className="sticky bottom-12 sm:bottom-0 w-full z-50">
      <div>
        <SocialIcon url="https:github.com/TheoKondak" fgColor="#F7AB0A" bgColor="transparent" className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer" target="_blank" rel="noopener noreferrer" />
      </div>

      <div>
        <SocialIcon url="https:twitter.com/ThKondak" fgColor="#F7AB0A" bgColor="transparent" className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer" target="_blank" rel="noopener noreferrer" />
      </div>

      {cookieConcent != null ||
        (!cookieConcent && (
          <div className={`flex items-center justify-center `}>
            <div className="z-30">
              <a href="#hero" title="Go to Top">
                <Image src="/avatars/theo-kondak-avatar-transparent-orange-bg.svg" alt="Theodoros Kondakos silhouette" width="30" height="30" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
              </a>{' '}
            </div>
          </div>
        ))}

      {enableCookieConcent && googleAnalyticsEnabled && cookieConcent && (
        <CookieConsent
          onAccept={(acceptedByScrolling) => {
            // setCookieConcent(true);
            // if (acceptedByScrolling) {
            //   // triggered if user scrolls past threshold
            //   setCookieConcent(true);
            //   alert('Accept was triggered by user scrolling');
            // } else {
            //   setCookieConcent(true);
            //   alert('Accept was triggered by clicking the Accept button');
            // }
          }}
          onDecline={() => {
            // setCookieConcent(false);
          }}
          enableDeclineButton
          flipButtons
          buttonText="I understand"
          // cookieName="YourCookieName"
          // containerClasses="alert alert-warning col-lg-12"
          contentClasses="cookieConcentContent"
          expires={450}
          disableStyles={true}
          // overlay={true}
          debug={enableCookieConcentDebug ? true : false}>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      )}
    </footer>
  );
};

export default Footer;
