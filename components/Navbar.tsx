import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-0 py-0 bg-blue-100'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={88}
          height={58}
          className='object-contain '
        />
      </Link>

      <Link href='/' className="flex justify-center items-center">
        <p>Home</p>
      </Link>
      <Link href='#' className="flex justify-center items-center">
        <p>About Us</p>
      </Link>
      <Link href='#' className="flex justify-center items-center">
        <p>Contact</p>
      </Link>
      <Link href='#' className="flex justify-center items-center">
        <p>Explore Cars</p>
      </Link>

      <CustomButton
        title='Sign in'
        btnType ='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;