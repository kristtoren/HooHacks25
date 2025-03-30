// app/faqPage/layout.tsx
import type { ReactNode } from 'react';

export default function FAQLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="pt-10 px-4">{children}</main>
    </div>
  );
}
