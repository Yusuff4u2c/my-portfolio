import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

emailjs.init({ publicKey: import.meta.env.VITE_APP_PUBLIC_KEY });
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = async (data) => {
    try {
      console.log("Service ID:", import.meta.env.VITE_APP_SERVICE_KEY);
      console.log("Template ID:", import.meta.env.VITE_APP_TEMPLATE_ID);
      console.log("Public Key:", import.meta.env.VITE_APP_PUBLIC_KEY);
      console.log("Data:", data);
      await emailjs.send("service_c6jcmdq", "template_mkphayw", data);
      console.log("Email sent successfully");
      alert("Email sent successfully!");
      reset();
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }
      console.log("ERROR", err);
    }
  };

  return (
    <div className="bg-[#170550] text-white" id="contacts">
      <div className="flex flex-col gap-8 md:flex-row px-12 md:justify-between py-20 items-center">
        <div className="flex flex-col gap-4 font-semibold md:text-xl">
          <h1 className="px-4 border-b border-white w-fit mx-auto py-4 text-[40px] font-semibold">
            Contact @
          </h1>
          <div className="flex gap-5 items-center">
            <FaPhone />
            <h1>+2348032320596</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaEnvelope />
            <h1>yemscript@gmail.com</h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(sendEmail)}
          className="flex px-12 flex-col gap-5 w-full md:w-[50%]"
        >
          <div className="flex items-center gap-14">
            <label htmlFor="name">Name:</label>
            <input
              className="rounded-xl bg-[#43366A] p-2 placeholder:font-semibold"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="flex items-center gap-14">
            <label htmlFor="email">Email:</label>
            <input
              className="rounded-xl bg-[#43366A] p-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="flex items-center gap-10">
            <label htmlFor="message">Message:</label>
            <textarea
              className="rounded-xl bg-[#43366A] p-2"
              name="message"
              id="message"
              cols="30"
              placeholder="Your Message"
              rows="5"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>
          <button
            className="rounded-3xl px-8 py-2 mx-auto bg-[#F86F03] text-black font-bold hover:bg-[#e05c02] transition duration-300"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
