# VentrixSite

VentrixLandingPage/
├─ public/
│ ├─ index.html
├─ src/
│ ├─ components/
│ │ ├─ About.js
│ │ ├─ EmailSubForm.js
│ │ ├─ EnquiryForm.js
│ │ ├─ Features.js
│ │ ├─ Footer.js
│ │ ├─ Header.js
│ │ └─ Hero.js
│ ├─ App.js
│ ├─ index.js
│ └─ styles.css
└─ package.json

#Install Node.js
npx create-react-app ventrix-landing-page
cd ventrix-landing-page
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import EmailSubForm from './components/EmailSubForm';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import './styles.css'; // Import a CSS file for basic styling (but how)

function App() {
return (
<div className="App">
<Header />
<Hero />
<About />
<Features />
<EmailSubForm />
<EnquiryForm />
<Footer />
</div>
);
}

export default App;
#EmailSubForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

function EmailSubForm() {
const { register, handleSubmit, reset, formState: { errors } } = useForm();

const onSubmit = (data) => {
console.log(data);
reset(); // Reset form fields after submission
};

return (
<form onSubmit={handleSubmit(onSubmit)}>
<input
type="email"
placeholder="Enter your email"
{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
/>
{errors.email && <p>Please enter a valid email.</p>}
<button type="submit">Subscribe</button>
</form>
);
}

export default EmailSubForm;
#EnquiryForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

function EnquiryForm() {
const { register, handleSubmit, reset, formState: { errors } } = useForm();

const onSubmit = (data) => {
console.log(data);
reset(); // Reset after submission
};

return (
<form onSubmit={handleSubmit(onSubmit)}>
<input
type="text"
placeholder="Name"
{...register("name", { required: true })}
/>
{errors.name && <p>Name is required.</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>Please enter a valid email.</p>}

      <textarea
        placeholder="Your message"
        {...register("message", { required: true })}
      ></textarea>
      {errors.message && <p>Message is required.</p>}

      <button type="submit">Send Enquiry</button>
    </form>

);
}

export default EnquiryForm;
npm install react-hook-form
