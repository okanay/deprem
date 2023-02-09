import { Fragment } from "react";
import NavigationBar from "./layout-components/NavigationBar";
import Footer from "./layout-components/footer";
import Head from "next/head";
import { AnimatePresence, motion as m } from "framer-motion";

const Layout = (props) => {
  return (
    <div
      className={"max-w-screen-phoneXS phone:max-w-screen-phone phoneLG:max-w-screen-phoneLG  mx-auto border border-gray-900/30 font-OpenSans"}>
      <Head>
        <title>Yardim IO</title>
      </Head>

      <NavigationBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
