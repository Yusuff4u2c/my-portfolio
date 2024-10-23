import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

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
      <div className="flex flex-col gap-8 md:flex-row px-12 md:justify-between py-20 items-center">
        <div className="flex flex-col gap-4 font-semibold md:text-xl">
          <h1 className="px-4 border-b border-white w-fit mx-auto py-4 text-[40px] font-semibold">
            Contact
          </h1>
          <div className="flex gap-5 items-center">
            <FaPhone />
            <div>
              <h1>+2348107640170</h1>
              <h1>+2348032320596</h1>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <FaEnvelope />
            <h1>yemscript@gmail.com</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaLocationArrow />
            <h1>No 1, Forage Road, Kolapo</h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex px-12 flex-col gap-5 w-full md:w-[50%]"
        >
          <input
            className="rounded-3xl bg-[#43366A] p-2 placeholder:font-semibold"
            type="text"
            name="fullname"
            placeholder="Full Name"
            {...register("fullname", { required: true })}
          />
          <input
            className="rounded-3xl bg-[#43366A] p-2"
            type="email"
            name="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
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
            {...register("message")}
          ></textarea>
          <button
            className="rounded-3xl px-8 py-2 mx-auto bg-[#F86F03] text-white font-bold"
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
