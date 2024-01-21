import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-[#170550] text-white" id="contact">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="px-4 border-b border-white w-fit mx-auto pt-4 text-[40px] font-semibold">
          Contact
        </h1>
        <div className=" flex py-20 gap-72 items-center">
          <div className="flex flex-col gap-4 font-semibold text-xl">
            <div className="flex gap-5 items-center">
              <FaPhone />
              <div>
                <h1>+2348107640170</h1>
                <h1></h1>+2348032320596
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <FaEnvelope />
              <h1>yusuff4u2c@gmail.com</h1>
            </div>
            <div className="flex gap-5 items-center flex-nowrap">
              <FaLocationArrow />
              <h1>No 1, Forage Road, Kolapo</h1>
            </div>
          </div>

          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-[657px] "
          >
            <input
              className="rounded-3xl bg-[#43366A] p-2 placeholder:font-semibold"
              type="text"
              name="fullname"
              placeholder="Full Name"
              {...register("fullname")}
            />

            <input
              className="rounded-3xl bg-[#43366A] p-2"
              type="email"
              name="email"
              placeholder="Email Address"
              {...register("email")}
            />
            <input
              className="rounded-3xl bg-[#43366A] p-2"
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
              {...register("phonenumber")}
            />
            <textarea
              className="rounded-3xl bg-[#43366A] p-2"
              name="message"
              id="message"
              cols="30"
              placeholder="Your Message"
              rows="5"
            ></textarea>
            <button
              className="rounded-3xl px-8 py-1 mx-auto bg-[#43366A] "
              type="submit"
            >
              {" "}
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
