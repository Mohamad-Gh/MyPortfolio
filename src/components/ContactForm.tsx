import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICE_ID = "service_bzklv08";
const TEMPLATE_ID = "template_43xvq0m";
const PUBLIC_KEY = "jE28kDvV4AGqgfN8t";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: "Contact from Portfolio",
          from_name: data.name,
          user_email: data.email,
          message: data.message,
          time: new Date().toISOString(),
        },
        PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Email send failed:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="p-10 space-y-6  bg-background shadow-2xl">
      <h2 className="text-2xl font-semibold text-center py-6">Contact Me</h2>

      <div className="flex gap-6 flex-col lg:flex-row lg:items-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full lg:w-1/2 flex flex-col justify-between"
        >
          <div>
            <Input placeholder="Your Name" {...register("name")} />
            <p className="text-red-500 text-sm min-h-[1.25rem]">
              {errors.name?.message}
            </p>
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              {...register("email")}
            />
            <p className="text-red-500 text-sm min-h-[1.25rem]">
              {errors.email?.message}
            </p>
          </div>
          <div className="flex-1">
            <Textarea
              rows={8}
              placeholder="Your Message"
              {...register("message")}
              className="h-full"
            />
            <p className="text-red-500 text-sm min-h-[1.25rem]">
              {errors.message?.message}
            </p>
          </div>
          <Button
            type="submit"
            className="cursor-pointer py-4 sm:py-6 mt-4 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Lets build something */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between mt-8 lg:mt-0">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">
                Let's Build Something Amazing
              </h2>
            </div>

            <div className="space-y-4 mb-8 text-muted-foreground flex-1">
              <p>
                With extensive experience in building production-ready
                applications, I am well-equipped to bring your next project to
                life with precision and care.
              </p>
              <p>
                From concept to deployment, I ensure every detail is crafted
                with excellence. Let's work together to create something truly
                exceptional.
              </p>
            </div>
          </div>

          {/* Links */}
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            viewport={{ once: true }}
          >
            <a href="mailto:ghalebizadem@gmail.com" target="_blank">
              <Button variant="outline" className="w-full sm:w-auto">
                <Mail className="w-4 h-4 lg:mr-2 sm:mr-0" />
                <span className="sm:hidden lg:flex">Email Me</span>
              </Button>
            </a>
            <a
              href="https://github.com/MohamadGH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full sm:w-auto">
                <FaGithub className="w-4 h-4 lg:mr-2 sm:mr-0" />
                <span className="sm:hidden lg:flex">GitHub</span>
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/mohamad-ghalebizade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full sm:w-auto">
                <FaLinkedin className="w-4 h-4 lg:mr-2 sm:mr-0" />
                <span className="sm:hidden lg:flex">LinkedIn</span>
              </Button>
            </a>
          </motion.div>

          {/* Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
            <a href="http://www.linkedin.com/in/mohamad-g-210581156">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer w-full sm:w-auto">
                Get In Touch
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </a>
            <Link to={"/projects"}>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors cursor-pointer w-full sm:w-auto">
                View Projects
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
