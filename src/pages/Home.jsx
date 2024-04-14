import "../app.css";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <div className="home page" id="Home">
        <Layout>
          <Hero />
        </Layout>
      </div>
    </>
  );
};

export default Home;
