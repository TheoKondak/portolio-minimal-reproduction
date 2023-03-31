import Head from 'next/head';

// Fonts
import { Inter } from '@next/font/google';
// import styles from '@/styles/Home.module.css';

// Components
import Header from '@/components/Header';
import { fetchSocials } from '../utils/fetchSocials';

const inter = Inter({ subsets: ['latin'] });

// Types
import { Social } from '../typings';
import { GetStaticProps } from 'next';

type Props = {
  socials: Social[];
};

export default function Home({ socials }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0a]/80 scrollbar-thumb-rounded-md">
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* Header */}
      <Header socials={socials} />
      <span>test</span>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      socials,
    },
    revalidate: 10,
  };
};
