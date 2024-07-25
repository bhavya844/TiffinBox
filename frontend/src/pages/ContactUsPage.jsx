import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

const schema = z.object({
  name: string().min(1, { message: "Name is required." }),
  email: string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email." }),
  subject: string().min(1, { message: "Subject is required." }),
  message: string().min(1, { message: "Message is required." }),
});

function ContactUsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onSubmit" });

  const onSubmit = (data) => {
    alert("Send Data");
  };

  return (
    <div className="flex flex-col items-center">
      <section className="max-w-5xl overflow-hidden rounded-md shadow-md hero h-96 bg-bgContactUs">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold md:text-6xl">/Contact Us</h1>
            <p className="mb-5">
              We'd love to hear from you! Whether you're a customer looking to
              order delicious homemade tiffins or a tiffin service provider
              wanting to join our platform, we're here to help. Feel free to
              reach out to us
            </p>
            <a href="#reach-us" className="btn btn-secondary text-slate-200">
              Reach Us
            </a>
          </div>
        </div>
      </section>
      <section
        id="reach-us"
        className="flex flex-col justify-center w-full max-w-2xl gap-8 p-4 py-32"
      >
        <h1 className="text-3xl font-bold text-center capitalize">
          get in touch with us
        </h1>
        <form
          className="flex flex-col w-full gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4 md:flex-row">
            <label className="w-full form-control">
              <input
                type="text"
                placeholder="Name"
                className="w-full input input-bordered"
                {...register("name")}
              />
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors?.name?.message}
                </span>
              </div>
            </label>
            <label className="w-full form-control">
              <input
                type="text"
                placeholder="Email"
                className="w-full input input-bordered"
                {...register("email")}
              />
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors?.email?.message}
                </span>
              </div>
            </label>
          </div>
          <label className="w-full form-control">
            <input
              type="text"
              placeholder="Subject"
              className="w-full input input-bordered"
              {...register("subject")}
            />
            <div className="label">
              <span className="label-text-alt text-error">
                {errors?.subject?.message}
              </span>
            </div>
          </label>
          <label className="form-control">
            <textarea
              className="h-36 textarea textarea-bordered textarea-lg"
              placeholder="Message"
              {...register("message")}
            ></textarea>
            <div className="label">
              <span className="label-text-alt text-error">
                {errors?.message?.message}
              </span>
            </div>
          </label>
          <button className="uppercase btn btn-secondary" type="submit">
            send
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUsPage;
