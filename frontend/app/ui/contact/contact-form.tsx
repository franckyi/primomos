"use client";
import { useState, ChangeEvent, FormEvent } from "react";

const heading = "Napisz do nas";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending...");
    console.log(formData);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFormData(initialFormData); //reset form
        alert("Wiadomość została wysłana!");
      }
    });
  };

  return (
    <div className="md:w-1/2 mx-auto">
      <h2 className="p-8 mb-4 text-3xl lg:text-5xl bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-orange-400 dark:to-orange-400 dark:text-white text-center">
        {heading}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col" method="POST">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Imię"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
          required
        />
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Telefon"
          value={formData.phone}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
        />
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Temat"
          value={formData.subject}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Wiadomość"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm h-32"
          required
        ></textarea>
        <input
          type="submit"
          className="px-4 py-4 ml-2 text-black rounded-full bg-gradient-to-r from-orange-400 to-white dark:bg-gradient-to-r dark:from-orange-400 dark:to-neutral-900 hover:to-orange-400 dark:hover:to-orange-400 font-bold hover:cursor-pointer uppercase"
        />
      </form>
    </div>
  );
}

export default ContactForm;
