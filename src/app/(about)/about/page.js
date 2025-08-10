import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "About Us - Shining CarZ",
  description: `Learn about Shining CarZ – from a humble beginning in 2013 to becoming one of Noida’s most trusted car cleaning & detailing studios.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Every car has a story — and we believe it deserves to shine like the day it first hit the road.  
        <br /><br />
        Shining CarZ began its journey in 2013 as a small steam wash service, driven by one simple dream:  
        to give every vehicle the care, respect, and sparkle it truly deserves. Over the years, we’ve
        grown into a full-fledged car care studio, offering everything from premium <strong>car wash</strong> 
        and <strong>detailing</strong> to <strong>paint protection</strong> and interior deep cleaning.  
        <br /><br />
        Our passion for perfection is matched only by the trust our customers place in us — trust we’ve
        earned one gleaming car at a time. Whether it’s your first wash with us or your fiftieth, we treat 
        your ride like our own.  
        <br /><br />
        Have a car that needs some love? Reach out to us 📞 from{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let’s make your car shine again — because at Shining CarZ, it’s more than a wash, it’s a promise.
      </h2>
    </>
  );
}
