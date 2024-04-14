import { Link } from "react-router-dom";
import "../index.css";
import "../app.css";
import Layout from "../components/Layout";

const Project = () => {
  return (
    <>
      <Layout>
        <div className="w-auto m-auto px-4 py-4 flex flex-col md:flex-row gap-4 justify-center page">
          <div className="">
            <p className="uppercase text-lg hover:underline shadow-lg">
              Production grade project
            </p>
            <ul>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://mern-book-store-frontend-gamma.vercel.app/">
                  E-commerce Website{" "}
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://mern-book-store-frontend-gamma.vercel.app/">
                  Social Media Platform:{" "}
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://mern-book-store-frontend-gamma.vercel.app/">
                  Blog or Content Management System (CMS){" "}
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://mern-book-store-frontend-gamma.vercel.app/">
                  Real-time Chat Application:{" "}
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://mern-book-store-frontend-gamma.vercel.app/">
                  Task Management or To-Do List:{" "}
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://mern-book-store-frontend-gamma.vercel.app/">
                  Online Learning Platform:{" "}
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://mern-book-store-frontend-gamma.vercel.app/">
                  Weather or News Aggregator:{" "}
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://mern-book-store-frontend-gamma.vercel.app/">
                  Booking or Reservation System:{" "}
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://www.majhi-nepal.com.np/">
                  Portfolio or Resume Website:{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="uppercase text-lg hover:underline shadow-lg">
              Practice project
            </p>
            <ul>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://react-bg-changer-ashy.vercel.app/">
                  Background Changer
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://react-pw-generator.vercel.app/">
                  Password Generator
                </Link>
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-gray-500 hover:opacity-[0.4]">
                <Link to="https://mern-book-store-frontend-gamma.vercel.app/">
                  Abookstore (simple CRUD implimentation){" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Project;
