import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const faqs = [
  { question: "How to contact with riders emergency ?", answer: "" },
  { question: "App installation failed, how to update system information?", answer: "" },
  {
    question: "Website response taking time, how to improve?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally to provide information.",
  },
  { question: "New update fixed all bug and issues", answer: "" },
];

const AccordionFAQ = () => {
  const [openIndex, setOpenIndex] = useState(2); // Default open item

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl  p-8">
        <div className="text-center mb-6">
          <p className="text-xs text-orange-500 tracking-widest mb-1">FREQUENT QUESTION</p>
          <h2 className="text-xl font-semibold text-slate-900">Do you have any question</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                type="button"
                className="w-full flex items-center gap-3 py-4 text-sm text-slate-900 font-normal focus:outline-none"
                aria-expanded={openIndex === index}
                onClick={() => toggle(index)}
              >
                <span className="w-5 h-5 flex items-center justify-center rounded-full border border-green-500 text-green-500">
                  <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'} text-xs`}></i>
                </span>
                {faq.question}
              </button>
              {faq.answer && openIndex === index && (
                <p className="text-xs text-slate-600 mt-1 mb-4 leading-relaxed px-8">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionFAQ;
