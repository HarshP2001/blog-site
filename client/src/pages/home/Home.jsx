import "./home.css";
import Header from '../../components/header/Header';
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  // console.log(location);

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("/posts"+ search)
      // console.log(res);
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <>
    <Header />
    <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
    </div>
    </>
  )
}

export default Home
