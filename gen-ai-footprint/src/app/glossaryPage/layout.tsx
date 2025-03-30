// app/glossary/layout.tsx
import type { ReactNode } from "react";

export default function GlossaryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-400">AI & Emissions Glossary</h1>
        {children}
      </main>
    </div>
  );
}
