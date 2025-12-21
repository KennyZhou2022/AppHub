import React from 'react';
import { AppManifestItem } from '../types';
import styles from '../styles/AppCard.module.css';

export default function AppCard({ app }: { app: AppManifestItem }) {
  return (
    <article className={styles.card} aria-labelledby={`title-${app.id}`}>
      <div className={styles.header}>
        <img src={app.icon || '/icons/default.svg'} alt="" className={styles.icon} />
        <span className={styles.type}>{app.type}</span>
      </div>

      <h3 id={`title-${app.id}`} className={styles.title}>{app.title}</h3>
      <p className={styles.desc}>{app.description}</p>

      <div className={styles.tags}>
        {(app.tags || []).map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>

      <a
        className={styles.openBtn}
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${app.title}`}
      >
        Open {app.type === 'notebook' ? 'Notebook' : 'App'}
      </a>
    </article>
  );
}
