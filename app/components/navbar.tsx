'use client'
import Link from "next/link";
import Image from "next/image";





const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/pages/about" },
  { name: "Courses", href: "/pages/courses" },
  { name: "Admin Dashboard" , href: "/pages/admin"},
  { name: "My Dashboard", href: "/pages/users" },
  { name: "Contact us", href: "/pages/contact" },
];

const Navbar = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  }

  return (
   

    
    <header className="flex p-2 gap-4 h-16 w-full relative item-center justify-center bg-gradient-to-r from-pink-50 to-indigo-50 text-gray-700 shadow-lg">

      <Image
        src='/logo.svg'
        alt="logo"
        width={60}
        height={60}
        className="size-12"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
       

       
       
        
        
        
      
      />
      
        <ul className="flex gap-5 items-center  px-5 w-full ">
        {navLinks.map(nav=>(
          <li key={nav.href} className="text-nowrap font-bold hover:bg-blue-400 hover:text-white px-3 py-2 rounded hover:text-shadow-2xs">
            <Link href={nav.href}>{nav.name}</Link>          
          </li>
        ))}
      </ul>
     
      <div className="flex justify-end right-0  absolute">

         <div>
          
      
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 py-2 rounded-lg hover:shodow-md mx-3">Register here</button>
       
     
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 py-2 rounded-lg hover:shodow-md mx-3">Sign-in</button>
     
      </div>
     
        
      </div>
      
      
    </header>
    
  );
};

export default Navbar;