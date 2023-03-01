import NavigationBar from "./layout-components/NavigationBar";
import Footer from "./layout-components/footer";
import Head from "next/head";
import { useQuery } from "react-query";

const Layout = (props) => {

  return (
    <div
      className={"relative bg-transparent max-w-screen-phoneXS phone:max-w-screen-phone phoneLG:max-w-screen-phoneLG tablet:max-w-screen-tablet w-full mx-auto border border-gray-900/30 font-OpenSans"}>
      <Head>
        <title>Destek Ol</title>
      </Head>

      <NavigationBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
