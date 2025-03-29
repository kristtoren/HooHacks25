export default function FootprintLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        
  
        <main className="flex flex-col items-center justify-center p-8">
          {children}
        </main>
      </div>
    );
  }
  