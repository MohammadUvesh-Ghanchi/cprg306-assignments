import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <header className="flex flex-col items-center gap-4">
          <nav className="flex gap-4">
            <a href="week-2" className="text-blue-600 hover:underline">
              Week 2
            </a>
            <a href="week-3" className="text-blue-600 hover:underline">
              Week 3
            </a>
            <a href="week-4" className="text-blue-600 hover:underline">
              Week 4
            </a>
            <a href="week-5" className="text-blue-600 hover:underline">
              Week 5
            </a>
            <a href="week-6" className="text-blue-600 hover:underline">
              Week 6
            </a>
            <a href="week-7" className="text-blue-600 hover:underline">
              Week 7
            </a>
            <a href="week-8" className="text-blue-600 hover:underline">
              Week 8
            </a>
            <a href="week-9" className="text-blue-600 hover:underline">
              Week 9
            </a>
            <a href="week-10" className="text-blue-600 hover:underline">
              Week 10
            </a>
          </nav>
          </header>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
