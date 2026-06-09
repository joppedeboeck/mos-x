import SiteNav             from "@/components/site-nav";
import SiteHero            from "@/components/site-hero";
import SiteTrustBar        from "@/components/site-trustbar";
import SiteResultatenGrid  from "@/components/site-resultaten-grid";
import SiteServices        from "@/components/site-services";
import SitePricing         from "@/components/site-pricing";
import SiteYannick         from "@/components/site-yannick";
import SiteWerkgebied      from "@/components/site-werkgebied";
import SiteReviews         from "@/components/site-reviews";
import SiteContact         from "@/components/site-contact";
import SiteFooter          from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      {/* Announcement bar + white navbar */}
      <SiteNav />

      <main>
        {/* 1 · Hero */}
        <SiteHero />

        {/* 2 · Trust bar (12 reviews, 100+ daken, VTM) */}
        <SiteTrustBar />

        {/* 3 · Richtprijscalculator */}
        <SitePricing />

        {/* 4 · Klantbeoordelingen */}
        <SiteReviews />

        {/* 5 · Diensten */}
        <SiteServices />

        {/* 6 · Realisaties / Voor & Na */}
        <SiteResultatenGrid />

        {/* 7 · Wie is Yannick? */}
        <SiteYannick />

        {/* 8 · Werkgebied */}
        <SiteWerkgebied />

        {/* 9 · CTA kaart */}
        <SiteContact />
      </main>

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
