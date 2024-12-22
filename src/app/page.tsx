import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1 className="text-gray-600 text-sb2">2024 - G[X]LABS</h1>
      </header>
      <main className="row-start-2 flex flex-col items-center gap-y-8">
        <Image
          src="/elipsys.svg"
          alt="Elipsys logo"
          width={240}
          height={38}
          style={{ width: "240px", height: "auto" }}
          priority
        />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <Link
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            className="fill-gray-50"
            aria-hidden
            src="/twitter.svg"
            alt="Twitter icon"
            width={24}
            height={24}
            style={{ width: "24px", height: "auto" }}
          />
        </Link>
      </footer>
    </div>
  );
}
