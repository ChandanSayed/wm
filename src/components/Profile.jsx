import React, { useContext } from 'react';
import { Context } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, userPhoto } = useContext(Context);
  return (
    <div>
      <h2 className="text-2xl text-blue-950">Profile Details</h2>
      <p className="my-2 text-base">User Name: {user}</p>
      <Link to={'/'}>Back to home</Link>
    </div>
  );
};

export default Profile;
