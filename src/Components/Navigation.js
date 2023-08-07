import React, { useState } from 'react';
import '../Styles/Navigation.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaBars, FaFile, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const routes = [
  {
    path: "/proposal",
    name: "Proposal Form",
    icon: <FaFile></FaFile>,
    dropdownRoutes: [
      { path: "/proposal/history", name: "History" },
      // Add more routes as needed
    ],
  },
];

function Navigation({ children }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

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
            <div key={route.name}>
              <div
                className='Link'
                onClick={handleDropdownToggle} // Toggle the dropdown when clicking on the arrow
              >
                <div className='icon'>{route.icon}</div>
                <div className='link_text'>{route.name}</div>
                <div className='arrow'>
                  {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {route.dropdownRoutes && showDropdown && (
                <div className='dropdown'>
                  {route.dropdownRoutes.map((dropdownRoute) => (
                    <NavLink
                      key={dropdownRoute.name}
                      to={dropdownRoute.path}
                      className='dropdownLink'
                      onClick={() => setShowDropdown(false)} // Close dropdown when clicking on a dropdown route
                    >
                      {dropdownRoute.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
}

export default Navigation;
