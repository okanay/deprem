import NavigationBar from "./layout-components/NavigationBar";
import Footer from "./layout-components/footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div
      className={"max-w-screen-phoneXS phone:max-w-screen-phone phoneLG:max-w-screen-phoneLG  mx-auto border border-gray-900/30 font-OpenSans"}>
      <Head>
        <title>D-V2</title>
      </Head>

      <NavigationBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
