import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-center p-5 text-white">
      <nav>
        <ul className="flex space-x-4 text-white">
          <li className="text-white">
            <Link className="text-white" href="/">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
