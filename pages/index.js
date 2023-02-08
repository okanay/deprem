import EmergencyResponse from "../components/sections/EmergencyResponse";
import TwitterHelperAccounts from "../components/sections/TwitterHelperAccounts";

const Home = () => {
  return (
    <div className={""}>

      <EmergencyResponse />
      <TwitterHelperAccounts/>

    </div>
  );
};

export async function getServerSideProps(context) {
  return { props: { message: "props" } };
}

export default Home;
