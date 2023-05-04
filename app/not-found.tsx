import Button from '@/components/Button';
import Image from 'next/image';
// import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="background w-screen h-screen absolute top-0 left-0">
        <Image src="/not-found/vikos-gorge-min.jpg" alt="Vikos Gorge" width="1920" height="1080" className="object-cover w-screen h-screen" />
      </div>
      <div className="z-10 p-10 pb-1 rounded-md bg-white flex flex-col items-center justify-center">
        <h1 className="flex flex-col items-center justify-center my-4">
          <span className="text-4xl font-bold">...OUPS</span>
          <span className="text-9xl font-bold">404</span>
          <span className="text-4xl font-bold">Page Not Found</span>
        </h1>

        <div className="flex flex-col items-center justify-center">
          <Button style="primary" size="medium">
            <a href={`${process.env.NEXT_PUBLIC_BASE_URL}`} title="Back to Home">
              Back to Home
            </a>
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center max-w-5/6 mx-auto mt-5 mb-1">
          <h3 className="mb-1 text-center">
            <span className="text-sm font-bold">Do you think this is a bug? Help me squash it!</span> <span className="text-sm block">Give me some information on how you ended up here</span>
          </h3>
          <Button style="primary" size="small">
            <a href={`${process.env.NEXT_PUBLIC_BASE_URL}#contact`} title="Report an issue">
              Report a bug
            </a>
          </Button>
        </div>

        {/* <p className="">Could not find requested resource</p> */}
      </div>
    </div>
  );
}
