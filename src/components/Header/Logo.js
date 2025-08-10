import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-28 h-12 md:w-32 md:h-16 overflow-hidden mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="ShiningCarz logo"
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;