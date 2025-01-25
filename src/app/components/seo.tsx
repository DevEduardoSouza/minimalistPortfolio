import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
}

export function SEO({ title, description, url }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
