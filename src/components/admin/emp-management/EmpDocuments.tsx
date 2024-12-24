function EmployeeDocuments() {
  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-gray-100">
      <div className="w-full mx-auto bg-gray-800 shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center gap-4 border-b border-gray-700 pb-4 mb-6">
          <img
            src="/placeholder-avatar.jpg" // Replace with actual image URL or component
            alt="Employee Photo"
            className="w-24 h-24 rounded-full border border-gray-700"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-100">John Doe</h2>
            <p className="text-sm text-gray-400">Software Engineer</p>
            <p className="text-sm text-gray-400">johndoe@example.com</p>
            <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Professional Summary */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-gray-300">
              Highly motivated Software Engineer with 5+ years of experience
              designing, developing, and maintaining web applications. Skilled
              in React, Node.js, and RESTful API design.
            </p>
          </section>

          {/* Work Experience */}
          <section>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Work Experience
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold text-gray-100">
                  Senior Developer at ABC Corp
                </h4>
                <p className="text-sm text-gray-400">Jan 2020 - Present</p>
                <p className="text-sm text-gray-300">
                  Led a team of 5 developers in building scalable web
                  applications. Improved application performance by 30%.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-100">
                  Software Engineer at XYZ Ltd
                </h4>
                <p className="text-sm text-gray-400">Jun 2017 - Dec 2019</p>
                <p className="text-sm text-gray-300">
                  Developed RESTful APIs and front-end interfaces using React
                  and Express.js. Achieved 99.9% uptime on production
                  applications.
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
        </div>
      </div>
    </div>
  );
}

export default EmployeeDocuments;
