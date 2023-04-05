import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY || ''}
      // language="[optional_language]"
      // useRecaptchaNet="[optional_boolean_value]"
      // useEnterprise="[optional_boolean_value]"
      scriptProps={
        {
          // async: false, // optional, default to false,
          // defer: false, // optional, default to false
          // appendTo: 'head', // optional, default to "head", can be "head" or "body",
          // nonce: undefined, // optional, default undefined
        }
      }
      container={{
        // optional to render inside custom element
        // element: '[required_id_or_htmlelement]',
        parameters: {
          // badge: '[inline|bottomright|bottomleft]', // optional, default undefined
          theme: 'dark', // optional, default undefined
        },
      }}>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}
