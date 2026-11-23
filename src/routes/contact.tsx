import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Loader2,
  CalendarCheck,
  Clock,
  Building,
} from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, whatsappUrl } from "@/lib/business";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovieStudio",
  name: business.name,
  telephone: [`+91${business.phonePrimary}`, `+91${business.phoneSecondary}`],
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "4/5 Varghese Avenue, Ashok Nagar, Vadapalani",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: "Chennai",
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact & Recce Booking - Vadapalani Shooting House",
      },
      {
        name: "description",
        content:
          "Book movie shoot dates or schedule a location recce at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai. Call 88385 04143 / 70108 33853.",
      },
      { property: "og:title", content: "Contact & Recce Booking - Vadapalani Shooting House" },
      { property: "og:url", content: "https://vadapalanishootinghouse.com/contact" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://vadapalanishootinghouse.com/contact",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    productionHouse: "",
    projectType: "Feature Film",
    name: "",
    phone: "",
    email: "",
    date: "",
    requirement: "Full Day Shoot",
    spacesRequired: [] as string[],
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const toggleSpace = (spaceName: string) => {
    setForm((prev) => ({
      ...prev,
      spacesRequired: prev.spacesRequired.includes(spaceName)
        ? prev.spacesRequired.filter((s) => s !== spaceName)
        : [...prev.spacesRequired, spaceName],
    }));
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const summaryText = `Hello, I would like to enquire about booking the movie shooting house at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai:

• Name: ${form.name}
• Phone: ${form.phone}
• Email: ${form.email || "Not provided"}
• Production House / Banner: ${form.productionHouse || "Independent / Individual"}
• Project Format: ${form.projectType}
• Requirement: ${form.requirement}
• Preferred Date: ${form.date || "To be discussed"}
• Spaces Required: ${form.spacesRequired.join(", ") || "Full House (All Spaces)"}
• Additional Notes: ${form.message || "None"}`;

      const waEnquiryUrl = `https://wa.me/918838504143?text=${encodeURIComponent(summaryText)}`;

      // Open WhatsApp with all shoot parameters prefilled (with fallback if popups are blocked)
      const popup = window.open(waEnquiryUrl, "_blank", "noopener,noreferrer");
      if (!popup || popup.closed || typeof popup.closed === "undefined") {
        window.location.href = waEnquiryUrl;
      }

      toast.success("Enquiry Form Prepared!", {
        description: "Connecting you directly to our Location Manager on WhatsApp.",
      });

      setForm({
        productionHouse: "",
        projectType: "Feature Film",
        name: "",
        phone: "",
        email: "",
        date: "",
        requirement: "Full Day Shoot",
        spacesRequired: [],
        message: "",
      });
    } catch (err: unknown) {
      console.error(err);
      toast.error("Notice: Please connect via WhatsApp or Phone", {
        description: "Call 88385 04143 or message directly on WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  };

  const field =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500";

  return (
    <div>
      <div className="border-b border-border bg-muted py-14">
        <SectionHeading
          title="Book a Shoot or Recce"
          subtitle="Reserve shooting dates or schedule an in-person walkthrough at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai."
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-12">
        {/* Contact Info Column */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
              Vadapalani · Chennai
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
              {business.name}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              2-Floor House · Empty Big Entrance · 2 BHK Each Floor
            </p>

            <ul className="mt-6 space-y-4 text-xs text-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <strong className="block text-foreground">Location Address:</strong>
                  <span className="text-muted-foreground">
                    4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai.
                  </span>
                </div>
              </li>

              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <strong className="block text-foreground">Contact for Recce & Booking:</strong>
                  <a href="tel:8838504143" className="font-bold text-amber-500 hover:underline">
                    88385 04143
                  </a>
                  {" · "}
                  <a href="tel:7010833853" className="font-bold text-amber-500 hover:underline">
                    70108 33853
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <strong className="block text-foreground">Email:</strong>
                  <a
                    href={`mailto:${business.email}`}
                    className="font-bold text-amber-500 hover:underline"
                  >
                    {business.email}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Building className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <strong className="block text-foreground">Property Details:</strong>
                  <span className="text-muted-foreground">
                    2 Floors · Empty Big Entrance · 2 BHK Each Floor · Middle Class to Rich Setups
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs font-semibold text-foreground">Instant Availability Check</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Connect directly on WhatsApp for immediate recce scheduling.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] py-2.5 text-xs font-bold text-white shadow transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp: 88385 04143
              </a>
            </div>
          </div>
        </div>

        {/* Booking Form Column */}
        <div className="lg:col-span-7">
          <form
            onSubmit={send}
            className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground">
              Shoot / Recce Booking Request
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Submit your project details to check date availability.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Production Banner / Name
                </label>
                <input
                  type="text"
                  placeholder="Production company or project name"
                  value={form.productionHouse}
                  onChange={(e) => setForm({ ...form, productionHouse: e.target.value })}
                  className={field}
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Project Format *
                </label>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className={field}
                  required
                >
                  <option value="Feature Film">Feature Film</option>
                  <option value="Television Serial">Television Serial</option>
                  <option value="OTT Web Series">OTT Web Series</option>
                  <option value="TV Commercial (Ad Film)">TV Commercial (Ad Film)</option>
                  <option value="Short Film / Pilot">Short Film / Pilot</option>
                  <option value="Other">Other Shoot</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Contact Person *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className={field}
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 88385 04143"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  pattern="[0-9+\s-]{10,15}"
                  title="Please enter a valid 10-digit mobile or WhatsApp phone number"
                  required
                  className={field}
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Preferred Shoot Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={field}
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Shoot Requirement *
                </label>
                <select
                  value={form.requirement}
                  onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                  className={field}
                  required
                >
                  <option value="Full Day Shoot">Full Day Shoot</option>
                  <option value="Half Day Shoot">Half Day Shoot</option>
                  <option value="Multi-Day Schedule">Multi-Day Schedule</option>
                  <option value="Location Recce (Walkthrough)">Location Recce (Walkthrough)</option>
                </select>
              </div>
            </div>

            {/* Spaces Required */}
            <div className="mt-5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Areas Needed
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
                {[
                  "Entire House (2 Floors)",
                  "Ground Floor (2 BHK)",
                  "First Floor (2 BHK)",
                  "Empty Big Entrance",
                  "Living Hall",
                  "Dining Hall",
                  "Kitchen",
                ].map((s) => (
                  <label
                    key={s}
                    className="flex cursor-pointer items-center gap-2 rounded border border-border/70 p-2 text-[11px] hover:bg-muted/40"
                  >
                    <input
                      type="checkbox"
                      checked={form.spacesRequired.includes(s)}
                      onChange={() => toggleSpace(s)}
                      className="accent-amber-500"
                    />
                    <span className="text-foreground">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Message / Notes
              </label>
              <textarea
                rows={3}
                placeholder="Mention scene requirements, recce timing, or specific setup needs..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={field}
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <CalendarCheck className="h-4 w-4" />
                )}
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Interactive Location Map */}
      <div className="mx-auto mt-12 max-w-6xl px-4">
        <div className="overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                Location Map & Street View
              </span>
              <h3 className="font-display text-lg font-bold text-foreground">
                4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai
              </h3>
            </div>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
            >
              <MapPin className="h-3.5 w-3.5 text-amber-500" /> Open in Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-muted shadow-inner">
            <iframe
              src={business.mapsEmbedUrl}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Property Location Map"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
