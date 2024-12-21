import mainImage from "../../assets/hero.png";

function Home() {
  return (
    <>
      <div className="flex  h-[40rem] md:h-screen justify-center items-center flex-wrap ">
        <div className="text-[2rem] md:text-[4vw] w-full px-10 m-2  md:w-[60%] text-center">
          <h2 className="font-system ">
            Empower Your Business with Smart Management Tools
          </h2>
        </div>
        <div className="px-10 group">
          <img
            src={mainImage}
            alt="Main Image"
            className="h-full  transform home-img transition-all duration-700 ease-in-out"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

// const Sidebar = () => (
//   <div className="h-screen w-64 bg-gray-900 text-gray-100 flex flex-col justify-between shadow-lg">
//     {/* Logo */}
//     <div className="p-4 text-center text-2xl font-bold border-b border-gray-800">
//       MyApp
//     </div>

//     {/* Menu Items */}
//     <nav className="flex-1 mt-4">
//       <ul className="space-y-2">
//         <li>
//           <a
//             href="#"
//             className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
//           >
//             Home
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
//           >
//             Profile
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
//           >
//             Settings
//           </a>
//         </li>
//       </ul>
//     </nav>

//     {/* Logout */}
//     <div className="p-4 border-t border-gray-800">
//       <button className="w-full flex items-center justify-center gap-3 px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
//         Logout
//       </button>
//     </div>
//   </div>
// );

// interface TableProps {
//   children: React.ReactNode;
// }

// const Table = ({ children }: TableProps) => (
//   <table className="w-full text-left text-white">{children}</table>
// );

// interface SearchBarProps {
//   className?: string;
//   placeholder: string;
// }

// const SearchBar = ({ className, placeholder }: SearchBarProps) => (
//   <input
//     type="text"
//     className={`p-2 rounded bg-gray-700 text-white w-full ${className}`}
//     placeholder={placeholder}
//   />
// );

// function Home() {
//   return (
//     <div className="flex min-h-screen bg-black text-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col p-6">
//         {/* Header */}
//         <header className="flex items-center justify-between mb-6">
//           <SearchBar
//             className="w-1/2"
//             placeholder="Search for employees, projects, etc."
//           />
//           <div className="flex items-center space-x-4">
//             <img
//               src="/profile-avatar.jpg"
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full border-2 border-gray-600"
//             />
//           </div>
//         </header>

//         {/* Dashboard Analytics */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//           <div className="bg-gray-800 p-4 rounded-lg shadow">
//             <h3 className="text-lg font-semibold">Total Employees</h3>
//             <p className="text-2xl font-bold">345</p>
//           </div>

//           <div className="bg-gray-800 p-4 rounded-lg shadow">
//             <h3 className="text-lg font-semibold">Active Projects</h3>
//             <p className="text-2xl font-bold">12</p>
//           </div>

//           <div className="bg-gray-800 p-4 rounded-lg shadow">
//             <h3 className="text-lg font-semibold">Departments</h3>
//             <p className="text-2xl font-bold">6</p>
//           </div>
//         </div>

//         {/* Recent Activities */}
//         <div className="bg-gray-800 rounded-lg shadow p-4 mb-6">
//           <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
//           <Table>
//             <thead>
//               <tr>
//                 <th className="text-left">Date</th>
//                 <th className="text-left">Activity</th>
//                 <th className="text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>2024-12-20</td>
//                 <td>Employee Onboarding</td>
//                 <td className="text-green-400">Completed</td>
//               </tr>
//               <tr>
//                 <td>2024-12-18</td>
//                 <td>Project Kickoff</td>
//                 <td className="text-yellow-400">Pending</td>
//               </tr>
//               <tr>
//                 <td>2024-12-15</td>
//                 <td>Monthly Meeting</td>
//                 <td className="text-red-400">Overdue</td>
//               </tr>
//             </tbody>
//           </Table>
//         </div>

//         {/* Department Overview */}
//         <div className="bg-gray-800 rounded-lg shadow p-4 mb-6">
//           <h2 className="text-xl font-semibold mb-4">Departments Overview</h2>
//           <Table>
//             <thead>
//               <tr>
//                 <th className="text-left">Department</th>
//                 <th className="text-left">Head</th>
//                 <th className="text-left">Employees</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Human Resources</td>
//                 <td>Jane Doe</td>
//                 <td>45</td>
//               </tr>
//               <tr>
//                 <td>Engineering</td>
//                 <td>John Smith</td>
//                 <td>120</td>
//               </tr>
//               <tr>
//                 <td>Sales</td>
//                 <td>Mary Johnson</td>
//                 <td>30</td>
//               </tr>
//               <tr>
//                 <td>Marketing</td>
//                 <td>Mark Brown</td>
//                 <td>25</td>
//               </tr>
//             </tbody>
//           </Table>
//         </div>

//         {/* Quick Links */}
//         <div className="bg-gray-800 rounded-lg shadow p-4 mb-6">
//           <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
//           <ul className="space-y-2">
//             <li>
//               <a href="/add-employee" className="text-blue-400 hover:underline">
//                 Add New Employee
//               </a>
//             </li>
//             <li>
//               <a href="/add-project" className="text-blue-400 hover:underline">
//                 Create New Project
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/manage-departments"
//                 className="text-blue-400 hover:underline"
//               >
//                 Manage Departments
//               </a>
//             </li>
//             <li>
//               <a href="/reports" className="text-blue-400 hover:underline">
//                 View Reports
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
