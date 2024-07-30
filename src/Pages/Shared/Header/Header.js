import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  const menuItems = <>
    {
      user?.uid ?
        <>
         <li className='font-semibold'><Link to='/'>Home</Link></li>
          <li className='font-semibold'><Link to='/services'>Services</Link></li>
          <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
          <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
          <li className='font-semibold'><Link to='/addservices'>Add Service</Link></li>
          {/* <Link className='text-light mx-2 text-decoration-none ' to='/myreviews'>My Reviews</Link> */}
          {/* <Link className='text-light mx-2 text-decoration-none ' to='/addservices'>Add Service</Link> */}

        </>
        :
        <>
          <li className='font-semibold'><Link to='/'>Home</Link></li>
          <li className='font-semibold'><Link to='/services'>Services</Link></li>
          <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
          <li className='font-semibold'><Link to='/login'>Login</Link></li>
        </>
    }
  </>
  return (
    <div className="navbar h-22    bg-orange-400 text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-500 text-neutral-content rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl w-20 h-20 font-bold">
          <img src={logo} alt="" />QuickEat</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.uid ?
            <>
              <span>  {user?.displayName}</span>
              <button className='mx-2' variant='light' onClick={handleLogOut}>Logout</button>
            </>
            :
            <>
              <Link className='text-light mx-2 text-decoration-none ' to='/login'>Login</Link>
              <Link className='text-light mx-2 text-decoration-none' to='/signup'>SignUp</Link>
            </>
        }

      </div>
      <div>
        {user?.photoURL ?
          <img className='rounded-full' style={{ height: '50px', width: '50px' }}
            src={user?.photoURL} alt='' />
          : <FaUser></FaUser>}
      </div>
    </div>
  );
};

export default Header;