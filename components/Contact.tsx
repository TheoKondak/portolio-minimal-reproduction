'use client';
import { useState, useCallback } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { PageInfo } from '@/typings';
import ContactForm from './ContactForm';

type Inputs = {
  gReCaptchaToken: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isValidEmail: boolean | null;
  isValidName: boolean | null;
  isValidMessage: boolean | null;
};

interface Contact {
  pageInfo: PageInfo;
}

const Contact = ({ pageInfo }: Contact) => {
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
      <div className="h-screen relative flex flex-col md:flex-row items-center justify-center text-center md:text-left mx-auto">
        <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl xl:space-y-0 mx-auto">Contact</h3>

        <div className="flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            Wanna <span className="decoration-[#f7ab0a]/50 underline">talk</span>?
          </h4>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.address}</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.email}</p>
          </div>

          <ContactForm pageInfo={pageInfo} />
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
