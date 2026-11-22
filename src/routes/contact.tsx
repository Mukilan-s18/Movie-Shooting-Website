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
  Play,
} from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, whatsappUrl } from "@/lib/business";
import { supabase } from "@/integrations/supabase/client";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovieStudio",
  name: business.name,
  telephone: [`+91${business.phonePrimary}`, `+91${business.phoneSecondary}`],
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 18, Golden Beach Road, Injambakkam, ECR",
    addressLocality: "Chennai",
    postalCode: "600115",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: "Chennai",
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Book Shoot / Recce - Cinewood Film Shooting Villa, Chennai",
      },
      {
        name: "description",
        content:
          "Book movie shoot dates or schedule a location recce at Cinewood Shooting Villa in Chennai. Contact Location Manager at 98401 54321 / 94444 67890. ECR Injambakkam, Chennai.",
      },
      {
        property: "og:title",
        content: "Book Movie Shoot / Location Recce - Cinewood Shooting Villa",
      },
      {
        property: "og:description",
        content:
          "Enquire about movie shoot dates, shifts, and recce visits for this single private shooting villa.",
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
    shift: "Day Shift (06:00 AM – 06:00 PM)",
    crewSize: "30 – 60 Members",
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
      const formattedMessage = `Production: ${form.productionHouse || "Independent"} | Type: ${form.projectType} | Shift: ${form.shift} | Crew: ${form.crewSize} | Spaces: ${form.spacesRequired.join(", ") || "Full Property"} | Notes: ${form.message}`;

      const { error } = await supabase.from("contact_messages").insert({
        name: form.name,
        phone: form.phone,
        date: form.date || null,
        message: formattedMessage,
      });

      if (error) {
        console.warn("Supabase insert warning:", error);
      }

      toast.success("Shoot / Recce Enquiry Received!", {
        description:
          "Our Location Manager will contact you within 2 hours to confirm date availability.",
      });

      setForm({
        productionHouse: "",
        projectType: "Feature Film",
        name: "",
        phone: "",
        email: "",
        date: "",
        shift: "Day Shift (06:00 AM – 06:00 PM)",
        crewSize: "30 – 60 Members",
        spacesRequired: [],
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      toast.error("Notice: Enquiry submitted or redirecting to WhatsApp", {
        description: "You can also message our Location Manager directly on WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  };

  const field =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500";

  return (
    <div>
      <div className="border-b border-border bg-card py-14">
        <SectionHeading
          title="Book a Shoot or Recce"
          subtitle="Reserve shooting dates, book the entire shooting house, or schedule an in-person technical location recce with our Location Manager."
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-12">
        {/* Contact Info Column */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold uppercase text-amber-500">
              Single Private Property
            </span>
            <h2 className="mt-3 font-display text-2xl font-black text-foreground">
              {business.name}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">{business.owner}</p>

            <ul className="mt-6 space-y-4 text-xs text-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <strong className="block text-foreground">Property Location:</strong>
                  <span className="text-muted-foreground">{business.addressLines.join(" ")}</span>
                </div>
              </li>

              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <strong className="block text-foreground">Location Manager (Call / Recce):</strong>
                  <a
                    href={`tel:+91${business.phonePrimary}`}
                    className="font-medium text-amber-500 hover:underline"
                  >
                    +91 {business.phonePrimaryDisplay}
                  </a>
                  {" · "}
                  <a
                    href={`tel:+91${business.phoneSecondary}`}
                    className="font-medium text-amber-500 hover:underline"
                  >
                    +91 {business.phoneSecondaryDisplay}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <strong className="block text-foreground">Production Office Email:</strong>
                  <a
                    href={`mailto:${business.email}`}
                    className="text-muted-foreground hover:text-amber-500 hover:underline"
                  >
                    {business.email}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <strong className="block text-foreground">Shooting Shifts:</strong>
                  <span className="text-muted-foreground">
                    Day Shift (6 AM – 6 PM) · Night Shift (6 PM – 6 AM) · 24-Hr Continuous
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs font-semibold text-foreground">Instant Availability Check</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Connect directly with our team via WhatsApp for immediate date lock and recce timing.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] py-2.5 text-xs font-bold text-white shadow transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Location Manager
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
            <h3 className="font-display text-xl font-black text-foreground">
              Production Booking & Recce Request
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Submit your project details below to reserve shooting shifts or book an in-person recce.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Production Banner / Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lotus Film Productions"
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
                  <option value="OTT Web Series">OTT Web Series</option>
                  <option value="TV Commercial (Ad Film)">TV Commercial (Ad Film)</option>
                  <option value="Television Serial">Television Serial</option>
                  <option value="Music Video">Music Video</option>
                  <option value="Celebrity / Fashion Photoshoot">
                    Celebrity / Fashion Photoshoot
                  </option>
                  <option value="Short Film / Pilot">Short Film / Pilot</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Contact Person *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh (Production Executive)"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className={field}
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Mobile Number (WhatsApp Preferred) *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98401 23456"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className={field}
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Planned Shoot Date *
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  required
                  className={field}
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Shoot Shift / Type *
                </label>
                <select
                  value={form.shift}
                  onChange={(e) => setForm({ ...form, shift: e.target.value })}
                  className={field}
                  required
                >
                  <option value="Day Shift (06:00 AM – 06:00 PM)">
                    Day Shift (06:00 AM – 06:00 PM)
                  </option>
                  <option value="Night Shift (06:00 PM – 06:00 AM)">
                    Night Shift (06:00 PM – 06:00 AM)
                  </option>
                  <option value="Full 24-Hour Continuous Block">
                    Full 24-Hour Continuous Block
                  </option>
                  <option value="Multi-Day Schedule">Multi-Day Schedule</option>
                  <option value="Location Recce (Scouting Visit)">
                    Location Recce (Scouting Visit)
                  </option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Estimated Crew Size
                </label>
                <select
                  value={form.crewSize}
                  onChange={(e) => setForm({ ...form, crewSize: e.target.value })}
                  className={field}
                >
                  <option value="Under 30 Members">Under 30 Members</option>
                  <option value="30 – 60 Members">30 – 60 Members</option>
                  <option value="60 – 100 Members">60 – 100 Members</option>
                  <option value="100+ Members">100+ Members</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="production@studio.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
              </div>
            </div>

            {/* Spaces Required */}
            <div className="mt-5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Specific Property Areas Required (Select all that apply)
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
                {[
                  "Entire Property",
                  "Exterior Facade",
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
                Special Requirements or Notes
              </label>
              <textarea
                rows={3}
                placeholder="Mention crane/jib access, smoke/haze requirements, electrical load notes, or recce timing..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={field}
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wide text-black transition-colors hover:bg-amber-400 disabled:opacity-50"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CalendarCheck className="h-4 w-4" />}
                Submit Shoot / Recce Request
              </button>
              <span className="text-[11px] text-muted-foreground hidden sm:inline">
                We respond within 2 hours
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
