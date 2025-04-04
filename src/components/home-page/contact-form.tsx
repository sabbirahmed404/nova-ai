import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Type definitions
type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast("Message sent!", {
      description: "We'll get back to you as soon as possible.",
      style: {
        backgroundColor: 'white',
        color: 'red'
      }
    });
    form.reset();
  };

  return (
    <div className="glass-card p-8 border border-white/10">
      <h3 className="text-xl font-bold mb-6">Send us a message</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="bg-white/5 border-white/10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your email"
                      type="email"
                      {...field}
                      className="bg-white/5 border-white/10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Subject"
                    {...field}
                    className="bg-white/5 border-white/10"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    rows={5}
                    {...field}
                    className="bg-white/5 border-white/10 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="neon-button w-full">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;