import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { CookieConsent } from "@/components/site/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
        <span className="rounded bg-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary">
          404 ERROR
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-foreground">Location Not Found</h1>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          The shooting floor, room, or scene view you requested does not exist or has been
          relocated.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 rounded border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            View Spaces
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-amber-400"
          >
            Contact Manager
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong while loading this shooting set. You can try refreshing.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://vadapalanishootinghouse.com/#business",
      name: "Vadapalani Shooting House",
      alternateName: "Vadapalani Movie Shooting House",
      description:
        "2-floor independent movie shooting house at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai. Empty wide entrance, 2 BHK each floor, filming location for Tourist Family and Parimala and Co.",
      url: "https://vadapalanishootinghouse.com",
      telephone: ["+918838504143", "+917010833853"],
      email: "Pranav280806@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4/5 Varghese Avenue, Ashok Nagar",
        addressLocality: "Vadapalani, Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600083",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.0336,
        longitude: 80.2114,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      image: [
        "https://vadapalanishootinghouse.com/property/hero-bg.jpg",
        "https://vadapalanishootinghouse.com/property/exterior-facade.jpeg",
        "https://vadapalanishootinghouse.com/property/living-hall.jpeg",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://vadapalanishootinghouse.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Vadapalani Shooting House located in Chennai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The shooting house is located at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai, within Chennai's central cinema production zone.",
          },
        },
        {
          "@type": "Question",
          name: "Which Tamil films and series were filmed here?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The house was the verified filming location for the Tamil feature film Tourist Family (starring M. Sasikumar and Simran), the Tamil film Parimala & Co, and the JioHotstar web series Brothers and Sisters.",
          },
        },
        {
          "@type": "Question",
          name: "What are the property layout specifications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The property is an independent 2-floor house featuring a wide empty front entrance area for crew vehicles and camera equipment, with 2 BHK floor plans on each floor suitable for middle-class to rich home setups.",
          },
        },
        {
          "@type": "Question",
          name: "How do I schedule an in-person recce walkthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can schedule an in-person recce walkthrough by calling 88385 04143 or 70108 33853, or by messaging our location manager directly on WhatsApp.",
          },
        },
      ],
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#FDF8D6" },
      { name: "format-detection", content: "telephone=no" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "Shooting House" },
      {
        title: "Vadapalani Shooting House Chennai | 2-Floor Movie & Film Shoot Rental",
      },
      {
        name: "description",
        content:
          "Private 2-floor movie shooting house at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai. Empty big entrance, 2 BHK on each floor, filming location for Tourist Family & Parimala and Co. Call 88385 04143 / 70108 33853.",
      },
      {
        name: "keywords",
        content:
          "movie shooting house chennai, vadapalani shooting house, film shooting house rental chennai, shooting house ashok nagar, 2 floor shooting house chennai, tourist family movie house, parimala and co film house, brothers and sisters shooting location, film shooting sets chennai, shooting house for rent in chennai",
      },
      { name: "author", content: "Vadapalani Shooting House" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Chennai, Vadapalani, Ashok Nagar" },
      { name: "geo.position", content: "13.0336;80.2114" },
      { name: "ICBM", content: "13.0336, 80.2114" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vadapalanishootinghouse.com/" },
      { property: "og:site_name", content: "Vadapalani Shooting House" },
      { property: "og:locale", content: "en_IN" },
      {
        property: "og:title",
        content: "Vadapalani Shooting House Chennai | Movie & Film Shoot Rental",
      },
      {
        property: "og:description",
        content:
          "2-floor independent movie shooting house in Vadapalani / Ashok Nagar, Chennai. Empty wide entrance, 2 BHK per floor. Verified location for Tourist Family, Parimala & Co, Brothers and Sisters.",
      },
      { property: "og:image", content: "/property/hero-bg.jpg" },
      { property: "og:image:alt", content: "Vadapalani Shooting House Chennai" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Vadapalani Shooting House Chennai | Film Shoot House Rental",
      },
      {
        name: "twitter:description",
        content:
          "Private 2-floor film shooting house in Vadapalani / Ashok Nagar, Chennai. Empty big entrance, 2 BHK each floor. Call 88385 04143.",
      },
      { name: "twitter:image", content: "/property/hero-bg.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(rootJsonLd),
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://vadapalanishootinghouse.com/",
      },
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎥</text></svg>",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://maps.google.com" },
      { rel: "dns-prefetch", href: "https://www.google.com" },
      { rel: "dns-prefetch", href: "https://img.youtube.com" },
      { rel: "dns-prefetch", href: "https://www.youtube.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.remove('dark');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pb-20 md:pb-0">
            <Outlet />
          </main>
          <Footer />
          <MobileCallBar />
          <FloatingWhatsApp />
          <CookieConsent />
          <Toaster position="top-center" />
          <SpeedInsights />
          <Analytics />
        </div>
      </I18nProvider>
    </QueryClientProvider>
  );
}
