import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
  const[cats,setcats] = useState([]);

  useEffect(()=> {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setcats(res.data);
    } 
    getCats();
  },[])

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarImg'
        src="https://th.bing.com/th/id/OIP.y-s8MY4Xt1vn-4baOq4HgAHaEp?pid=ImgDet&w=190.566622&h=119.76999999999998&c=7&dpr=1.25" alt="" 
        />
        <p className='sidebarPara'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
             quidem minima deleniti quisquam
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
             ))}
            
        </ul>
      </div>
      
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
