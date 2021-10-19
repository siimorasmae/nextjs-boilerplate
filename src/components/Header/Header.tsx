import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function Header(): JSX.Element {
  const title = 'Äripäeva E-pood';
  const desc = 'Veebikeskkond Äripäeva toodete tellimiseks ja ostmiseks.';
  const ogImgRelativePath = '/og.png';
  const siteURL = 'https://pood.aripaev.ee';
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === '/' ? siteURL : `${siteURL}${pathName}`;
  const siteName = 'Äripäev';

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: 'website',
        locale: 'et',
        url: pageURL,
        title,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
          },
        ],
        site_name: siteName,
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: `${siteURL}/favicon.ico`,
        },
        // {
        //   rel: 'manifest',
        //   href: '/site.manifest',
        // },
      ]}
    />
  );
}