import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-28 h-12 md:w-32 md:h-16 overflow-hidden mr-2 md:mr-4">
        <Image
          src='/logo.webp'
          alt="ShiningCarz logo"
          className="w-full h-full object-contain"
          priority
          width={200}
          height={50}
        />
      </div>
    </Link>
  );
};

export default Logo;