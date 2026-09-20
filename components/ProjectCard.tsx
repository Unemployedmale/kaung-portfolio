import Image from "next/image";

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  status: string;
  images?: ProjectImage[];
};

const basePath =
  process.env.NEXT_PUBLIC_GITHUB_PAGES === "true"
    ? "/kaung-portfolio"
    : "";

export default function ProjectCard({
  number,
  title,
  category,
  description,
  status,
  images = [],
}: ProjectCardProps) {
  return (
    <article className="group border-t border-white/10 py-16">
      <div className="grid gap-8 lg:grid-cols-[60px_1fr_1.15fr] lg:gap-12">
        <div>
          <p className="text-sm text-zinc-600">{number}</p>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
              {category}
            </p>

            <h3 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {title}
            </h3>

            <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
              {description}
            </p>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-zinc-600">
            {status}
          </p>
        </div>

        {images.length > 0 && (
          <div className="grid gap-3">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111317]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={`${basePath}${images[0].src}`}
                  alt={images[0].alt}
                  fill
                  className="object-contain p-4 transition duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-2 gap-3">
                {images.slice(1, 3).map((image) => (
                  <div
                    key={image.src}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111317]"
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={`${basePath}${image.src}`}
                        alt={image.alt}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}