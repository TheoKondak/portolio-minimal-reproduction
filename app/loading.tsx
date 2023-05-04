import Image from 'next/image';

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image src="/loading.svg" width="100" height="100" alt="loading icon" />
    </div>
  );
};

export default Loading;
