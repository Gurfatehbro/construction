export default function WhyUs() {
  const points = [
    {
      num: '01',
      title: 'One team, complete scope',
      desc: 'Design, structure, services and finishing handled by a single accountable team — no gaps between vendors, no blame when something goes wrong.',
    },
    {
      num: '02',
      title: 'Approve the design before you build',
      desc: '3D elevations and interior views let you settle proportions, materials and lighting on screen, where changes are free.',
    },
    {
      num: '03',
      title: 'Written scope and specification',
      desc: 'Every quotation names the scope, material grade and payment stages, so you can compare it honestly with any other quotation.',
    },
    {
      num: '04',
      title: 'Local, on-site supervision',
      desc: 'Our team is based at Gandhi Maidan, Patna. Site visits, checks and corrections happen in person, not over the phone.',
    },
  ];

  return (
    <section className="border-b border-border bg-surface">
      <div className="container-wide py-24">
        <div className="reveal">
          <p className="eyebrow">Why choose us</p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
            Built on clarity, not promises
          </h2>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {points.map((p) => (
            <div key={p.num} className="reveal">
              <div className="border-t border-border pt-6">
                <span className="text-xs tracking-[0.3em] text-gold font-medium">
                  {p.num}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
