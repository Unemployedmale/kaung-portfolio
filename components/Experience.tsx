const experiences = [
  {
    company: "Calli Coffee",
    role: "Co-Founder",
    period: "Nov 2024 - Present",
    description:
      "Working on product direction, customer validation, branding and figuring out how to grow the business.",
    tags: ["Startup", "Product", "Go-to-market"],
  },
  {
    company: "Bybit",
    role: "Finance Analyst / Product Management Intern",
    period: "Jun 2024 - Dec 2024",
    description:
      "Worked across finance, data and product. Mostly reporting, P&L checks, SQL analysis, PRDs and internal workflow improvements.",
    tags: ["Finance", "SQL", "Product"],
  },
  {
    company: "Glance Solutions",
    role: "Management Intern",
    period: "Feb 2024 - May 2024",
    description:
      "Helped with market research, lead generation, CRM work and general operations.",
    tags: ["Operations", "Sales", "Research"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0b0d10] px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 border-t border-white/10 pt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl">
            What I&apos;ve worked on.
          </h2>
        </div>

        <div>
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="grid gap-8 border-t border-white/10 py-12 md:grid-cols-[60px_1fr_1.3fr]"
            >
              <p className="text-sm text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div>
                <p className="text-sm text-zinc-500">{experience.period}</p>

                <h3 className="mt-3 text-2xl font-medium text-white">
                  {experience.role}
                </h3>

                <p className="mt-2 text-zinc-400">{experience.company}</p>
              </div>

              <div>
                <p className="max-w-xl leading-7 text-zinc-400">
                  {experience.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}