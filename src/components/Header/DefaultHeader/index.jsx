import * as React from 'react';
import Link from 'next/link';

import MobileHeader from 'components/Header/MobileHeader';
import useWindowSize from 'components/_hooks/useWindowsSize';

import styles from './defaultHeader.module.scss';

export default function DefaultHeader() {
  //   const { useState, useEffect } = React;
  const {
    header,
    header__wrap,
    header__wrap_head,
    header__wrap_subhead,
    header__wrap_title,
    header__wrap_menu,
    header__wrap_menu_nav
  } = styles;

  const { width } = useWindowSize();

  //   useEffect(() => {
  //     console.log(width);
  //   });

  if (width < 600) {
    return <MobileHeader />;
  }

  return (
    <section className={header}>
      <div className={header__wrap}>
        <div className={header__wrap_head}>
          <div className={header__wrap_title}>
            <Link href="/">GAUTHIER Streaming</Link>
          </div>
          <div className={header__wrap_menu}>
            <ul className={header__wrap_menu_nav}>
              <li>Log in</li>
              <li>Start your free trial</li>
            </ul>
          </div>
        </div>
        <div className={header__wrap_subhead}>
          <span>Popular Titles</span>
        </div>
      </div>
    </section>
  );
}
