import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
    <section id="contact" className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-center">Contact Me</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input placeholder="Your Name" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input type="email" placeholder="Your Email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Textarea
            rows={5}
            placeholder="Your Message"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
}
