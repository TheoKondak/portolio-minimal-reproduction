// import Link from 'next/link';
import React from 'react';
import Button from './Button';

type Props = {};

const BackToHome = (props: Props) => {
  return (
    <Button size="small" style="transparent" className="sticky top-4 left-2 z-50">
      <a href={`${process.env.NEXT_PUBLIC_BASE_URL}#work-experience`} className={'flex items-center justify-start gap-2'}>
        <svg className="w-6 h-6 self-stretch" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <span className="leading-4">Home</span>
      </a>
    </Button>
  );
};

export default BackToHome;
