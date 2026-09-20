const experiences = [
  {
    company: "Calli Coffee",
    role: "Co-Founder",
    period: "Nov 2024 - Present",
    description:
      "Building and growing Calli Coffee, working across brand, product direction, customer validation and go-to-market. We're also exploring how the business can grow beyond coffee into a broader wellness-focused brand.",
    tags: ["Startup", "Product", "Go-to-market"],
  },
  {
    company: "Bybit",
    role: "Finance Analyst / Product Management Intern",
    period: "Jun 2024 - Dec 2024",
    description:
      "Worked across finance, data and product projects, from SQL-heavy reporting and P&L checks to internal workflow improvements and PRD work with different teams.",
    tags: ["Finance", "SQL", "Product"],
  },
  {
    company: "Glance Solutions",
    role: "Management Intern",
    period: "Feb 2024 - May 2024",
    description:
      "Worked on a mix of operations, sales and product-related projects, including lead generation, market research, CRM improvements and internal workflow optimisation.",
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
            Places I&apos;ve worked.
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