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

import { MessageSquare, Mail, PhoneCall, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast("Message sent!", {
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our AI solutions? Our team is ready to help you
            transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 flex items-start space-x-4">
              <MessageSquare className="text-nova-blue h-6 w-6 mt-1" />
              <div>
                <h3 className="font-medium text-white mb-1">Chat with Us</h3>
                <p className="text-gray-400">
                  Our AI-powered chat is available 24/7 to answer your questions
                </p>
                <Button
                  variant="link"
                  className="p-0 mt-2 text-nova-blue hover:text-nova-purple"
                >
                  Start Chat
                </Button>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <Mail className="text-nova-blue h-6 w-6 mt-1" />
              <div>
                <h3 className="font-medium text-white mb-1">Email Us</h3>
                <p className="text-gray-400">
                  Send us an email and we'll get back to you
                </p>
                <a
                  href="mailto:info@nova-ai.com"
                  className="text-nova-blue hover:text-nova-purple transition-colors block mt-2"
                >
                  info@nova-ai.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <PhoneCall className="text-nova-blue h-6 w-6 mt-1" />
              <div>
                <h3 className="font-medium text-white mb-1">Call Us</h3>
                <p className="text-gray-400">
                  Speak directly with our AI consultants
                </p>
                <a
                  href="tel:+1-800-NOVA-AI"
                  className="text-nova-blue hover:text-nova-purple transition-colors block mt-2"
                >
                  +1-800-NOVA-AI
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <MapPin className="text-nova-blue h-6 w-6 mt-1" />
              <div>
                <h3 className="font-medium text-white mb-1">Visit Us</h3>
                <p className="text-gray-400">123 AI Boulevard, Tech Valley</p>
                <p className="text-gray-400">San Francisco, CA 94105</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <Clock className="text-nova-blue h-6 w-6 mt-1" />
              <div>
                <h3 className="font-medium text-white mb-1">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9am - 6pm PST</p>
                <p className="text-gray-400">
                  Weekend: AI Support Available 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
                            {...field}
                            type="email"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
