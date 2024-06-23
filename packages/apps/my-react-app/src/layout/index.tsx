import React from 'react';
import { Outlet } from 'react-router-dom';
import * as styles from './index.module.less';

export default function Layout() {
  return <div className={styles.layout}>
    <Outlet></Outlet>
  </div>
}