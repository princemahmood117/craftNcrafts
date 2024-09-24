import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./ContextProvider/ContextProvider";


const Nav = () => {

  const {user,logOut} = useContext(AuthContext)

    // show the top of the page after clicking on "Read more"
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const handleLogOut = () => {
      logOut()
        .then(() => {
          console.log("Logged out successfully");
        })
  
        .catch((error) => {
          console.log(error);
        });
    };

    const links = (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white bg-slate-500" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white bg-slate-500" : ""
              }
              to="/addCrafts"
            >
              Add Crafts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white bg-slate-500" : ""
              }
              to="/allCrafts"
            >
              All crafts
            </NavLink>
          </li>
          
          <li>
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? "text-white bg-slate-500" : ""
              }
              to="/login"
            >
              Login
            </NavLink> */}
          </li>
        </>
      );
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to='/'>
          <span className="self-center text-2xl font-semibold">
                  <span className="text-5xl">C</span>raft<span className="text-purple-600">N</span>Crafts
                </span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
        {links}
          </ul>
        </div>

        <div className="navbar-end">
        {user ? (
          <>
            <span className="mr-2">
             {user.email}
            </span>
            <a onClick={handleLogOut} className="btn btn-sm">
              SignOut
            </a>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
      </div>
    );
};

export default Nav;