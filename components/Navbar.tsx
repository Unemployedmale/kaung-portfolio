import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0b0d10]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white"
        >
          KMK
        </Link>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="#work" className="transition hover:text-white">
            Work
          </Link>

          <Link href="#experience" className="transition hover:text-white">
            Experience
          </Link>

          <Link href="#about" className="transition hover:text-white">
            About
          </Link>

          <Link
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:bg-white hover:text-black"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}