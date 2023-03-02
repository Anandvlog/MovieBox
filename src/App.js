import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/Scss/style.scss";
import "./Assets/Scss/responsive.scss";
import Layout from "./Component/Layout";
import { Route, Routes } from "react-router-dom";
import Loader from "./Component/Common/Loader";

const Home = React.lazy(() => import("./Component/Pages/Home"));
const Movies = React.lazy(() => import("./Component/Pages/Movies"));
const NotFoundPage = React.lazy(() => import("./Component/Pages/NotFoundPage"));
const Reporting = React.lazy(() => import("./Component/Pages/Reporting"));
const Users = React.lazy(() => import("./Component/Pages/Users"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
