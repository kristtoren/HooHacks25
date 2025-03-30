// app/faqPage/page.tsx
export default function FAQPage() {
  const faqs = [
    {
      question: "Why does AI use so much electricity?",
      answer:
        "AI models, especially large ones like GPT or image generators, require massive computational resources during training. These computations happen on energy-hungry GPUs or TPUs inside data centers, consuming significant electricity over long training periods.",
    },
    {
      question: "How does AI contribute to water consumption?",
      answer:
        "Data centers use water for cooling the servers running AI models. This water either evaporates in cooling towers or is used in air conditioning systems to prevent overheating, especially during intensive model training or high inference traffic.",
    },
    {
      question: "What part of AI is most energy-intensive?",
      answer:
        "Model training is by far the most energy-intensive phase. Training involves running billions of calculations over massive datasets for days or weeks. Inference (using the model after it's trained) also consumes energy, but significantly less per request.",
    },
    {
      question: "Does using AI tools (like ChatGPT) produce emissions?",
      answer:
        "Yes, but indirectly. When you use an AI tool, your request is processed on servers that consume electricity. If that electricity comes from fossil fuels, it contributes to carbon emissions. The footprint per use is small, but adds up at scale.",
    },
    {
      question: "Can AI be trained in more environmentally-friendly ways?",
      answer:
        "Absolutely. Techniques like model distillation, pruning, and energy-efficient hardware can reduce the environmental impact. Also, training in regions powered by renewable energy or using liquid cooling instead of water-based systems can help.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 text-white space-y-6">
      <h1 className="text-4xl font-bold text-pink-400 mb-8 text-center">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition">
          <h2 className="text-lg font-semibold text-cyan-300 mb-2">{faq.question}</h2>
          <p className="text-gray-300">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
