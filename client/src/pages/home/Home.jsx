import React, { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./home.css";

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
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleLg"> Story Shore </span>
        </div>
        <img
          className="headerImg"
          src="https://wallpaperaccess.com/full/356357.jpg"
          alt="backImg"
        />
      </div>{" "}
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
