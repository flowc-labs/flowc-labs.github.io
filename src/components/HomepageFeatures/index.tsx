import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dynamic Mediation Policies',
    icon: '⚙️',
    description: (
      <>
        Apply and modify mediation policies at runtime without redeploying. 
        Choose from a rich library of built-in policies or create custom ones 
        for your specific needs.
      </>
    ),
  },
  {
    title: 'Powered by Envoy Proxy',
    icon: '🚀',
    description: (
      <>
        Leverage the battle-tested Envoy proxy as your data plane. Benefit from 
        advanced load balancing, circuit breaking, and observability features out of the box.
      </>
    ),
  },
  {
    title: 'Enterprise API Patterns',
    icon: '🏢',
    description: (
      <>
        First-class support for authentication, authorization, rate limiting, 
        transformation, and more. All the patterns you need for enterprise-grade 
        API management.
      </>
    ),
  },
  {
    title: 'High Performance',
    icon: '⚡',
    description: (
      <>
        Built for scale with low latency and high throughput. Handle millions 
        of requests per second with minimal overhead and resource consumption.
      </>
    ),
  },
  {
    title: 'Comprehensive Observability',
    icon: '📈',
    description: (
      <>
        Deep visibility into your API traffic with distributed tracing, metrics, 
        and logs. Integrate seamlessly with Prometheus, Grafana, and Jaeger.
      </>
    ),
  },
  {
    title: 'Cloud Native',
    icon: '☁️',
    description: (
      <>
        Kubernetes-native design with declarative configuration. Deploy anywhere - 
        on-premises, cloud, or hybrid environments with consistent behavior.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.featuresTitle}>
          Why Choose flowc?
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
