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
      <div className="flex justify-between items-center">
        <Link to={'/'} className="text-4xl font-bold text-red-600">
          W<span className="text-yellow-500">M</span>
        </Link>
        {/* <Link to={'/login'}>Login</Link> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
