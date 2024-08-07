import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full bg-gray-400 z-50 flex items-center p-5 shadow-md top-0">
      <div className="mr-auto">
        <Link href="/" passHref>
          <div className="flex items-center space-x-3">
            <img src="https://img.icons8.com/stickers/100/translation.png" alt="Company Logo" width={50} height={50} />
            <span className="text-black font-medium">TranslatorHub</span>
          </div>
        </Link>
      </div>
      <nav className="flex items-center gap-5">
        <Link href="/" passHref><div className="text-black font-medium hover:underline">Home</div></Link>
        <Link href= '/About' passHref><div className="text-black font-medium hover:underline">About</div></Link>
      </nav>
    </div>
  );
};

export default Header;
