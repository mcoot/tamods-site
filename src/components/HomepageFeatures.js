import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
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

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
