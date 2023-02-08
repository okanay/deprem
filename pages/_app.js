import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { Provider } from "react-redux";
import store from "../src/app/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={"my-12"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Provider>
  );
}

export default MyApp;
