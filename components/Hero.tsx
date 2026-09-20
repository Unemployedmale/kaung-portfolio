export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0b0d10] px-6 pt-24"> 
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Business Analytics · FinTech · Product · Automation
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
            Building practical products at the intersection of finance,
            data and automation.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            I&apos;m Kaung Mon Khant, a Business Analytics undergraduate
            working across financial analytics, product thinking and
            intelligent automation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-20 grid max-w-3xl grid-cols-2 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
          <div>
            <p className="text-xl font-medium text-white">FinTech</p>
            <p className="mt-1 text-sm text-zinc-500">Finance systems</p>
          </div>

          <div>
            <p className="text-xl font-medium text-white">Product</p>
            <p className="mt-1 text-sm text-zinc-500">Problem → solution</p>
          </div>

          <div>
            <p className="text-xl font-medium text-white">Analytics</p>
            <p className="mt-1 text-sm text-zinc-500">Python & SQL</p>
          </div>

          <div>
            <p className="text-xl font-medium text-white">Automation</p>
            <p className="mt-1 text-sm text-zinc-500">AI & workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}