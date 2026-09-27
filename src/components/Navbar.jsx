import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <span className="text-cyan-500 text-xl font-semibold">MOV</span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-200 md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <ul className={`${isOpen ? "block" : "hidden"} md:flex md:gap-8 w-full md:w-auto`}>
          <li><a href="#overview" className="block py-2 text-slate-200 hover:text-cyan-500">Overview</a></li>
          <li><a href="#products" className="block py-2 text-slate-200 hover:text-cyan-500">Shoes</a></li>
          <li><a href="#mission" className="block py-2 text-slate-200 hover:text-cyan-500">Mission</a></li>
          <li><a href="#contact" className="block py-2 text-slate-200 hover:text-cyan-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;