import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-black text-white">
      <nav>
        <ul className="flex space-x-4 text-white">
          <li className="text-white">
            <Link className="text-white" href="/">
              About me
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
