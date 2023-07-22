import React, {useState} from 'react';
import '../Styles/Navigation.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {FaBars , FaFile} from 'react-icons/fa'


const routes = [
  {
    path: "/proposal",
    name: "Proposal Form",
    icon: <FaFile></FaFile>
  },
];

function Navigation({ children }) {
    
  return (
    <div className='main-container'>
      <motion.div animate={{ width: "300px" }} className='sidebar'>
        <div className='top_section'>
            <h1 className='logo'>BombayCat Flims</h1>
            <div className='bars'>
                <FaBars></FaBars>
            </div>
        </div>
        <section className='routes'>
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className='Link'>
                <div className='icon'>{route.icon}</div>
              <div className='link_text'>{route.name}</div>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
}

export default Navigation;
