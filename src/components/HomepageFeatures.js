import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Guide',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Getting Started is to get engineers start with familiarizing themselves with the services especially on deploying and running them on local machine to be used. 

        Guidelines and Code Practices documents the guidelines and practices we should have. These are the things engineers should look out for when reviewing code and approving pull requests. But it is up to the engineers discretion to practice them. 
      </>
    ),
  },
  {
    title: 'API Reference',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Documentation of all available APIs done by the Backend Engineers. Frontend Engineers can refer to this single source of truth to understand the data and constraints for each APIs. Dev Ops Engineers will be following this documentation when deploying API Gateway.
      </>
    ),
  },
  {
    title: 'Design and Architecture',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Documentation of all the design decision. This includes choices of services used like AWS services. Architectural Design Decisions like choosing Microservice Pattern is also documented here. You can also find our database schema design for each service over here. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
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
