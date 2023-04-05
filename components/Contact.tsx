import { useState, useCallback } from 'react';

import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import { useForm, SubmitHandler } from 'react-hook-form';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { PageInfo } from '@/typings';
import { log } from 'console';

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
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [notification, setNotification] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  // const [isFormValid, setIsFormValid] = useState<boolean | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(false);
  const [isValidName, setIsValidName] = useState<boolean | null>(false);
  const [isValidSubject, setIsValidSubject] = useState<boolean | null>(false);
  const [isValidMessage, setIsValidMessage] = useState<boolean | null>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const onSubmit: SubmitHandler<Inputs> = (name, email, subject, message) => {
  //   window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
  // };

  // Styles

  // Form
  const inputStyles = `contactInput w-full sm:w-auto border-2 border-transparent`;
  const fieldError = `contactInput w-full sm:w-auto border-2 border-transparent border-red-800`;
  const textareaStyles = `contactInput w-full sm:w-auto border-2 border-transparent block`;
  const errorStyles = 'absolute -bottom-6 bg-red-800 text-white px-2 py-1 text-xs w-full rounded-bl-sm rounded-br-sm';
  // const notificationStyles = '';

  // Form Handling

  const validateEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validateNameRegex = /^[A-Za-z]+$/;

  const validateEmail = (emailToTest: string) => (String(emailToTest).toLowerCase().match(validateEmailRegex) ? setIsValidEmail(true) : setIsValidEmail(false));
  const validateName = (nameToTest: string) => (String(nameToTest).toLowerCase().match(validateNameRegex) ? setIsValidName(true) : setIsValidName(false));
  const validateSubject = (subjectToTest: string) => (String(subjectToTest).toLowerCase().length > 0 ? setIsValidSubject(true) : setIsValidSubject(false));
  const validateMessage = (messageToTest: string) => (String(messageToTest).toLowerCase().length > 0 ? setIsValidMessage(true) : setIsValidMessage(false));

  const validateEmailHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    validateEmail(e?.target?.value);
    setEmail(e?.target?.value);
  };
  const validateNameHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    validateName(e?.target?.value);
    setName(e?.target?.value);
  };
  const validateSubjectHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    validateSubject(e?.target?.value);
    setSubject(e?.target?.value);
  };
  const validateMessageHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    validateMessage(e?.target?.value);
    setMessage(e?.target?.value);
  };

  // Recaptcha
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitForm = useCallback(
    (e: React.SyntheticEvent, name: String, email: String, subject: String, message: String, isValidEmail: boolean | null, isValidName: boolean | null, isValidMessage: boolean | null) => {
      e.preventDefault();

      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }
      executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) => {
        console.log(gReCaptchaToken, 'response Google reCaptcha server');
        // submitEnquiryForm(gReCaptchaToken, name, email, subject, message, isValidEmail, isValidName, isValidMessage);
        handleSubmit(submitEnquiryForm(gReCaptchaToken, name, email, subject, message, isValidEmail, isValidName, isValidMessage));
      });
    },
    [executeRecaptcha, handleSubmit]
  );

  const submitEnquiryForm: Function = (gReCaptchaToken: String, name: String, email: String, subject: String, message: String, isValidEmail: boolean | null, isValidName: boolean | null, isValidMessage: boolean | null) => {
    // console.log(name, email, message);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/enquiry`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
        gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, 'response from backend');
        if (res?.status === 'success') {
          setNotification(res?.message);
          if (isValidEmail && isValidName && isValidMessage) {
            window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
          } else {
            console.error(`Failed to send email \n
            Checking Name: ${isValidName ? 'Valid' : 'Invalid'}
            Checking Email: ${isValidEmail ? 'Valid' : 'Invalid'}
            Checking Message: ${isValidMessage ? 'Valid' : 'Invalid'}
            `);
          }
        } else {
          setNotification(res?.message);
        }
      });
  };
  // console.log(errors.email);
  return (
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

        <form
          className="flex flex-col space-y-2 w-full sm:w-fit mx-auto"
          onSubmit={(e) => {
            handleSubmitForm(e, name, email, subject, message, isValidEmail, isValidName, isValidMessage);
          }}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="relative flex flex-col align-center justify-center">
              <input {...register('name', { required: true, pattern: validateNameRegex })} placeholder="Name" className={`${inputStyles} ${errors.name && fieldError}`} type="text" name="Your Name" onBlur={validateNameHandler} />
              {errors.name && <span className={errorStyles}>Hi! I am Theo, and you are?</span>}
            </div>
            <div className="relative flex flex-col align-center justify-center">
              <input {...register('email', { required: true, pattern: validateEmailRegex })} placeholder="E-mail" name="Your Email Address" className={`${inputStyles} ${errors.email && fieldError}`} type="text" onBlur={validateEmailHandler} />
              {errors.email && <span className={errorStyles}>Hm.. that does not look like an email</span>}
            </div>
          </div>
          <input {...register('subject')} placeholder="Subject" className={`${inputStyles} `} type="text" name="What is the subject?" onBlur={validateSubjectHandler} />
          <div className="relative flex flex-col align-center justify-center w-full">
            <textarea {...register('message', { required: true })} placeholder="Message" className={`w-full ${textareaStyles} ${errors.message && fieldError}`} onBlur={validateMessageHandler} />
            {errors.message && <span className={`${errorStyles} bottom-0`}>Message cannot be empty!</span>}
          </div>
          {/* <Submit /> */}
          <button type="submit" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
          {notification && <p className="notification">{notification}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
