// app/aboutPage/layout.tsx
import type { ReactNode } from 'react';

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main>{children}</main>
    </div>
  );
}
