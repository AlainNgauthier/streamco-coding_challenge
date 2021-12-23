/* eslint-disable react/prop-types */
import Header from 'components/Header/DefaultHeader';

const Layout = ({ ...props }) => {
  return (
    <>
      <Header />
      <section>
        <div>{props.children}</div>
      </section>
    </>
  );
};

export default Layout;
