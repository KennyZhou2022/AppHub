import React from 'react';
import AppCard from './AppCard';
import { AppManifestItem } from '../types';
import styles from '../styles/AppGrid.module.css';

export default function AppGrid({ apps }: { apps: AppManifestItem[] }) {
  return (
    <div className={styles.grid}>
      {apps.map(app => <AppCard key={app.id} app={app} />)}
    </div>
  );
}
