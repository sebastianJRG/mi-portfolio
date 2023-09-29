"use client"
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 fixed top-0 left-0 h-full w-32 flex flex-col justify-center p-4">
      <div className="flex flex-col items-center">
        <Link href="/" legacyBehavior>
          <a className="my-4 text-white text-xl font-bold">Inicio</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="my-4 text-white text-xl font-bold">Sobre mí</a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a className="my-4 text-white text-xl font-bold">Proyectos</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="my-4 text-white text-xl font-bold">Contáctame</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;



/*
<nav className="bg-blue-500 fixed top-0 left-0 h-full w-24 flex flex-col justify-center p-4">
      <div className="flex flex-col items-center">
        <Link href="/" legacyBehavior>
          <a className="my-4 text-white text-xl font-bold">Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="my-4 text-white text-xl font-bold">About</a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a className="my-4 text-white text-xl font-bold">Projects</a>
        </Link>
      </div>
      </nav>
*/