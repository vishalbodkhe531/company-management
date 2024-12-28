import logo from "../../assets/logo2.webp";

const Footer = () => {
  return (
    <footer className="bg-navFoot text-heading select-none">
      <div className="flex items-center text-navFoot  flex-wrap justify-center ">
        <img
          src={logo}
          alt="Company Logo"
          className="h-[10rem] md:h-[13rem] mx-10   rounded-full w-auto object-contain mt-12 md:mt-1"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-navFoot text-sm">
                Our company is dedicated to providing the best management
                solutions to streamline your business operations. Join us to
                simplify your workflow!
              </p>
            </div>

            {/* Links Section */}
            <div className="text-navFoot">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className=" hover:text-heading transition">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-heading transition">
                    Employee Management
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-heading   transition">
                    Reports
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-heading   transition">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className=" text-sm">
                Email: support@company.com <br />
                Phone: +1 (555) 123-4567 <br />
                Address: 123 Management St, Suite 456, Business City, BC
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-black pt-6 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Company Management System. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
