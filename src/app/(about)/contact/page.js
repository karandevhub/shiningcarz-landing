import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";

export const metadata = {
  title: "Contact Shining CarZ",
  description: "Book your next car wash or detailing service with Shining CarZ. Send us a request or chat instantly on WhatsApp.",
};

export default function Contact() {
  const whatsappNumber = "917079648675"; // With country code, no +
  const whatsappMessage = "Hi Shining CarZ! I’d like to book a car wash / detailing service.";

  return (
    <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      {/* Left Animation */}
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
        <LottieAnimation />
      </div>

      {/* Right Contact Section */}
      <div className="w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">
          Let’s Make Your Car Shine!
        </h2>
        <p className="mt-2 text-base">
          Have questions, need a quote, or want to book a slot? Fill in the form to send us a request at{" "}
          <strong>info@shiningcarz.com</strong> or connect with us instantly on WhatsApp.
        </p>

        {/* Contact Form */}
        <ContactForm />

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full shadow hover:bg-green-600 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 2a10 10 0 0 0-8.94 14.32l-1.06 3.86 3.95-1.04A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.2-1.2l-.3-.18-2.34.62.62-2.28-.19-.31A8 8 0 1 1 20 12a8 8 0 0 1-8 8Zm4.25-5.18c-.23-.11-1.35-.67-1.56-.75s-.36-.11-.51.11-.59.75-.72.9-.26.17-.49.06a6.53 6.53 0 0 1-3.23-2.83c-.24-.42.24-.39.68-1.29a.42.42 0 0 0 0-.4c-.05-.11-.51-1.23-.7-1.69-.19-.46-.38-.39-.51-.4h-.43a.83.83 0 0 0-.6.28c-.21.23-.79.77-.79 1.88s.81 2.19.92 2.34.77 1.19 1.86 1.68a6.36 6.36 0 0 0 1.75.65 4.14 4.14 0 0 0 1.75.11c.53-.08 1.35-.55 1.54-1.08s.19-.98.14-1.08-.21-.16-.44-.27Z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
