import Link from "next/link";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-[#1f7e57] text-white py-8 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Job Ready Courses Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">CollegeDékho</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-600">
                  ETP Admissions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600">
                  Boards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600">
                  Telugu News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600">
                  Visual Stories (English)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600">
                  CD Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Write a review Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Write a review</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-600">
                  Qna Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600">
                  DU Predictor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-600">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-600">
                  Cancers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600">
                  Latest Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600">
                  More
                </Link>
              </li>
            </ul>
          </div>

          {/* Address and Contact Info Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Dhaka - 560027</h4>
              <p className="text-sm">Banasree,Rampura 122002</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Dhaka</h4>
              <p className="text-sm">
                Banasree Branch. Dhaka 1219 Bangladesh
                <br />
                Power Sector 5, Dhaka,
                <br />
                Khulna - 700091
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Jaipur</h4>
              <p className="text-sm">
                Mirpur 3 Map - 06
                <br />
                Calgiri Marg, Makiya Nagar,
                <br />
                Dhaka Division, Bangladesh
              </p>
            </div>

            <div className="space-y-2 pt-4">
              <Link href="#" className="block hover:text-amber-600">
                Google Play
              </Link>
              <Link
                href="tel:18005729877"
                className="block hover:text-amber-600"
              >
                1800-572-9877
              </Link>
              <Link
                href="mailto:hello@collegebook.com"
                className="block hover:text-amber-600"
              >
                hello@collegebook.com
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} CollegeDékho. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
