import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { github, linkedin, instagram } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_u7l3xzt",
        "template_fhaqoip",
        {
          from_name: form.name,
          to_name: "Swostik Pati",
          from_email: form.email,
          to_email: "swostikpati@gmail.com",
          message: form.message,
        },
        "LyAEbELMRRbPX3uJM"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-black py-4 px-6 placeholder:text-gray rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-black py-4 px-6 placeholder:text-gray rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-black py-4 px-6 placeholder:text-gray rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-black py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'

      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className={styles.sectionSubText} styles={{ justifyContent: "center" }}>Other ways to contact</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className={styles.sectionHeadText} styles={{ justifyContent: "center" }}>Social Handles</p>
        </div>
        {/* <EarthCanvas /> */}
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "15%" }}>
          <a href="https://github.com/swostikpati" className='w-1/5 h-1/5 object-contain'>
            <img
              src={github}
              alt='source code'

            />
          </a>
          <a href="https://www.linkedin.com/in/swostikpati" className='w-1/5 h-1/5 object-contain'>
            <img
              src={linkedin}
              alt='source code'

            />
          </a>
          <a href="https://www.instagram.com/swostikpati/" className='w-1/5 h-1/5 object-contain'>
            <img
              src={instagram}
              alt='source code'

            />
          </a>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "15%" }}>
          <p className={styles.sectionSubText} styles={{ justifyContent: "center" }}>curriculum vitae </p>
        </div> */}

      </motion.div>
    </div >
  );
};

export default SectionWrapper(Contact, "contact");

// template_fhaqoip

//service_u7l3xzt

//LyAEbELMRRbPX3uJM