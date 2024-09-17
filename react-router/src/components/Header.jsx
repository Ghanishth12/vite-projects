import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <div className="bg-cyan-800">
          <div className="flex justify-between p-3">
            <div className="flex items-center">
              <h3>Logo</h3>
            </div>
            <div>
              <ul className="flex">
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      `m-2 hover:underline flex align-middle ${
                        isActive ? "text-orange-700" : "text-white"
                      } cursor-pointer`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      `m-2 hover:underline flex align-middle ${
                        isActive ? "text-orange-700" : "text-white"
                      } cursor-pointer`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      `m-2 hover:underline flex align-middle ${
                        isActive ? "text-orange-700" : "text-white"
                      } cursor-pointer`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/help"}
                    className={({ isActive }) =>
                      `m-2 hover:underline flex align-middle ${
                        isActive ? "text-orange-700" : "text-white"
                      } cursor-pointer`
                    }
                  >
                    Help
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center">Sign In</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
