import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Experience Tribes Ascend like you have before',
    description: (
      <>
      Miss the old class system? Hated everything about the last few patches? Now you can play either OOTB or GOTY Tribes Ascend on custom dedicated servers.
      </>
    ),
  },
  {
    title: 'Configure and customise with a comprehensive Lua API',
    description: (
      <>
      Customise your game experience with clientside TAMods, including custom HUDs, route recording, stats recording and much more.
      </>
    ),
  },
  {
    title: 'Change your play with game server modifications',
    description: (
      <>
      Configure and host your own servers with TAMods-Server, powering "GOTY Tribes" with extensive game modification options.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--light', styles.heroBanner)}>
        <div className="container">
          <img src="/img/tamods-logo.png"/>
          <p className="hero__subtitle">{siteConfig.tagline}</p>    
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc_user_install')}>
              Get TAMods
            </Link>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc_dev_intro')}>
              Clientside TAMods Docs
            </Link>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc_srv_intro')}>
              Serverside TAMods Docs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
