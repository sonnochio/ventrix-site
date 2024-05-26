import React from "react";
import * as EmailValidator from "email-validator";
import emailjs from "emailjs-com";

// Log environment variables
console.log("EmailJS Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
console.log("EmailJS Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("EmailJS Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Google Maps API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

// Ensure the environment variables are defined
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (!emailJsPublicKey) {
  throw new Error("VITE_EMAILJS_PUBLIC_KEY is not defined");
}

emailjs.init(emailJsPublicKey);

const Contact = () => {
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [button, setButton] = React.useState("Submit");
  const { firstName, lastName, phone, email, message } = data;

  const submit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // form validation
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill all fields");
      return;
    }
    if (!EmailValidator.validate(email)) {
      alert("Please enter a valid email");
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setButton("Done!");

      // resetting form fields
      setTimeout(() => {
        setButton("Submit");
        setData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      }, 1500);
    }, (err) => {
      console.log('FAILED...', err);
      alert("Failed to send email. Please try again later.");
    });

    // logging contact form data
    console.log(data);
  };

  return (
    <>
      <div className="px-10 md:px-14 pt-10 pb-8 md:py-12">
        <h1 className="text-[2rem] md:text-[2.5rem] font-medium text-white">
          Contact us
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-col mt-8 md:mt-14 w-full md:w-[60%] xl:w-[40%]">
            <form onSubmit={submit}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
                <div className="flex flex-col md:w-1/2">
                  <p className="font-medium">First Name</p>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    id=""
                    className="text-field"
                    value={data.firstName}
                    onChange={(e) =>
                      setData({ ...data, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <p className="font-medium">Last Name</p>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    id=""
                    className="text-field"
                    value={data.lastName}
                    onChange={(e) =>
                      setData({ ...data, lastName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-8">
                <div className="flex flex-col md:w-1/2">
                  <p className="font-medium">Email</p>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    id=""
                    className="text-field"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <p className="font-medium">Phone Number (Optional)</p>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    id=""
                    className="text-field"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 mt-8">
                <div className="flex flex-col w-full">
                  <p className="font-medium">Message</p>
                  <input
                    type="text"
                    name="message"
                    placeholder="Enter your message"
                    id=""
                    className="text-field"
                    value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex-col md:flex-row flex justify-end items-center mt-8">
                <button
                  className="text-white bg-[#9F47F0] hover:delay-75 hover:transition-all hover:ease-out hover:bg-[#9e47f0e8] py-3 px-9 rounded-full mt-6 md:mt-0 cursor-pointer"
                  type="submit"
                >
                  <p id="contact" className="text-sm font-light">
                    {button}
                  </p>
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center w-full md:w-[40%] xl:w-[40%] mt-8 md:mt-14">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?q=Scale+Space+White+City%2C+58+Wood+Ln%2C+London+W12+7RZ&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <p className="mt-4 text-white text-center">
              We are based in Scale Space White City
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
