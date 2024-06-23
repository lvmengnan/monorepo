import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './index.module.less';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.slogn}>Welcome To Mono React App!</div>
      <button
        className="rounded rounded-r border-2 border-orange-500 bg-white px-4 py-2"
        onClick={() => navigate('/about')}
      >
        Go To About!
      </button>
    </div>
  );
}
