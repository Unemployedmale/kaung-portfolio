import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section id="work" className="bg-[#0b0d10] px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
              Stuff I&apos;ve built.
            </h2>
          </div>

          <p className="hidden max-w-sm text-right text-sm leading-6 text-zinc-500 md:block">
            A few projects I actually use, care about, or learned a lot from.
          </p>
        </div>

        <ProjectCard
          number="01"
          category="FinTech · Python · Streamlit"
          title="FinPilot"
          description="Cleans transaction files, flags exceptions and gives reviewers a simple place to work through them."
          status="Local build"
          images={[
            {
              src: "/projects/finpilot/04-exception-dashboard.png",
              alt: "FinPilot exception review dashboard",
            },
            {
              src: "/projects/finpilot/01-upload-mapping.png",
              alt: "FinPilot upload and column mapping",
            },
            {
              src: "/projects/finpilot/05-exception-detail.png",
              alt: "FinPilot exception detail and evidence",
            },
          ]}
        />

        <ProjectCard
          number="02"
          category="AI Automation · n8n · FastAPI"
          title="Mon Personal Assistant"
          description="A Telegram bot I use to manage my calendar, schedule events and get reminders without opening Google Calendar."
          status="Live"
          images={[
            {
              src: "/projects/mon-personal-assistant/01-telegram-create-event.png",
              alt: "Telegram scheduling request",
            },
            {
              src: "/projects/mon-personal-assistant/04-n8n-core-agent.png",
              alt: "n8n core agent workflow",
            },
            {
              src: "/projects/mon-personal-assistant/05-fastapi-swagger.png",
              alt: "FastAPI backend documentation",
            },
          ]}
        />

        <ProjectCard
          number="03"
          category="Financial Analytics · Python"
          title="Portfolio Optimization"
          description="My final-year project on return forecasting, volatility and portfolio allocation using Python."
          status="Final Year Project"
          images={[
            {
              src: "/projects/portfolio-optimization/efficient-frontier.png",
              alt: "Efficient frontier from portfolio optimization project",
            },
            {
              src: "/projects/portfolio-optimization/aapl-forecast-band.png",
              alt: "AAPL forecast and risk band",
            },
            {
              src: "/projects/portfolio-optimization/volatility-adjusted-weights.png",
              alt: "Volatility adjusted portfolio weights",
            },
          ]}
        />
      </div>
    </section>
  );
}