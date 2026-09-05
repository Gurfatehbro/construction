export default function TermsPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-white">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Welcome to Global Infraspace. By accessing our website, booking consultations, or contracting our design and civil construction services, you agree to the following terms.
          </p>
          <h2 className="font-serif text-2xl text-white mt-8">Quotations &amp; Scope</h2>
          <p>
            All architectural drawings, 3D renderings, bill of quantities (BOQ), and project estimates are subject to formal contract execution, site verification, and milestone agreements.
          </p>
          <h2 className="font-serif text-2xl text-white mt-8">Quality &amp; Standards</h2>
          <p>
            Civil engineering, plumbing, electrical, and interior finishing works follow agreed Indian Standard (IS) codes and manufacturer specifications as documented in written contracts.
          </p>
        </div>
      </section>
    </div>
  );
}
