import NavigationBar from "./layout-components/NavigationBar";
import Footer from "./layout-components/footer";
import Head from "next/head";
import { useQuery } from "react-query";

export const getVersion = async () => {
  const response = await fetch("http://localhost:3000/api/getversion");
  return response.json();
};

const Layout = (props) => {

  const {data, error, isLoading, isSuccess} = useQuery("version", getVersion, {
    // Veriler sadece 1 kere çekilir ve tekrar silinmez
    cacheTime: 0,
    // Fetch sırasında hata olursa 3 kere daha deneme hakkı verir
    retry: 3,
    // Her hatalı denemede 500 milisaniye beklenir
    retryDelay: 500,
  });

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
