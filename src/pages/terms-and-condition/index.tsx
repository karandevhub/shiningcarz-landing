import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => (
  <div className="min-h-screen luxury-gradient text-foreground">
    {/* Header: Use same as main page */}
    <header className="w-full flex items-center justify-between px-8 bg-black border-b border-accent/20" style={{height: '100px'}}>
      <div className="flex items-center h-full">
        <img src="/assets/SCZ.(3).png" alt="Shining Carz Logo" className="h-full w-auto mr-4 object-contain" />
      </div>
      <div className="text-right">
        <div className="text-xl font-semibold" style={{ color: 'hsl(45, 86%, 58%)' }}>Effective Date</div>
        <div className="text-2xl font-bold text-white">25th July, 2025</div>
      </div>
    </header>
    {/* Back to Home Button */}
    {/* Main Content */}
    <main className="container mx-auto px-4 py-8 max-w-3xl bg-background/80 rounded-xl shadow-xl mt-6 mb-12">
      <h1 className="text-4xl font-bold mb-6 gold-gradient bg-clip-text text-transparent">Terms of Service</h1>
      <p className="mb-6 text-lg text-foreground/80">Welcome to Shining Carz Private Limited ("Shining Carz," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our car cleaning and detailing services (the "Services"). By booking or using our Services, you agree to be bound by these Terms. Please read them carefully.</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">1. Acceptance of Terms</h2>
        <p>By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. If you do not agree with any part of these Terms, you must not use our Services.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">2. Services Offered</h2>
        <p>Shining Carz Private Limited operates as a platform connecting users with professional car cleaning and detailing services offered by third-party vendors. The services available through our platform may include, but are not limited to:</p>
        <ul className="list-disc ml-8 my-2 space-y-1 text-foreground/90">
          <li>Exterior Wash & Wax</li>
          <li>Interior Vacuuming & Cleaning</li>
          <li>Deep Interior Detailing</li>
          <li>Paint Correction & Protection</li>
          <li>Ceramic Coating Application</li>
          <li>Engine Bay Detailing</li>
          <li>Tire & Wheel Cleaning</li>
          <li>Headlight Restoration</li>
          <li>Other related car care services as advertised.</li>
        </ul>
        <p className="mt-2">We reserve the right to modify, suspend, or discontinue any part of the Services at any time without prior notice.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">3. Booking and Payment</h2>
        <h3 className="font-semibold mb-1">3.1 Booking</h3>
        <p>Services can be booked through our official website, mobile application, or designated contact numbers. All bookings are subject to availability.</p>
        <h3 className="font-semibold mb-1 mt-4">3.2 Pricing</h3>
        <p>Prices for Services are as listed on our website, application, or as communicated during the booking process. Prices are subject to change without prior notice, but any change will not affect bookings already confirmed.</p>
        <h3 className="font-semibold mb-1 mt-4">3.3 Payment</h3>
        <p>Payment for Services is due upon completion of the service, unless otherwise agreed upon in writing. We accept various payment methods as indicated at the time of booking or service delivery. Failure to make timely payment may result in refusal of future services or legal action. Payment for Services is due upon completion of the service. Users will make payments directly to the vendor through their UPI ID or by scanning a QR code provided by the vendor. Shining Carz Private Limited does not directly handle payments and is not responsible for any payment failures or pending transactions between the user and the vendor.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">4. Cancellations and Rescheduling</h2>
        <h3 className="font-semibold mb-1">4.1 Customer Cancellations</h3>
        <p>Customers can cancel or reschedule bookings without penalty if done within a specified timeframe (e.g., 24 hours prior to service) or before the worker starts the service. Cancellations or reschedules outside this period may incur a fee. Specific cancellation policies will be provided during booking. Vendors, however, retain the right to cancel bookings at any time.</p>
        <h3 className="font-semibold mb-1 mt-4">4.2 Shining Carz Cancellations</h3>
        <p>In the event that Shining Carz needs to cancel or reschedule a service due to unforeseen circumstances (e.g., weather conditions, equipment malfunction, staff unavailability), we will notify the customer as soon as possible and offer alternative arrangements or a full refund for any prepaid services.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">5. Customer Responsibilities</h2>
        <h3 className="font-semibold mb-1">5.1 Vehicle Condition</h3>
        <p>Customers are responsible for disclosing any pre-existing damage, custom modifications, or special conditions of their vehicle prior to the service. We are not responsible for pre-existing damage that may become more visible after cleaning or detailing.</p>
        <h3 className="font-semibold mb-1 mt-4">5.2 Personal Belongings</h3>
        <p>Customers are advised to remove all valuable or personal belongings from their vehicle prior to the service. Shining Carz will not be held responsible for any loss or damage to items left inside the vehicle.</p>
        <h3 className="font-semibold mb-1 mt-4">5.3 Access</h3>
        <p>If the service is to be performed at a customer's location, the customer must ensure a safe and suitable working environment, including adequate space, lighting, and access to water and electricity if required for the chosen service package.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">6. Shining Carz Responsibilities</h2>
        <h3 className="font-semibold mb-1">6.1 Quality of Service</h3>
        <p>We commit to providing high-quality car cleaning and detailing services using professional equipment and trained personnel. We will exercise reasonable care and skill in performing the Services.</p>
        <h3 className="font-semibold mb-1 mt-4">6.2 Post-Service Issues</h3>
        <p>If a customer is not satisfied with the quality of service, they must notify Shining Carz Vendor within 4 hours of service completion, providing details and supporting evidence. We will review the complaint and, if deemed valid, may offer a re-service or a partial refund at our discretion.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">7. Shining Carz Vendor and Agent Responsibilities</h2>
        <ul className="list-disc ml-8 my-2 space-y-1 text-foreground/90">
          <li>Provide Professional Car Cleaning and Detailing Services: Vendors are responsible for offering high-quality car cleaning and detailing services as advertised through the Shining Carz platform.</li>
          <li>Handle Payments Directly from Users: Vendors are responsible for receiving payments directly from users upon completion of the service, either through their UPI ID or by scanning a QR code they provide.</li>
          <li>Retain the Right to Cancel Bookings: Vendors have the right to cancel bookings at any time.</li>
          <li>Investigate and Rectify New Damage (if applicable): In the rare event that damage occurs directly as a result of the vendor's negligence during the service, the responsible vendor (along with ShiningCarz) will investigate the claim and take reasonable steps to rectify the damage, which may include repair or compensation, up to the value of the service provided.</li>
          <li>Adhere to Quality of Service Standards: Vendors are expected to use professional equipment and trained personnel and exercise reasonable care and skill in performing the Services.</li>
          <li>Address Post-Service Issues (Indirectly through Shining Carz): While the user notifies "Shining Carz Vendor" for dissatisfaction, the document states "We will review the complaint and, if deemed valid, may offer a re-service or a partial refund at our discretion." This implies the vendor's cooperation in addressing these issues.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">8. Disclaimer of Warranties</h2>
        <p>The Services are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Shining Carz does not warrant that the Services will be uninterrupted, error-free, or that the results of the Services will meet your specific requirements.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">9. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, Shining Carz Private Limited, its directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
        <ul className="list-disc ml-8 my-2 space-y-1 text-foreground/90">
          <li>Your access to or use of or inability to access or use the Services.</li>
          <li>Any conduct or content of any third party on the Services.</li>
          <li>Any content obtained from the Services.</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
        </ul>
        <p className="mt-2">Our total liability for any claim arising out of or relating to these Terms or the Services shall not exceed the amount you paid us for the Services giving rise to the claim.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">10. Damage Policy</h2>
        <p>While we take utmost care during the service, minor scuffs, scratches, or other issues can sometimes occur, especially on older or already damaged vehicles.</p>
        <ul className="list-disc ml-8 my-2 space-y-1 text-foreground/90">
          <li><strong>Pre-existing Damage:</strong> We are not liable for any pre-existing damage to your vehicle.</li>
          <li><strong>New Damage:</strong> In the rare event that damage occurs directly as a result of our negligence during the service, ShiningCarz and the responsible vendor will investigate the claim thoroughly. If confirmed, we will take reasonable steps to rectify the damage, which may include repair or compensation, up to the value of the service provided. All claims for new damage must be reported within 4 hours of service completion.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">11. Intellectual Property</h2>
        <p>All content, trademarks, service marks, logos, and other intellectual property displayed on our website, application, or used in connection with our Services are the property of Shining Carz Private Limited or its licensors. You may not use, reproduce, distribute, or create derivative works from any such content without our express written permission.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">12. Governing Law and Dispute Resolution</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms or the Services shall be subject to the exclusive jurisdiction of the courts located in [Specify City/State, e.g., Mumbai, Maharashtra], India.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">13. Changes to Terms</h2>
        <p>Shining Carz reserves the right to modify or revise these Terms at any time, in our sole discretion. We will notify you of any material changes by posting the updated Terms on our website or through other appropriate communication channels. Your continued use of the Services after such modifications constitutes your acceptance of the revised Terms.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-2 gold-gradient bg-clip-text text-transparent">14. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <address className="not-italic mb-2">
          <div>Shining Carz Private Limited</div>
          <div>L-59A, 2nd Floor Malviya Nagar, NEW DELHI, Delhi, India 110017</div>
          <div>Email: <a href="mailto:info@shiningcarz.com" className="text-primary underline">info@shiningcarz.com</a></div>
          <div>Phone: <a href="tel:7004303889" className="text-primary underline">7004303889</a></div>
        </address>
      </section>
    </main>
    {/* Custom Footer */}
    <footer className="w-full bg-black flex items-center justify-between px-8 relative" style={{height: '80px'}}>
      <div className="flex-1 flex items-center h-full relative" style={{height: '80px'}}>
        <div className="flex flex-col justify-center h-full w-full pr-8">
          <div className="text-foreground/70 text-lg" style={{lineHeight: 'normal'}}>
            © {new Date().getFullYear()} Shining Carz. All rights reserved.
          </div>
          <div className="border-t border-accent/20 w-full absolute left-0" style={{bottom: 0, right: 0, height: '1px'}}></div>
        </div>
      </div>
      <img src="/assets/SCZ.(3).png" alt="Shining Carz Logo" className="h-full w-auto ml-8 object-contain z-10 bg-black" style={{maxWidth: 'none'}} />
    </footer>
  </div>
);

export default TermsAndConditions;
