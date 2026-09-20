export default function About() {
  return (
    <section id="about" className="bg-[#0b0d10] px-6 py-32">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl">
              A little bit about me.
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I&apos;m a Business Analytics student in Singapore, interested in
              FinTech, product, automation and figuring out how technology can
              make messy workflows less painful.
            </p>

            <p>
              I&apos;ve worked across finance, product and operations, and I
              usually learn by building things. That could be a financial
              exception tool, a Telegram scheduling assistant, or random
              experiments that solve problems I actually have.
            </p>

            <p>
              Outside of work, I&apos;m usually training, playing basketball,
              fishing, or posting questionable life updates on TikTok.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}