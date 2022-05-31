import React, { useEffect, useState } from "react";
import About from "../about/About";
import SampleStories from "../sampleStories/SampleStories";

import { useLocation } from "react-router-dom";
import axios from "axios";
// import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const fetchPosts = async () => {
    const res = await axios.get("/posts" + search);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <header class="masthead">
        <div class="container">
          <div class="masthead-subheading">Welcome To Our Blog Site!</div>
          <div class="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <a class="btn btn-primary btn-xl text-uppercase" href="#about">
            Tell Me More
          </a>
        </div>
      </header>
      <About />
      <SampleStories />
    </>
  );
}
