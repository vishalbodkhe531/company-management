import { Employee } from "@/types/types";
import { RxCross1 } from "react-icons/rx";

// type EmpPropsType = {
//   setToggle: (value: boolean) => void;
// };

type EmpPropsType = {
  switchDetailes: Employee;
  setToggle: (value: boolean) => void;
};

function EmpDocuments({ switchDetailes, setToggle }: EmpPropsType) {
  const {
    _id,
    firstName,
    lastName,
    email,
    phoneNumber,
    resignationDate,
    qualification,
    skill,
    gender,
    address,
    profilePic,
    role,
  } = switchDetailes;

  return (
    <div className="bg-gray-900 min-h-screen py-4 px-4 sm:px-6 lg:px-8 text-gray-100 select-none">
      <div className="w-full mx-auto bg-gray-800 shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-red-700 pb-4 mb-6">
          <div className="flex w-full">
            <img
              src={profilePic}
              alt="Employee Photo"
              className="w-24 h-24 rounded-full border border-gray-700"
            />
            <div className="mx-3">
              <h1 className="text-2xl font-bold">
                {firstName} {lastName}
              </h1>
              <div className="mt-2">
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Phone:</strong> {phoneNumber}
                </p>
                <p>
                  <strong>Skill:</strong> {skill}
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => setToggle(true)}>
            <RxCross1 size={18} />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8 grid grid-cols-1 md:grid-cols-2">
          {/* Professional Summary */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-gray-300">
              Results-oriented Software Engineer with 5+ years of experience in
              full-stack development. Adept at delivering high-quality projects
              within deadlines. Skilled in React, Node.js, and MongoDB.
            </p>
          </section>

          {/* Employment Details */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Employment Details
            </h3>
            <p className="text-sm text-gray-300">
              <strong>Current Position:</strong> Software Engineer
            </p>
            <p className="text-sm text-gray-300">
              <strong>Department:</strong> IT
            </p>
            <p className="text-sm text-gray-300">
              <strong>Joining Date:</strong> January 15, 2020
            </p>
            <p className="text-sm text-gray-300">
              <strong>Work Location:</strong> HQ - New York
            </p>
            <p className="text-sm text-gray-300">
              <strong>Reporting Manager:</strong> Jane Smith
            </p>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Skills</h3>
            <ul className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "RESTful APIs",
                "CSS",
                "Tailwind CSS",
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Projects
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold text-gray-100">
                  E-commerce Platform
                </h4>
                <p className="text-sm text-gray-300">
                  Developed a scalable e-commerce platform using the MERN stack,
                  resulting in a 35% increase in user engagement.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-100">
                  Employee Management System
                </h4>
                <p className="text-sm text-gray-300">
                  Built an internal tool for managing employee records,
                  attendance, and performance tracking.
                </p>
              </li>
            </ul>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Education
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="font-semibold text-gray-100">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-sm text-gray-400">
                  University of Technology, 2017
                </p>
              </li>
            </ul>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Certifications
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                Full-Stack Developer Certification - Udemy
              </li>
              <li className="text-sm text-gray-300">
                Certified Scrum Master (CSM)
              </li>
            </ul>
          </section>

          {/* Awards and Achievements */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Awards and Achievements
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                Employee of the Month (March 2023)
              </li>
              <li className="text-sm text-gray-300">
                Successfully led a team for Project Alpha, reducing costs by
                20%.
              </li>
            </ul>
          </section>

          {/* References */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              References
            </h3>
            <p className="text-sm text-gray-300">Available upon request.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EmpDocuments;
