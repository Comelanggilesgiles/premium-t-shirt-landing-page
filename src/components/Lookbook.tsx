import { Reveal } from "./Reveal";

export function Lookbook() {
  return (
    <section aria-label="Lookbook" className="relative overflow-hidden py-8 md:py-12">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-12 md:gap-5 lg:px-8">
        <Reveal className="md:col-span-7" variant="scale">
          <div className="group relative overflow-hidden rounded-[1.8rem] bg-ivory-deep">
            <div className="aspect-[16/10] overflow-hidden md:aspect-[16/11]">
              <img
                src="/images/collection-lay.png"
                alt="The Essential folded in Ivory, Ink, Sand, and Sage"
                className="img-zoom h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/50 to-transparent p-6 md:p-8">
              <p className="text-[11px] font-medium tracking-[0.22em] text-ivory/70 uppercase">
                The Core Four
              </p>
              <p className="font-display text-2xl text-ivory md:text-3xl">Ivory · Ink · Sand · Sage</p>
            </div>
          </div>
        </Reveal>
        <Reveal className="md:col-span-5" delay={120} variant="right">
          <div className="group relative h-full overflow-hidden rounded-[1.8rem] bg-ivory-deep">
            <div className="aspect-[16/10] h-full overflow-hidden md:aspect-auto">
              <img
                src="/images/lifestyle-city.png"
                alt="The Essential in Sand, worn in the city"
                className="img-zoom h-full min-h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 to-transparent p-6 md:p-8">
              <p className="text-[11px] font-medium tracking-[0.22em] text-ivory/70 uppercase">
                Worn in
              </p>
              <p className="font-display text-2xl text-ivory md:text-3xl">Every hour of the day</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
