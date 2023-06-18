import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to my website. I am a full-stack web developer and I build web
          applications with...
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>React</li>
          <li>NextJS</li>
        </ul>
        <p>
          Find me on <a href="https://github.com/hanleymark">github</a>,{' '}
          <a href="https://www.linkedin.com/in/hanley-mark/">linkedIn</a> and {' '}
          <a href="https://twitter.com/hanmark">twitter</a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
