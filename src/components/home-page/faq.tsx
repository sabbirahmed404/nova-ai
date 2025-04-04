import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion";
  
  const faqItems = [
    {
      id: "item-1",
      question: "How does NovaAI's technology compare to other AI solutions?",
      answer: "NovaAI leverages the latest GPT-4o model with custom fine-tuning for specific business domains, resulting in more accurate and contextually relevant responses compared to generic AI solutions."
    },
    {
      id: "item-2",
      question: "Is my data secure with NovaAI?",
      answer: "Absolutely. We implement end-to-end encryption, strict access controls, and GDPR-compliant practices. Your data is never used to train our models without explicit permission."
    },
    {
      id: "item-3",
      question: "Can NovaAI integrate with our existing systems?",
      answer: "Yes, we offer comprehensive API documentation and pre-built connectors for popular business platforms including Salesforce, Microsoft Teams, Slack, and custom systems through our REST API."
    }
  ];
  
  const FAQ = () => {
    return (
      <div className="glass rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Technology FAQ</h3>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-nova-purple/30"
            >
              <AccordionTrigger>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  };
  
  export default FAQ;