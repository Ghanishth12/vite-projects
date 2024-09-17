import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-cyan-800 p-4 flex justify-around">
        <form action="">
          <div className="m-3">
            <label htmlFor="name" className="m-2">
              Name :
            </label>
            <input className="outline-none rounded-sm bg-cyan-800 " type="text" id="name" autoFocus />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="m-2">
              Email :
            </label>
            <input
              className="outline-none rounded-sm bg-cyan-800 "
              type="email"
              id="email"
            />
          </div>
          <div className="m-3">
            <label htmlFor="feedback" className="m-2">
              Add Feedback :
            </label>
              <input
                className="outline-none rounded-sm m-2 bg-cyan-800 "
                type="text"
                id="feedback"
              />
              <div>
              <button type="submit" className="m-2 bg-green-400 p-1 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div>
          <ul>
            <li className="m-1 cursor-pointer hover:underline">Projects</li>
            <li className="m-1 cursor-pointer hover:underline">Technologies</li>
            <li className="m-1 cursor-pointer hover:underline">Contribute</li>
            <li className="m-1 cursor-pointer hover:underline">About Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="m-1 cursor-pointer hover:underline">Linkedin</li>
            <li className="m-1 cursor-pointer hover:underline">Facebook</li>
            <li className="m-1 cursor-pointer hover:underline">twitter</li>
            <li className="m-1 cursor-pointer hover:underline">Instagram</li>
          </ul>
        </div>
      </div>
      <p className="text-center bg-gray-500 p-1">Copyright devxghanishth</p>
    </>
  );
}

export default Footer;
