'use client';

import Link from 'next/link';

const sources = [
  {
    title: "How much energy ChatGPT consumes",
    url: "https://www.businessenergyuk.com/knowledge-hub/chatgpt-energy-consumption-visualized/",
  },
  {
    title: "How much water ChatGPT consumes",
    url: "https://www.thetimes.com/uk/technology-uk/article/thirsty-chatgpt-uses-four-times-more-water-than-previously-thought-bc0pqswdr",
  },
  {
    title: "Gen AI consumption of resources",
    url: "https://www.polytechnique-insights.com/en/columns/energy/generative-ai-energy-consumption-soars/",
  },
  {
    title: "How Much Energy Do Google Search and ChatGPT Use?",
    url: "https://www.rwdigital.ca/blog/how-much-energy-do-google-search-and-chatgpt-use/#:~:text=While%20Google's%20energy%20use%20for,for%20a%20single%20Google%20search.",
  },
  {
    title: "How much energy does ChatGPT use?",
    url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
  },
  {
    title: "Spreadsheets",
    url: "https://docs.google.com/spreadsheets/d/1Xe1WXNaZ0IZuuRAJP62xf_ufmwUhgRhtp446bTHnUOM/edit?gid=505480858#gid=505480858",
  },
  {
    title: "Number of Google searches per day",
    url: "https://explodingtopics.com/blog/google-searches-per-day",
  },
  {
    title: "ChatGPT March data",
    url: "https://www.demandsage.com/chatgpt-statistics/",
  },
  {
    title: "CO₂ emission data and electricity",
    url: "https://tinyml.substack.com/p/the-carbon-impact-of-large-language",
  },
  {
    title: "ChatGPT weekly active users",
    url: "https://www.demandsage.com/chatgpt-statistics/",
  },
];

export default function SourcesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-300 mb-6 text-center">Sources & References</h1>

      <ul className="space-y-4">
        {sources.map((source, index) => (
          <li key={index}>
            <Link
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline hover:text-cyan-200 transition-colors text-lg"
            >
              {index + 1}. {source.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}