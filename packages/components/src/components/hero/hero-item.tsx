type HeroItemProps = {
  heading: string;
  subheading: string;
  sources: {
    type: string;
    srcSet: string;
    media?: string;
  }[];
  alt: string;
};

export function HeroItem({ heading, subheading, sources, alt }: HeroItemProps) {
  return (
    <div className="grid grid-areas-stack items-end">
      <picture className="area-stack">
        {sources.map((source, index) => (
          <source key={index} type={source.type} srcSet={source.srcSet} media={source.media} />
        ))}
        <img
          className="object-cover size-full"
          fetchPriority="high"
          alt={alt}
          src={sources[0].srcSet}
        />
      </picture>
      <div className="area-stack size-full bg-black/50"></div>
      <div className="area-stack px-24 mb-54">
        <div className="flex flex-col gap-8 text-white max-w-4xl">
          <div className="text-white/80">
            <div className="text-h5 text-white/80">
              <p>{subheading}</p>
            </div>
            <div className="text-display">
              <p>{heading}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
