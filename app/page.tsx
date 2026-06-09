import SiteNav             from "@/components/site-nav";
import SiteHero            from "@/components/site-hero";
import SiteTrustBar        from "@/components/site-trustbar";
import SiteResultatenGrid  from "@/components/site-resultaten-grid";
import SiteVideo           from "@/components/site-video";
import SiteServices        from "@/components/site-services";
import SitePricing         from "@/components/site-pricing";
import SiteYannick         from "@/components/site-yannick";
import SiteProcess         from "@/components/site-process";
import SiteWerkgebied      from "@/components/site-werkgebied";
import SiteReviews         from "@/components/site-reviews";
import SiteContact         from "@/components/site-contact";
import SiteFooter          from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      {/* 1 · Announcement bar + white navbar */}
      <SiteNav />

      <main>
        {/* 2 · Hero — two columns, video background */}
        <SiteHero />

        {/* 3 · Scrolling trust bar */}
        <SiteTrustBar />

        {/* 4 · Voor & Na results grid */}
        <SiteResultatenGrid />

        {/* 5 · Video section */}
        <SiteVideo />

        {/* 6 · Services — 3 cards */}
        <SiteServices />

        {/* 7 · Pricing — 3 cards */}
        <SitePricing />

        {/* 8 · Over Yannick */}
        <SiteYannick />

        {/* 9 · Hoe het werkt — 5 steps */}
        <SiteProcess />

        {/* 10 · Werkgebied */}
        <SiteWerkgebied />

        {/* 11 · Reviews carousel */}
        <SiteReviews />

        {/* 12 · Contact + form (dark) */}
        <SiteContact />
      </main>

      {/* 13 · Footer (dark) */}
      <SiteFooter />
    </>
  );
}
