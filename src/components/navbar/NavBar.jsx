import { Link, NavLink } from "react-router-dom";

const ActiveNavLink = ({ isActive }) =>
  isActive
    ? "bg-white text-gray-800 rounded px-4 py-2"
    : "hover:bg-white hover:text-gray-800 rounded px-4 py-2";

function NavBar() {
  return (
    <header className="bg-gray-800 p-5 md:p-0">
      <nav className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center max-w-6xl h-20 mx-auto sm:mr-5">
        <div className=" text-white text-xl md:text-2xl lg:text-3xl font-bold sm:ml-5">
          <Link to={"/"}>Shop!FY</Link>
        </div>
        <ul className="flex items-center space-x-6 text-white text-xl font-semibold">
          <li>
            <NavLink to={"/"} className={ActiveNavLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"} className={ActiveNavLink}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
