import type { ReactNode } from "react";

export default function SourcesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}