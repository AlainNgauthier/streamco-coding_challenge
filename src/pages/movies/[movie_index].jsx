import TemplateMovies from 'templates/movies';

function Movies(props) {
  const { moviesToRender, num_pages, current_page } = props;
  return (
    <>
      <TemplateMovies
        movies={moviesToRender}
        num_pages={num_pages}
        current_page={current_page}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const SERIES_PER_PAGE = 21;
  let movies = [];

  //fetching all series and movies items
  const res = await fetch(
    'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
  );

  const seriesAndMovies = await res.json();

  //filtering only series
  movies = seriesAndMovies.entries.filter(
    (item) => item.programType === 'movie'
  );

  const num_pages = Math.ceil(movies.length / SERIES_PER_PAGE);

  let paths = [];
  for (let i = 1; i <= num_pages; i++) {
    paths.push({
      params: {
        movie_index: i.toString()
      }
    });
  }

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const page = parseInt((params && params.movie_index) || 1);

  const SERIES_PER_PAGE = 21;
  let movies = [];

  //fetching all series and movies items
  const res = await fetch(
    'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
  );

  const seriesAndMovies = await res.json();

  //filtering only movies
  movies = seriesAndMovies.entries.filter(
    (item) => item.programType === 'movie'
  );

  const num_pages = Math.ceil(movies.length / SERIES_PER_PAGE);
  const pageIndex = page - 1;
  const moviesRendered = movies.slice(
    pageIndex * SERIES_PER_PAGE,
    (pageIndex + 1) * SERIES_PER_PAGE
  );

  return {
    props: {
      moviesToRender: moviesRendered,
      num_pages,
      current_page: pageIndex + 1
    }
  };
};

export default Movies;
