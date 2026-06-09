import SiteNav             from "@/components/site-nav";
import SiteHero            from "@/components/site-hero";
import SiteTrustBar        from "@/components/site-trustbar";
import SiteResultatenGrid  from "@/components/site-resultaten-grid";
import SiteServices        from "@/components/site-services";
import SitePricing         from "@/components/site-pricing";
import SiteYannick         from "@/components/site-yannick";
import SiteWerkgebied      from "@/components/site-werkgebied";
import SiteProcess         from "@/components/site-process";
import SiteReviews         from "@/components/site-reviews";
import SiteContact         from "@/components/site-contact";
import SiteFooter          from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      {/* Announcement bar + white navbar */}
      <SiteNav />

      <main>
        {/* 1 · Hero — two columns, video bg */}
        <SiteHero />

        {/* 2 · Scrolling trust ticker */}
        <SiteTrustBar />

        {/* 3 · Voor & Na results grid */}
        <SiteResultatenGrid />

        {/* 4 · Diensten */}
        <SiteServices />

        {/* 6 · Prijzen */}
        <SitePricing />

        {/* 7 · Over Yannick */}
        <SiteYannick />

        {/* 8 · Werkgebied — 4 provinces */}
        <SiteWerkgebied />

        {/* 9 · Hoe het werkt */}
        <SiteProcess />

        {/* 10 · Reviews */}
        <SiteReviews />

        {/* 11 · Contact + form */}
        <SiteContact />
      </main>

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
