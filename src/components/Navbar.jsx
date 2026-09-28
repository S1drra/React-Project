import { useState } from "react";

const links = [
  { href: "#bus_prof", label: "Overview" },
  { href: "#products", label: "Shoes" },
  { href: "#shopping-info", label: "Sizing & Delivery" },
  { href: "#mission", label: "Mission" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-20 bg-gray-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#bus_prof"
          className="display text-3xl text-cyan-500"
          aria-label="MOV home"
        >
          MOV
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="nav-links"
          className="rounded-full border border-slate-200/30 px-4 py-1.5 text-sm font-semibold text-slate-200 md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <ul
          id="nav-links"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute inset-x-0 top-full flex-col gap-1 border-t border-white/10 bg-gray-900 px-6 pb-5 pt-2 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:p-0`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-200 transition hover:text-cyan-500"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-block rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-cyan-400 md:mt-0"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
