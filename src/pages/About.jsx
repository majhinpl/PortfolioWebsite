import "../index.css";
import "../app.css";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Layout>
        <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 page">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Hey 👋 I am
                  <br className="block sm:hidden" />
                  Nepal Majhi
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                  Are you in search of top-notch MERN stack development and
                  stunning web design solutions? Look no further! I'm MAJHINpl,
                  a seasoned MERN stack developer and creative web designer with
                  hands-on experience in crafting robust web applications and
                  captivating designs that elevate your online presence.
                </p>
                <Link to="/contact">
                  <button
                    type="button"
                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 uppercase mt-2"
                  >
                    Send Email
                  </button>
                </Link>
              </div>

              <div className="relative mt-2 mb-2">
                <img
                  className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                  alt=""
                />

                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                  src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
