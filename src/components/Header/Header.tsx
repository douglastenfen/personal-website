import Link from "next/link";
import { Home } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-center p-5 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li className="rounded-md border-2 border-purple px-5 py-3 hover:bg-purple">
            <Link href="/">About Me</Link>
          </li>
          <li className="rounded-md border-2 border-purple px-5 py-3 hover:bg-purple">
            <Link href="/">
              <Home />
            </Link>
          </li>
          <li className="rounded-md border-2 border-purple px-5 py-3 hover:bg-purple">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
