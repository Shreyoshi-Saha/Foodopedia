import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import search from "../images/search.png"
export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between   container ">
      <h1 className="text-2xl text-amber-950 mt-0 font-bold">
        <NavLink to={"/"}>foodOpedia</NavLink>
      </h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-amber-100 mt-7 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-orange-600 focus:shadow-amber-200"
        />
         
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-blue-700 hover:underline duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-blue-700 hover:underline duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
