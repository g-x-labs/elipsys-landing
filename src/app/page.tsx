import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1 className="text-gray-600 text-sb2">2024 - G[X]LABS</h1>
      </header>
      <main className="row-start-2 flex flex-col items-center gap-y-8">
        <Image
          src="/elipsys.svg"
          alt="Next.js logo"
          width={240}
          height={38}
          priority
        />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Doc
        </a>
      </footer>
    </div>
  );
}
