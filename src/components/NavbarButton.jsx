import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavbarButton({ onClick }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <button
      onClick={onClick}
      className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-white hover:border-white"
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  );
}

export default NavbarButton;
