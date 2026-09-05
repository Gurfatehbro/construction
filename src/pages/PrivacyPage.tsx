import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-white">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            At Global Infraspace, we respect your privacy. This policy outlines how we handle personal information gathered during consultations, WhatsApp inquiries, and website interactions.
          </p>
          <h2 className="font-serif text-2xl text-white mt-8">Information We Collect</h2>
          <p>
            We collect information provided directly by you, such as your name, phone number, project type, site address, and architectural requirements when you request a consultation or quotation.
          </p>
          <h2 className="font-serif text-2xl text-white mt-8">How We Use Information</h2>
          <p>
            Your details are used solely to assess site feasibility, calculate structural &amp; interior estimates, prepare 3D design previews, and communicate regarding your project. We do not sell or share personal data with third-party marketers.
          </p>
        </div>
      </section>
    </div>
  );
}
