import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className="bg-gray-300 pt-8">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
      <div className="flex flex-col items-center lg:items-start">
        <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
        <p className="text-sm text-gray-600 mt-4">
          CarShow 2024<br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-x-12 mt-8 lg:mt-0">
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold mb-2 text-gray-800">{item.title}</h3>
            <ul className="text-sm">
              {item.links.map((link) => (
                <li key={link.title} className="mb-2">
                  <Link href={link.url} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-gray-300 mt-8 py-6 bg-black">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm text-white">@2024 CarShow. All rights reserved</p>

        <div className="flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-800 transition-colors duration-300">Privacy & Policy</Link>
          <Link href="/" className="text-white hover:text-gray-800 transition-colors duration-300">Terms & Condition</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
