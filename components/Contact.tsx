const links = [
  {
    label: "LinkedIn",
    handle: "Kaung Mon Khant",
    href: "https://www.linkedin.com/in/kaung-mon-khant-880390234",
  },
  {
    label: "GitHub",
    handle: "@Unemployedmale",
    href: "https://github.com/Unemployedmale",
  },
  {
    label: "TikTok",
    handle: "@unemployedchronicles.sg",
    href: "https://www.tiktok.com/@unemployedchronicles.sg",
  },
  {
    label: "Email",
    handle: "kaungmonkhant001@suss.edu.sg",
    href: "mailto:kaungmonkhant001@suss.edu.sg",
  },
  {
    label: "Resume",
    handle: "Request my latest resume",
    href: "mailto:kaungmonkhant001@suss.edu.sg?subject=Resume%20Request%20-%20Kaung%20Mon%20Khant",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b0d10] px-6 pb-12 pt-32">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-white sm:text-6xl">
              Want to chat?
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-500">
              If you&apos;re hiring, working on something interesting, or just
              want to say hi, reach out.
            </p>
          </div>

          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.label === "Email" || link.label === "Resume"
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.label === "Email" || link.label === "Resume"
                    ? undefined
                    : "noreferrer"
                }
                className="group flex items-center justify-between border-b border-white/10 py-6"
              >
                <div>
                  <p className="text-sm text-zinc-500">{link.label}</p>

                  <p className="mt-1 text-lg text-white transition group-hover:text-zinc-300">
                    {link.handle}
                  </p>
                </div>

                <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-white">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row">
          <p>Kaung Mon Khant</p>
          <p>Built in Singapore with Next.js.</p>
        </div>
      </div>
    </section>
  );
}