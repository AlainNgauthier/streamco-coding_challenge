/* eslint-disable react/prop-types */
import TemplateSeries from 'templates/series';

function Series(props) {
  const { seriesToRender, num_pages, current_page } = props;
  return (
    <>
      <TemplateSeries
        series={seriesToRender}
        num_pages={num_pages}
        current_page={current_page}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const SERIES_PER_PAGE = 21;
  let series = [];

  //fetching all series and movies items
  const res = await fetch(
    'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
  );

  const seriesAndMovies = await res.json();

  //filtering only series
  series = seriesAndMovies.entries.filter(
    (item) => item.programType === 'series'
  );

  const num_pages = Math.ceil(series.length / SERIES_PER_PAGE);

  let paths = [];
  for (let i = 1; i <= num_pages; i++) {
    paths.push({
      params: {
        page_index: i.toString()
      }
    });
  }

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const page = parseInt((params && params.page_index) || 1);

  const SERIES_PER_PAGE = 21;
  let series = [];

  //fetching all series and movies items
  const res = await fetch(
    'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
  );

  const seriesAndMovies = await res.json();

  //filtering only series
  series = seriesAndMovies.entries.filter(
    (item) => item.programType === 'series'
  );

  const num_pages = Math.ceil(series.length / SERIES_PER_PAGE);
  const pageIndex = page - 1;
  const seriesRendered = series.slice(
    pageIndex * SERIES_PER_PAGE,
    (pageIndex + 1) * SERIES_PER_PAGE
  );

  return {
    props: {
      seriesToRender: seriesRendered,
      num_pages,
      current_page: pageIndex + 1
    }
  };
};

export default Series;
