import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "327e9c26-ab08-443d-befd-c20814a0957d",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-[53rem] flex flex-col items-start">
        <div className="relative bg-black px-[1rem] md:px-[5rem] py-[5rem] w-full">
          <div className="relative z-10">
            <h2 className="text-[32px] font-bold tracking-tight leading-tight text-white text-center w-full mb-[16px]">
              How Can I Help?
            </h2>
            <p className="text-[18px] text-gray-400 text-center w-full mb-[40px]">
              Let's turn your vision into something amazing.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[53rem] p-6 flex flex-col py-[58px] px-[1.5rem] md:px-[8rem] items-center gap-[25px]">
        <div className="w-full max-w-[53rem] flex flex-col py-[58px] items-start">
          <h2 className="text-[32px] font-bold tracking-tight leading-tight text-black mb-[16px]">
            Get in touch
          </h2>
          <p className="text-[16px] font-normal leading-relaxed text-gray-600 mb-[32px] max-w-[600px]">
            I'm always interested in exploring new opportunities, collaborating,
            or exchanging ideas with like-minded individuals. Feel free to book
            a call or email me if you'd like to see my portfolio deck or to
            discuss a potential project.
          </p>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="grid md:flex gap-4 w-full">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="flex-1 bg-gray-100 border-[1px] border-black/10 rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="flex-1 bg-gray-100 border-[1px] border-black/10 rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Write your Message"
              required
              className="w-full bg-gray-100 border-[1px] border-black/10 rounded-[14px] px-[24px] py-[14px] text-[16px] h-[150px] outline-none focus:ring-2 focus:ring-black transition-all resize-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-black relative text-white py-[14px] px-[24px] rounded-[14px] text-[16px] hover:opacity-90 duration-300 transition-all w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
