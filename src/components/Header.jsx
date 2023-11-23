import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { Context } from '../context/AppContext';

const Header = () => {
  const { user, userPhoto } = useContext(Context);
  console.log(user, userPhoto);
  const auth = getAuth(app);
  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={'/'} className="text-4xl font-bold text-red-600">
            W<span className="text-yellow-500">M</span>
          </Link>
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
