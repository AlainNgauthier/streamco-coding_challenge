/* eslint-disable react/prop-types */
import Header from 'components/Header/DefaultHeader';
import Footer from 'components/Footer';

const Layout = ({ ...props }) => {
  //   console.log(props);
  return (
    <>
      <Header />
      <section>
        <div>{props.children}</div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
