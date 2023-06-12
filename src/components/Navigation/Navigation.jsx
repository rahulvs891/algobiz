import React from 'react'
import styles from './Navigation.module.css';
import { Link, NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  let activeStyle = {
    color: "black",
    backgroundColor:"white"
  };

  return (
    <div className={`${styles.navbar} row`}>
      <Link to="/"className='col-4'><img  className={styles.navlogo} src='/assets/logo.png' alt="" /></Link>
      <div className='d-flex justify-content-center col-4'>
      <div className={styles.floatnav}>
        <NavLink
          to="/"
          className={styles.floatnavitem}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={styles.floatnavitem}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={styles.floatnavitem}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Services
        </NavLink>
        <NavLink
          to="/Contact"
          className={styles.floatnavitem}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
      </div>
      </div>
      <div className={`${styles.socialcontainer} col-4`}>
      <div className={styles.social}>
        <NavLink
          to="/dashboard"
          className={styles.socialitem}
        >
          <Icon icon="ic:round-whatsapp" />
        </NavLink>
        <NavLink
          to="/dashboard"
          className={styles.socialitem}
        >
          <Icon icon="ph:twitter-logo" />
        </NavLink>
        <NavLink
          to="/dashboard"
          className={styles.socialitem}
        >
          <Icon icon="ph:linkedin-logo" />
        </NavLink>
        <NavLink
          to="/dashboard"
          className={styles.socialitem}
        >
          <Icon icon="ph:instagram-logo" />
        </NavLink>
        <NavLink to="/create" className={styles.socialitem} activeClassName="active">
          <Icon icon="ri:facebook-fill" />
        </NavLink>
      </div>
    </div>
    </div>
  );
}

export default Navigation
