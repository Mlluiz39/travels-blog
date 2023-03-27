import { useState } from "react";
import { Link } from "react-router-dom";
import Travel from "@/assets/travel-blog.svg";
import NavbarButton from "./NavbarButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-slate-600 relative mt-32 md:mt-24">
      <nav className="bg-slate-600 p-2 fixed top-0 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex-shrink-0 flex items-center justify-center">
                <Link to={"/"} className="text-white text-xl font-bold">
                  <img className="w-24" src={Travel} alt="logo" />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to={"/posts"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Posts
                  </Link>
                  <Link
                    to={"/usuarios"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Usuários
                  </Link>
                  <Link
                    to={"/contato"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contato
                  </Link>
                  <Link
                    to={"/sobre"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sobre
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden" id="mobile-menu">
          <NavbarButton onClick={() => setIsOpen(!isOpen)} />
          <div
            className={`transition-all duration-500 ease-in-out ${
              isOpen ? "h-48" : "h-0"
            } bg-slate-600`}
          >
            <div
              className={`transition-all duration-100 ease-in ${
                isOpen ? "" : "hidden"
              }`}
            >
              <Link
                to={"/posts"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Posts
              </Link>
              <Link
                to={"/usuarios"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Usuários
              </Link>
              <Link
                to={"/contato"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contato
              </Link>
              <Link
                to={"/sobre"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
