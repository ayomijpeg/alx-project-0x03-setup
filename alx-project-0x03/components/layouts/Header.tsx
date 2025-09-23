import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200  z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-3 md:px-8">
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight "
        >
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
          <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
        </div>
      </div>
    </header>
  );
};

export default Header;
