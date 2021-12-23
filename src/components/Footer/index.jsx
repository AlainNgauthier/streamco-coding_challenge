import styles from './footer.module.scss';

export default function Footer() {
  const {
    footer,
    footer__wrap,
    footer__wrap__menu,
    footer__wrap__menu__nav,
    footer__wrap__menu__nav_item,
    footer__wrap__menu__copyright,
    footer__wrap__links
  } = styles;
  return (
    <footer className={footer}>
      <section className={footer__wrap}>
        <div className={footer__wrap__menu}>
          <ul className={footer__wrap__menu__nav}>
            <li className={footer__wrap__menu__nav_item}>Home</li>
            <li className={footer__wrap__menu__nav_item}>
              Terms ans Conditions
            </li>
            <li className={footer__wrap__menu__nav_item}>Privacy Policy</li>
            <li className={footer__wrap__menu__nav_item}>
              collection Statement
            </li>
            <li className={footer__wrap__menu__nav_item}>Help</li>
            <li className={footer__wrap__menu__nav_item}>Manage Account</li>
          </ul>
          <div className={footer__wrap__menu__copyright}>
            <span>Copyright 2021 GAUTHIER Streaming. All Rights Reserved.</span>
          </div>
        </div>
        <div className={footer__wrap__links}>
          <section>social media</section>
          <section>downloads</section>
        </div>
      </section>
    </footer>
  );
}
