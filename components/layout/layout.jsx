import { Fragment } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./footer";
import Head from "next/head";
import { AnimatePresence, motion as m } from "framer-motion";

const Layout = (props) => {
  return (
    <div
      className={"max-w-screen-sm mx-auto border border-gray-900/30 font-OpenSans py-8"}>
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
