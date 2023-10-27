import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <>

    <NavLink className="p-4" type="radio" to='/'>Home</NavLink>
    <NavLink className="p-4" to='/addProduct'>Add Product</NavLink>
    <NavLink className="p-4" to='/myCart'>My Cart</NavLink>
   
   
    
    </>
  return (
    <div>
      <div className="navbar bg-base-100 mt-6 mb-4 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
       
          </div>
          <img src="/logo.png" alt="" className="w-36 mx-2" />
        </div>
        <div className="navbar-center hidden lg:flex">
          {navLink}
        </div>
        <div className="navbar-end">
          <NavLink to='/login' className="btn">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
