/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import styles from './series.module.scss';
export default function TemplateSeries({ series, num_pages, current_page }) {
  const router = useRouter();

  //Finding if the actual page is either the first or the last
  const isFirst = current_page === 1;
  const isLast = current_page === num_pages;
  const prevPage = `/series/${current_page - 1}`;
  const nextPage = `/series/${current_page + 1}`;

  const {
    main,
    main__wrap,
    main__wrap__row,
    main__wrap__row__card,
    main__wrap__row__card_illustrattion,
    main__wrap__row__card_title,
    main__wrap__pagination,
    main__wrap__pagination__wrap,
    main__wrap__pagination__wrap__item,
    main__wrap__pagination__wrap__item_disabled
  } = styles;

  return (
    <div className={main}>
      <div className={main__wrap}>
        <div className={main__wrap__row}>
          {series.map((item, key) => (
            <div key={key} className={main__wrap__row__card}>
              <div className={main__wrap__row__card_illustrattion}>
                <span>banner</span>
              </div>
              <div className={main__wrap__row__card_title}>{item.title}</div>
            </div>
          ))}
        </div>
        <div className={main__wrap__pagination}>
          <div className={main__wrap__pagination__wrap}>
            {num_pages === 1 ? (
              <div className={main__wrap__pagination__wrap__item}>1</div>
            ) : (
              <>
                {isFirst ? (
                  <div className={main__wrap__pagination__wrap__item_disabled}>
                    PREV
                  </div>
                ) : (
                  <div
                    className={main__wrap__pagination__wrap__item}
                    onClick={() => router.push(prevPage)}
                  >
                    PREV
                  </div>
                )}
                {isLast ? (
                  <div className={main__wrap__pagination__wrap__item_disabled}>
                    NEXT
                  </div>
                ) : (
                  <div
                    className={main__wrap__pagination__wrap__item}
                    onClick={() => router.push(nextPage)}
                  >
                    NEXT
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
