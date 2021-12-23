/* eslint-disable react/prop-types */
import Link from 'next/link';

import styles from './card.module.scss';

export default function Card({ title, subtitle, link }) {
  const { main, main__wrap, main__wrap__link, main__wrap__card } = styles;

  return (
    <div className={main}>
      <div className={main__wrap}>
        <div className={main__wrap__card}>
          <span>{title}</span>
        </div>
        <Link href={`/${link}`}>
          <a className={main__wrap__link}>{subtitle}</a>
        </Link>
      </div>
    </div>
  );
}
