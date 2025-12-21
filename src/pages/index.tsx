import { GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import AppGrid from '../components/AppGrid';
import { AppManifestItem } from '../types';

type Props = { apps: AppManifestItem[] };

export default function Home({ apps }: Props) {
  return (
    <>
      <Head>
        <title>App Hub</title>
        <meta name="description" content="Apps gallery" />
      </Head>
      <main>
        <header style={{textAlign:'center', padding:'40px 0'}}>
          <h1>Notebooks Gallery</h1>
          <p>Explore interactive computational notebooks and applications</p>
        </header>
        <AppGrid apps={apps} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const manifestPath = path.join(process.cwd(), 'public', 'apps-manifest.json');
  const raw = fs.readFileSync(manifestPath, 'utf8');
  const apps = JSON.parse(raw) as AppManifestItem[];
  // optional sort: featured first then by order
  apps.sort((a,b) => (a.featured === b.featured ? (a.order||0) - (b.order||0) : (a.featured ? -1 : 1)));
  return { props: { apps }};
};
