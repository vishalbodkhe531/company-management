import React from "react";

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-gray-100 flex flex-col justify-between shadow-lg">
      {/* Logo */}
      <div className="p-4 text-center text-2xl font-bold border-b border-gray-800">
        MyApp
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center justify-center gap-3 px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
