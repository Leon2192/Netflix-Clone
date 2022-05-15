import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import reqs from "../Requests";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Rows title="POPULARS" fetchUrl={reqs.fetchPopular} />
        <Rows title="TOP RATED" fetchUrl={reqs.fetchTrending} />
        <Rows title="ACTION MOVIES" fetchUrl={reqs.fetchPopular} />
        <Rows title="COMEDY MOVIES" fetchUrl={reqs.fetchTrending} />
        <Rows title="HORROR MOVIES" fetchUrl={reqs.fetchPopular} />
        <Rows title="ROMANCE MOVIES" fetchUrl={reqs.fetchTrending} />
        <Rows title="DOCUMENTARIES" fetchUrl={reqs.fetchPopular} />
      </div>
    </>
  );
};

export default Home;
