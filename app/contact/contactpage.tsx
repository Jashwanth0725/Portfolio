import ContactForm from "@/components/contactform";
import React from "react";

const ContactPage = () => {
  return (
    <div
      // style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        // style={{ backgroundImage: "url(atombg-comp.webp)" }}
        className="w-[90%] max-w-4xl p-6 bg-cover bg-center rounded-xl border border-white flex items-center justify-center"
      >
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
