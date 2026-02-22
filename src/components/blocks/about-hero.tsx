export function AboutHero() {
  return (
    <section className="">
      <div className="container max-w-5xl">
        <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Data discovery for the people who need it most
        </h1>

        <p className="text-muted-foreground mt-5 max-w-2xl text-2xl md:text-3xl lg:text-4xl">
          Keasy bridges the gap between raw data and domain expertise.
        </p>

        <p className="text-muted-foreground mt-8 hidden max-w-2xl space-y-6 text-lg text-balance md:block lg:mt-12">
          Too often, the people who best understand the data — domain experts,
          analysts, researchers — are the ones with the least access to it. They
          depend on engineering teams to extract, transform, and interpret
          information before they can even begin their work.
          <br />
          <br />
          We built Keasy to change that. By combining knowledge graphs, open
          standards, and AI, we give domain experts the tools to discover,
          catalog, and explore their data independently — without writing a
          single line of code*.
        </p>
        <p className="text-muted-foreground/60 mt-4 hidden max-w-2xl text-sm md:block">
          *Data mapping currently relies on a DSL. A low-code and conversational interface is on our roadmap.
        </p>
      </div>
    </section>
  );
}
