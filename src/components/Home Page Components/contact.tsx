import React from "react";
import Ventrix from "../../assets/ventrix_white_logo_100.svg";
import * as EmailValidator from "email-validator";

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

  const submit = () => {
    // form validation
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill all fields");
      return;
    }
    if (!EmailValidator.validate(email)) {
      alert("Please enter a valid email");
      return;
    }

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

    //logging contact form data
    console.log(data);
  };

  return (
    <>
      <div className="px-10 md:px-14 pt-10 pb-8 md:py-12">
        <h1 className="text-[2rem] md:text-[2.5rem] font-medium text-white">
          Contact us
        </h1>
        <div className="flex flex-row justify-between">
          <div className="xl:ml-24 flex-col mt-8 md:mt-14 w-full md:w-[60%] xl:w-[40%]">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
              <div className="flex flex-col md:w-1/2">
                <p className="font-medium">First Name</p>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  id=""
                  className="text-field"
                  value={firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col md:w-1/2">
                <p className="font-medium">Last Name</p>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  id=""
                  className="text-field"
                  value={lastName}
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
                  value={email}
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
                  value={phone}
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
                  value={message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex-col md:flex-row flex justify-end items-center mt-8">
              <button
                className="text-white bg-[#9F47F0] hover:delay-75 hover:transition-all hover:ease-out hover:bg-[#9e47f0e8] py-3 px-9 rounded-full mt-6 md:mt-0 cursor-pointer"
                onClick={() => submit()}
              >
                <p id="contact" className="text-sm font-light">
                  {button}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
