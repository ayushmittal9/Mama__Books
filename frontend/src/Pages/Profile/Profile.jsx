
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import "./Profile.css"
import AllProduct from '../../Components/AllProduct/AllProduct';

function Profile() {

 const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  if (!user) {
    navigate('/Dashboard');
    return null;
  }
const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <>
    <div className="Viewuser">
      <div className="desc">
        <h1>{user.username}</h1>
        <h2>Email: {user.email}</h2>
        <h2><span>Phone : {user.phone}</span></h2>
        <h4>Address : {user.address}</h4>
        <h3><span>{user.city}, {user.postalCode}</span></h3>
              <div className="button" style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => navigate(`/${user.id}/addproduct`)}>Add Your Product</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
              
      </div>
     
    </div>
     <AllProduct showActions={true} title='Your Added Products' userId={user.id} />
    </>
  )
}

export default Profile