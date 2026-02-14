import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Immersia",
  description:
    "Learn how Immersia collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Legal
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: January 15, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-stone dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground">
            {/* Introduction */}
            <section className="mb-12">
              <h2>Introduction</h2>
              <p>
                At Immersia, we believe that privacy is a fundamental right. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our brand in any capacity.
              </p>
              <p>
                We are committed to protecting your personal information and being transparent about what data we collect and how we use it. By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2>Information We Collect</h2>
              
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Create an account or register for our services</li>
                <li>Make a purchase or place an order</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in our VR experiences or Osmobloom technology sessions</li>
                <li>Contact us with inquiries or feedback</li>
                <li>Participate in surveys, promotions, or events</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Payment and billing information</li>
                <li>Account credentials</li>
                <li>Fragrance preferences and purchase history</li>
                <li>Communication preferences</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you access our website or services, we may automatically collect certain information, including:</p>
              <ul>
                <li>Device information (browser type, operating system, device identifiers)</li>
                <li>IP address and approximate location</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Referral sources and search terms</li>
                <li>VR experience interaction data (for service improvement purposes only)</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process and fulfill your orders, including refill subscriptions</li>
                <li>Personalize your fragrance experience and recommendations</li>
                <li>Communicate with you about orders, services, and promotions</li>
                <li>Improve our products, services, and VR experiences</li>
                <li>Develop new fragrances and technologies like Osmobloom</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Detect and prevent fraud or unauthorized access</li>
                <li>Comply with legal obligations</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            {/* VR Experience Data */}
            <section className="mb-12">
              <h2>VR Experience and Osmobloom Technology Data</h2>
              <p>
                Our immersive VR experiences and Osmobloom technology may collect additional data to enhance your sensory journey. This includes:
              </p>
              <ul>
                <li>Session duration and interaction patterns</li>
                <li>Scent preferences and reactions noted during experiences</li>
                <li>Environmental settings preferences</li>
              </ul>
              <p>
                This data is used solely to improve our experiences and personalize your fragrance journey. We do not collect biometric data without explicit consent, and all VR session data is anonymized for research purposes.
              </p>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2>Information Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              
              <h3>Service Providers</h3>
              <p>
                Third-party vendors who assist us in operating our business, such as payment processors, shipping partners, email service providers, and cloud hosting services. These providers are bound by contractual obligations to protect your information.
              </p>

              <h3>Business Partners</h3>
              <p>
                Select partners for co-branded experiences or collaborations, only with your explicit consent.
              </p>

              <h3>Legal Requirements</h3>
              <p>
                When required by law, legal process, or to protect our rights, safety, or property, or that of our customers or others.
              </p>

              <h3>Business Transfers</h3>
              <p>
                In connection with any merger, acquisition, or sale of company assets, your information may be transferred as part of that transaction.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure payment processing through PCI-compliant providers</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2>Your Rights and Choices</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to certain exceptions</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at privacy@immersia.com. We will respond to your request within the timeframe required by applicable law.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities. These technologies help us:
              </p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Understand how you interact with our website</li>
                <li>Analyze traffic and usage patterns</li>
                <li>Deliver targeted advertising (with your consent)</li>
              </ul>
              <p>
                You can control cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2>International Data Transfers</h2>
              <p>
                As a global fragrance house with artisans and partners worldwide, your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable law.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2>Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
              </p>
            </section>

            {/* Retention */}
            <section className="mb-12">
              <h2>Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period may vary depending on the context and our legal obligations.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2>Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <address className="not-italic">
                <strong>Immersia Privacy Office</strong><br />
                12 Rue de la Parfumerie<br />
                Grasse, 06130<br />
                France<br /><br />
                Email: privacy@immersia.com<br />
                Phone: +33 4 93 XX XX XX
              </address>
            </section>

            {/* Sustainability Note */}
            <section className="p-6 bg-accent/50 rounded-lg">
              <h3 className="text-foreground">Our Commitment to Responsible Data Use</h3>
              <p className="mb-0">
                Just as we are committed to sustainable sourcing and environmental responsibility in our fragrances, we are equally committed to responsible and ethical use of your personal data. We believe that trust is earned through transparency, and we strive to honor that trust in everything we do.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
