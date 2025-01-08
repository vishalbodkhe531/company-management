// function RequestAccepted() {
//   const handleRegister = () => {
//     // Redirect to the registration page (update the path as needed)
//     window.location.href = "/registration";
//   };

//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-md text-center w-96">
//         {/* Icon */}
//         <div className="mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="green"
//             className="w-16 h-16 mx-auto"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 12l2 2 4-4m0 0a9 9 0 11-6.32 6.32m6.32-6.32L9 12"
//             />
//           </svg>
//         </div>

//         {/* Message */}
//         <h1 className="text-xl font-bold text-gray-800">Request Accepted 🎉</h1>
//         <p className="text-gray-600 mt-2">
//           Your request has been accepted by the admin. You can now proceed with
//           your registration.
//         </p>

//         {/* Button */}
//         <button
//           onClick={handleRegister}
//           className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full"
//         >
//           Go to Registration
//         </button>
//       </div>
//     </div>
//   );
// }

// export default RequestAccepted;

function WaitingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="text-center text-white space-y-6">
        {/* Animated Loading Dots */}
        <div className="flex justify-center space-x-2">
          <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-100"></span>
          <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-200"></span>
          <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-300"></span>
        </div>

        {/* Message */}
        <p className="text-2xl font-semibold tracking-wide">
          Please wait, we’re processing your request...
        </p>
      </div>
    </div>
  );
}

export default WaitingPage;
