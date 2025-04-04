import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, PhoneCall, MapPin, Clock } from "lucide-react";
import ContactForm from "./contact-form";

// Contact info items data
const contactItems = [
  {
    icon: MessageSquare,
    title: "Chat with Us",
    description:
      "Our AI-powered chat is available 24/7 to answer your questions",
    action: {
      text: "Start Chat",
      href: "#chat",
    },
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll get back to you",
    action: {
      text: "info@nova-ai.com",
      href: "mailto:info@nova-ai.com",
    },
  },
  {
    icon: PhoneCall,
    title: "Call Us",
    description: "Speak directly with our AI consultants",
    action: {
      text: "+1-800-NOVA-AI",
      href: "tel:+1-800-NOVA-AI",
    },
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "123 AI Boulevard, Tech Valley\nSan Francisco, CA 94105",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description:
      "Monday - Friday: 9am - 6pm PST\nWeekend: AI Support Available 24/7",
  },
];

const Contact: React.FC = () => {
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
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 flex items-start space-x-4"
              >
                <item.icon className="text-nova-blue h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-medium text-white mb-1">{item.title}</h3>
                  {item.description.split("\n").map((line, i) => (
                    <p key={i} className="text-gray-400">
                      {line}
                    </p>
                  ))}
                  {item.action &&
                    (item.action.href.startsWith("mailto:") ||
                    item.action.href.startsWith("tel:") ? (
                      <a
                        href={item.action.href}
                        className="text-nova-blue hover:text-nova-purple transition-colors block mt-2"
                      >
                        {item.action.text}
                      </a>
                    ) : (
                      <Button
                        variant="link"
                        className="p-0 mt-2 text-nova-blue hover:text-nova-purple"
                        asChild
                      >
                        <a href={item.action.href}>{item.action.text}</a>
                      </Button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
