import Head from 'next/head';
import '@/styles/globals.css';
import { fetchSettings } from '@/utils/fetchSettings';
type Props = {
  children: any;
};

type Params = {
  params: { id: string };
};

export async function generateMetadata({ params }: Params) {
  // const pageInfo: PageInfo | any = await fetchPageInfo();
  const siteSettings: any = await fetchSettings();
  const { siteTitle, metaDescription }: any = siteSettings[0];

  return {
    title: siteTitle ? siteTitle : 'Default Post Page Title',
    description: metaDescription ? metaDescription : 'Default Post Meta description',
    openGraph: {
      title: siteTitle ? siteTitle : 'Default Post ogTitle',
      description: metaDescription ? metaDescription : 'Default Post ogDescription',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      siteName: siteTitle ? siteTitle : 'Portfolio Post Default SiteName',
      images: [
        {
          url: siteSettings.ogImage ? siteSettings.ogImage : `${process.env.NEXT_PUBLIC_BASE_URL}/posts/defaultPostCoverResized.jpg`,
          width: 1200,
          height: 1200,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
  };
}

const layout = async ({ children }: Props) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#110620]">{children}</body>
    </html>
  );
};

export default layout;
