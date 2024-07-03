import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import './Navbar.css';
import Icon from '../assets/Logo';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" ><Icon/></Link>
        <div className="nav-links">
          <NavLink to="/"  activeclassname="active">Home</NavLink>
          <NavLink to="/menu" activeclassname="active">Menu</NavLink>
          <NavLink to="/reservation" activeclassname="active">Reservation</NavLink>
          <NavLink to="/about" activeclassname="active">About</NavLink>
          <NavLink to="/login" activeclassname="active">Login</NavLink>
        </div>
        <div className="nav-icon">
          <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
        </div>
      </div>
      <Drawer
        title="Navigation"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        closeIcon={<CloseOutlined />}
      >
        <NavLink to="/"  activeClassName="active" onClick={closeDrawer}>Home</NavLink>
        <NavLink to="/menu" activeClassName="active" onClick={closeDrawer}>Menu</NavLink>
        <NavLink to="/reservation" activeClassName="active" onClick={closeDrawer}>Reservation</NavLink>
        <NavLink to="/about" activeClassName="active" onClick={closeDrawer}>About</NavLink>
        <NavLink to="/login" activeClassName="active" onClick={closeDrawer}>Login</NavLink>
      </Drawer>
    </nav>
  );
};

export default Navbar;
