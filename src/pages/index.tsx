import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './index.module.css';

function HexagonBackground() {
  return (
    <svg className={styles.hexagonBackground} viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
      {/* Extra Large hexagons - Outline only */}
      <g transform="translate(120, 80) rotate(15)">
        <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="none" stroke="white" strokeWidth="1.5" opacity="0.05"/>
      </g>
      <g transform="translate(1050, 100) rotate(-22)">
        <polygon points="0,-55 48,-27.5 48,27.5 0,55 -48,27.5 -48,-27.5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.06"/>
      </g>
      <g transform="translate(1000, 320) rotate(30)">
        <polygon points="0,-52 45,-26 45,26 0,52 -45,26 -45,-26" fill="none" stroke="white" strokeWidth="1.5" opacity="0.055"/>
      </g>
      
      {/* Large hexagons - Various styles */}
      <g transform="translate(250, 120) rotate(-10)">
        <polygon points="0,-44 38,-22 38,22 0,44 -38,22 -38,-22" fill="none" stroke="white" strokeWidth="1.8" opacity="0.07"/>
      </g>
      <g transform="translate(750, 140) rotate(45)">
        <polygon points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19" fill="white" fillOpacity="0.02" stroke="white" strokeWidth="1.2" opacity="0.08"/>
      </g>
      <g transform="translate(180, 250) rotate(18)">
        <polygon points="0,-42 36,-21 36,21 0,42 -36,21 -36,-21" fill="none" stroke="white" strokeWidth="1.5" opacity="0.065"/>
      </g>
      <g transform="translate(400, 320) rotate(-25)">
        <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="white" fillOpacity="0.025" stroke="white" strokeWidth="1" opacity="0.07"/>
      </g>
      <g transform="translate(900, 280) rotate(12)">
        <polygon points="0,-37 32,-18.5 32,18.5 0,37 -32,18.5 -32,-18.5" fill="none" stroke="white" strokeWidth="1.6" opacity="0.075"/>
      </g>
      <g transform="translate(600, 350) rotate(-35)">
        <polygon points="0,-46 40,-23 40,23 0,46 -40,23 -40,-23" fill="none" stroke="white" strokeWidth="1.3" opacity="0.06"/>
      </g>
      
      {/* Medium hexagons - More variety */}
      <g transform="translate(480, 90) rotate(55)">
        <polygon points="0,-28 24,-14 24,14 0,28 -24,14 -24,-14" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="1" opacity="0.09"/>
      </g>
      <g transform="translate(200, 180) rotate(-40)">
        <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="white" strokeWidth="1.2" opacity="0.08"/>
      </g>
      <g transform="translate(650, 170) rotate(20)">
        <polygon points="0,-26 22.5,-13 22.5,13 0,26 -22.5,13 -22.5,-13" fill="white" fillOpacity="0.035" stroke="white" strokeWidth="0.8" opacity="0.085"/>
      </g>
      <g transform="translate(950, 200) rotate(-15)">
        <polygon points="0,-29 25,-14.5 25,14.5 0,29 -25,14.5 -25,-14.5" fill="none" stroke="white" strokeWidth="1.1" opacity="0.075"/>
      </g>
      <g transform="translate(350, 240) rotate(48)">
        <polygon points="0,-27 23.5,-13.5 23.5,13.5 0,27 -23.5,13.5 -23.5,-13.5" fill="white" fillOpacity="0.025" stroke="white" strokeWidth="1" opacity="0.08"/>
      </g>
      <g transform="translate(750, 230) rotate(-28)">
        <polygon points="0,-26.5 23,-13.25 23,13.25 0,26.5 -23,13.25 -23,-13.25" fill="none" stroke="white" strokeWidth="1.3" opacity="0.09"/>
      </g>
      <g transform="translate(550, 280) rotate(35)">
        <polygon points="0,-25 22,-12.5 22,12.5 0,25 -22,12.5 -22,-12.5" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.9" opacity="0.085"/>
      </g>
      <g transform="translate(150, 340) rotate(-18)">
        <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="white" strokeWidth="1.2" opacity="0.07"/>
      </g>
      <g transform="translate(850, 340) rotate(42)">
        <polygon points="0,-28 24,-14 24,14 0,28 -24,14 -24,-14" fill="white" fillOpacity="0.028" stroke="white" strokeWidth="1" opacity="0.075"/>
      </g>
      
      {/* Small hexagons - Scattered for texture */}
      <g transform="translate(140, 140) rotate(25)">
        <polygon points="0,-14 12,-7 12,7 0,14 -12,7 -12,-7" fill="white" fillOpacity="0.04" stroke="none"/>
      </g>
      <g transform="translate(420, 60) rotate(-35)">
        <polygon points="0,-13 11,-6.5 11,6.5 0,13 -11,6.5 -11,-6.5" fill="white" fillOpacity="0.045" stroke="none"/>
      </g>
      <g transform="translate(780, 80) rotate(50)">
        <polygon points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8" fill="white" fillOpacity="0.038" stroke="none"/>
      </g>
      <g transform="translate(320, 200) rotate(-20)">
        <polygon points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6" fill="white" fillOpacity="0.05" stroke="none"/>
      </g>
      <g transform="translate(680, 210) rotate(40)">
        <polygon points="0,-13.5 11.7,-6.75 11.7,6.75 0,13.5 -11.7,6.75 -11.7,-6.75" fill="white" fillOpacity="0.042" stroke="none"/>
      </g>
      <g transform="translate(850, 180) rotate(-45)">
        <polygon points="0,-15 13,-7.5 13,7.5 0,15 -13,7.5 -13,-7.5" fill="white" fillOpacity="0.048" stroke="none"/>
      </g>
      <g transform="translate(1080, 240) rotate(30)">
        <polygon points="0,-13 11,-6.5 11,6.5 0,13 -11,6.5 -11,-6.5" fill="white" fillOpacity="0.04" stroke="none"/>
      </g>
      <g transform="translate(270, 290) rotate(-12)">
        <polygon points="0,-14 12,-7 12,7 0,14 -12,7 -12,-7" fill="white" fillOpacity="0.046" stroke="none"/>
      </g>
      <g transform="translate(520, 340) rotate(55)">
        <polygon points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6" fill="white" fillOpacity="0.043" stroke="none"/>
      </g>
      <g transform="translate(800, 320) rotate(-30)">
        <polygon points="0,-13.5 11.7,-6.75 11.7,6.75 0,13.5 -11.7,6.75 -11.7,-6.75" fill="white" fillOpacity="0.045" stroke="none"/>
      </g>
      
      {/* Tiny hexagons - Extra detail */}
      <g transform="translate(220, 110) rotate(15)">
        <polygon points="0,-8 7,-4 7,4 0,8 -7,4 -7,-4" fill="white" fillOpacity="0.055" stroke="none"/>
      </g>
      <g transform="translate(560, 100) rotate(-25)">
        <polygon points="0,-8.5 7.4,-4.25 7.4,4.25 0,8.5 -7.4,4.25 -7.4,-4.25" fill="white" fillOpacity="0.05" stroke="none"/>
      </g>
      <g transform="translate(860, 120) rotate(38)">
        <polygon points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5" fill="white" fillOpacity="0.052" stroke="none"/>
      </g>
      <g transform="translate(1020, 160) rotate(-42)">
        <polygon points="0,-9.5 8.2,-4.75 8.2,4.75 0,9.5 -8.2,4.75 -8.2,-4.75" fill="white" fillOpacity="0.048" stroke="none"/>
      </g>
      <g transform="translate(100, 230) rotate(28)">
        <polygon points="0,-8 7,-4 7,4 0,8 -7,4 -7,-4" fill="white" fillOpacity="0.053" stroke="none"/>
      </g>
      <g transform="translate(450, 230) rotate(-18)">
        <polygon points="0,-8.5 7.4,-4.25 7.4,4.25 0,8.5 -7.4,4.25 -7.4,-4.25" fill="white" fillOpacity="0.05" stroke="none"/>
      </g>
      <g transform="translate(720, 260) rotate(45)">
        <polygon points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5" fill="white" fillOpacity="0.054" stroke="none"/>
      </g>
      <g transform="translate(300, 370) rotate(-35)">
        <polygon points="0,-9.5 8.2,-4.75 8.2,4.75 0,9.5 -8.2,4.75 -8.2,-4.75" fill="white" fillOpacity="0.048" stroke="none"/>
      </g>
      <g transform="translate(680, 370) rotate(22)">
        <polygon points="0,-8 7,-4 7,4 0,8 -7,4 -7,-4" fill="white" fillOpacity="0.051" stroke="none"/>
      </g>
      <g transform="translate(980, 320) rotate(-28)">
        <polygon points="0,-8.5 7.4,-4.25 7.4,4.25 0,8.5 -7.4,4.25 -7.4,-4.25" fill="white" fillOpacity="0.049" stroke="none"/>
      </g>
    </svg>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <HexagonBackground />
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Enterprise-Grade API Management
          <br />
          Powered by Envoy Proxy
        </Heading>
        <p className={styles.heroSubtitle}>
          flowc is a modern API management control plane that leverages Envoy proxy 
          as the runtime gateway. Build, secure, and scale your APIs with built-in 
          mediation policies and first-class support for enterprise API patterns.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started →
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.buttonSecondary)}
            to="/docs/intro">
            View Documentation
          </Link>
        </div>
        {/* <div className={styles.heroHighlights}>
          <div className={styles.highlight}>
            <strong>Built on Envoy</strong>
            <span>Production-tested data plane</span>
          </div>
          <div className={styles.highlight}>
            <strong>Dynamic Policies</strong>
            <span>Add/remove policies at runtime</span>
          </div>
          <div className={styles.highlight}>
            <strong>Enterprise Ready</strong>
            <span>Security, scalability, observability</span>
          </div>
        </div> */}
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div className={styles.aboutContent}>
          <Heading as="h2" className={styles.sectionTitle}>
            About flowc
          </Heading>
          <p className={styles.aboutText}>
            flowc is an enterprise-grade API management control plane designed from the ground up 
            to provide comprehensive API lifecycle management. By leveraging Envoy proxy in the data plane, 
            flowc delivers unmatched performance, reliability, and scalability for modern API architectures.
          </p>
          <p className={styles.aboutText}>
            With first-class support for widely-used API management patterns, flowc provides a rich 
            set of built-in mediation policies that can be dynamically added or removed without downtime. 
            For advanced use cases, define custom mediation policies tailored to your specific requirements.
          </p>
          <div className={styles.aboutFeatures}>
            <div className={styles.aboutFeature}>
              <h3>🎯 API-First Design</h3>
              <p>Complete API lifecycle management from design to retirement</p>
            </div>
            <div className={styles.aboutFeature}>
              <h3>⚡ High Performance</h3>
              <p>Built on Envoy proxy for blazing-fast request processing</p>
            </div>
            <div className={styles.aboutFeature}>
              <h3>🔧 Extensible</h3>
              <p>Custom mediation policies for advanced use cases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const useCases = [
    {
      title: 'Security & Authentication',
      description: 'Implement OAuth2, JWT validation, API key management, and mTLS. Apply rate limiting, threat protection, and WAF policies at the gateway level.',
      icon: '🔒',
    },
    {
      title: 'Traffic Management',
      description: 'Advanced routing, load balancing, circuit breaking, and retry policies. Route based on headers, query parameters, or custom rules.',
      icon: '🚦',
    },
    {
      title: 'Transformation & Mediation',
      description: 'Transform requests and responses on-the-fly. Convert between protocols, modify payloads, and aggregate multiple backend calls.',
      icon: '🔄',
    },
    {
      title: 'Observability',
      description: 'Deep insights into API performance with distributed tracing, metrics, and logs. Integrate with Prometheus, Grafana, and Jaeger.',
      icon: '📊',
    },
  ];

  return (
    <section className={styles.useCasesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Use Cases
        </Heading>
        <div className={styles.useCaseGrid}>
          {useCases.map((useCase, idx) => (
            <div key={idx} className={styles.useCase}>
              <div className={styles.useCaseIcon}>{useCase.icon}</div>
              <Heading as="h3">{useCase.title}</Heading>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className={styles.architectureSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Architecture
        </Heading>
        <div className={styles.architectureContent}>
          <div className={styles.architectureText}>
            <h3>Control Plane</h3>
            <ul>
              <li>Centralized policy management</li>
              <li>Dynamic configuration updates</li>
              <li>Service discovery integration</li>
              <li>Analytics and monitoring dashboard</li>
            </ul>
            <h3>Data Plane (Envoy Proxy)</h3>
            <ul>
              <li>High-performance request routing</li>
              <li>Protocol translation (HTTP/1.1, HTTP/2, gRPC)</li>
              <li>Advanced load balancing</li>
              <li>Real-time metrics and tracing</li>
            </ul>
          </div>
          <div className={styles.architectureDiagram}>
            <div className={styles.diagramBox}>
              <strong>Control Plane</strong>
              <div>API Management Console</div>
              <div>Policy Engine</div>
              <div>Configuration Service</div>
            </div>
            <div className={styles.diagramArrow}>↓</div>
            <div className={styles.diagramBox}>
              <strong>Data Plane</strong>
              <div>Envoy Proxy</div>
              <div>Mediation Policies</div>
              <div>Gateway Runtime</div>
            </div>
            <div className={styles.diagramArrow}>↓</div>
            <div className={styles.diagramBox}>
              <strong>Backend Services</strong>
              <div>Microservices</div>
              <div>APIs</div>
              <div>Legacy Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2">Ready to Get Started?</Heading>
        <p className={styles.ctaText}>
          Join the growing community of developers building modern API architectures with flowc.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started Now
          </Link>
          <Link
            className="button button--outline button--lg"
            href="https://github.com/flowc-labs">
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Enterprise API Management Control Plane"
      description="flowc is an enterprise-grade API management control plane powered by Envoy proxy. Build, secure, and scale your APIs with dynamic mediation policies.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AboutSection />
        <UseCasesSection />
        <ArchitectureSection />
        <CTASection />
      </main>
    </Layout>
  );
}
