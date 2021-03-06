import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, keywords, url, image, ogImage, isBlogPost }) => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          baseUrl
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  const completeUrl = defaults.baseUrl + url;

  const getSchemaOrgJSONLD = ({
                                isBlogPost,
                                url,
                                title,
                                image,
                                description,
                              }) => {
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url,
        name: title,
        alternateName: defaults.title,
      },
    ];

    return isBlogPost
      ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'https://rajrajhans.com',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'https://rajrajhans.com',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: defaults.title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: 'Vrinda Vyas',
          },
          publisher: {
            '@type': 'Organization',
            url: 'https://rajrajhans.com',
            logo: defaults.logo,
            name: 'Vrinda Vyas',
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': defaults.siteUrl,
          },
        },
      ]
      : schemaOrgJSONLD;
  };

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!');
    return null;
  }

  const seoTitle = `${title} | Vrinda Vyas`

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    completeUrl,
    title,
    image,
    description,
  });

  return (
    <Helmet>
      {/* General tags */}
      <title>{seoTitle}</title>
      <link rel="canonical" href={completeUrl} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="author" content={"Vrinda Vyas"}/>
      <meta name="keywords" content={keywords}/>

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={completeUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seoTitle}/>
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={"@_rajrajhans"} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:site" content={"https://rajrajhans.com"} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "Blog",
  description:'Vrinda Vyas - Blog & Portfolio. Vrinda Vyas is a web developer studying computer engineering. This blog reflects Raj\'s ideas, projects and learnings. ',
  keywords:"Vrinda Vyas, Raj, Rajhans, rajrajhans",
  url:``,
  image: "http://assets.rajrajhans.com/logo-new.png",
  ogImage: "http://assets.rajrajhans.com/logo-og.png",
  isBlogPost:0
}

export default SEO;