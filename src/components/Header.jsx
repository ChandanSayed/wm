import React, { useContext } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { Context } from '../context/AppContext';

const Header = () => {
  const { user, userPhoto, setUser } = useContext(Context);
  const auth = getAuth(app);
  function handleLogout() {
    signOut(auth)
      .then(() => {
        setUser('');
        return <Navigate to={'/'} />;
      })
      .catch(error => {
        console.log(error);
      });
  }

  const navItems = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/services'}>Services</NavLink>
      </li>
      <li>
        <NavLink className={`${user ? '' : 'hidden'}`} to={'/profile'}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to={'/about'} className={`${user ? '' : 'hidden'}`}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={'/login'} className={`${!user ? '' : 'hidden'}`}>
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={'/'} className="text-4xl font-bold text-red-600">
            W<span className="text-yellow-500">M</span>
          </Link>
        </div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>

        <div className="flex-none">
          <div className={`dropdown dropdown-end ${user ? '' : 'hidden'}`}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Profile Picture" src={userPhoto} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to={'/profile'} className="justify-between">
                  {user}
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
