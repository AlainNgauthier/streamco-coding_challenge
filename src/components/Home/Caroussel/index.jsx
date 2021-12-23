import styles from './caroussel.module.scss';

import Footer from 'components/Footer';
import Card from 'components/Home/Card';

export default function HomeCaroussel() {
  const { main, main__wrap } = styles;

  const items = [
    {
      title: 'SERIES',
      subtitle: 'Popular Series',
      link: 'series/1'
    },
    {
      title: 'MOVIES',
      subtitle: 'Popular Movies',
      link: 'movies/1'
    }
  ];

  return (
    <>
      <main className={main}>
        <section className={main__wrap}>
          {items.map((item, key) => (
            <Card
              key={key}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
