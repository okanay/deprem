import "../styles/globals.css";
import Layout from "../components/layout/layout";
// import { Provider } from "react-redux";
// import store from "../src/app/store";
function MyApp({ Component, pageProps }) {
  return (
    <div className={""}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;


// <Provider store={store}>