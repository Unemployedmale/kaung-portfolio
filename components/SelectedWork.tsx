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
              Things I&apos;ve built.
            </h2>
          </div>

          <p className="hidden max-w-sm text-right text-sm leading-6 text-zinc-500 md:block">
            A mix of finance, automation and analytics projects I&apos;ve worked
            on.
          </p>
        </div>

        <ProjectCard
          number="01"
          category="FinTech · Python · Streamlit"
          title="FinPilot"
          description="Takes messy transaction files, standardises them, flags things worth checking, and puts them into a simple review workflow."
          status="V1 · Working locally"
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
          description="A Telegram bot I built to manage my Google Calendar, send me useful reminders and briefs, and handle scheduling through normal conversation."
          status="Live · Hostinger VPS"
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
          description="My final-year project looking at returns, volatility and portfolio allocation using models like ARIMA and GARCH."
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