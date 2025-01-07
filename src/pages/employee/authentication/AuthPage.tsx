import SignInEmp from "@/components/employee/auth/sign-in/Sign-In-Emp";
import SignUpEmp from "@/components/employee/auth/sign-up/Sign-Up-Emp";
import { useLocation } from "react-router-dom";

function AuthEmpPage() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      <div className="min-h-[190vh] sm:min-h-[140vh] lg:min-h-[100vh] flex justify-center  bg-gradient-to-tr flex-wrap-reverse lg:flex-nowrap items-center  lg:item-start from-teal-400 via-blue-500 to-indigo-700">
        <div className="w-[90%] lg:w-[52%] text-white flex justify-center h-[20rem] font-semibold">
          <div className="flex w-[100%] justify-center gap-10 items-center flex-col lg:w-[90%]">
            <div className="hidden md:block">
              <h3 className="font-bold text-title block">
                Exit Interview Questionnaire
              </h3>
              When designing an Employee Form, implementing security features is
              crucial to protect sensitive employee data. Below are some key
              security features and practices to include:
            </div>
            <div className="">
              <h3 className="font-bold text-title block">Data Encryption</h3>
              In Transit:Use HTTPS (SSL/TLS) for secure data transmission
              between the client and server. At Rest: Encrypt sensitive data
              like passwords, addresses, and identification numbers in the
              database using encryption algorithms such as AES-256.
            </div>

            {pathName === "/emp/sign-in" && (
              <div className="">
                <h3 className="font-bold text-title block">
                  Authorization Features
                </h3>
                Authorization Features Role-Based Access Control (RBAC) Assign
                roles (e.g., Admin, Manager, Employee) to determine access
                levels. Ensure employees only access resources relevant to their
                role. Least Privilege Principle Grant the minimum access rights
                necessary for an employee to perform their tasks. Audit Logs
                Track login attempts, failed logins, and resource access to
                monitor unusual activity.
              </div>
            )}
          </div>
        </div>

        {/* <Form> */}
        <div className="w-full p-3 sm:p-10 lg:p-20  lg:rounded-l-[10rem]  shadow-2xl shadow-black bg-white">
          <h1 className="h-32  md:h-16 lg:h-16 m-2 font-semibold text-2xl sm:text-3xl lg:text-3xl">
            Employee Information Hub*
          </h1>
          {pathName === "/emp/sign-in" && <SignInEmp />}
          {pathName === "/emp/sign-up" && <SignUpEmp />}
        </div>
      </div>
    </>
  );
}

export default AuthEmpPage;
