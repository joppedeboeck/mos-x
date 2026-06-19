"use client";

import { useEffect } from "react";

const GOOGLE_REVIEW_URL = "https://www.google.com/search?sca_esv=bcc915fd4b92abab&rlz=1C1GCEU_enBE1139BE1139&hl=nl-BE&sxsrf=ANbL-n6TrSUrDpAkVOrNUQ51U5GNZs9b_Q:1781020093012&q=MOS-X+%7C+Dakontmossing+%26+Coating+Reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORc7vib1r0gQO2ABjRXpl_uRZy99-xBVdTGpP89RMUA3yzcvCK6A2AazedCdjGkX1gn8bkQ%3D&uds=ALYpb_mOSBfVE_qjsUIUDwhXk-cv8R5BmJbdPhES1TRqg_vpjJyijAOWQNUWx-ymHj1rypkaCI5vDZLjKLW1ObrTyqmMebN8NP7CqX96tO1wgBatLBTT6ccEki20RIqT8UXa_cZv3U6K&sa=X&ved=2ahUKEwiuju3vwPqUAxVNRaQEHUolF-wQ3PALegQIMBAF&biw=1920&bih=911&dpr=1";

const btnStyle: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid #9BCB6C",
  color: "#9BCB6C",
  background: "#FFFFFF",
  borderRadius: "8px",
  padding: "12px 28px",
  fontSize: "14px",
  fontWeight: 600,
  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
  textDecoration: "none",
  cursor: "pointer",
  transition: "background 200ms ease, color 200ms ease",
};

function GoogleBtn({ text, url }: { text: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={btnStyle}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#9BCB6C";
        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#FFFFFF";
        (e.currentTarget as HTMLAnchorElement).style.color = "#9BCB6C";
      }}
    >
      {text}
    </a>
  );
}

export default function SiteReviews() {
  useEffect(() => {
    if (!document.querySelector('script[src*="trustindex"]')) {
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://cdn.trustindex.io/loader.js?4c132e774844695c6c2696a6bdf";
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section className="site-pad" id="reviews" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(155,203,108,0.07) 0%, transparent 65%), #F7F8F6" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="site-eyebrow mb-4">Klantbeoordelingen</p>
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              letterSpacing: "-0.028em",
              color: "#1A1A1A",
            }}
          >
            Wat onze klanten zeggen.
          </h2>
          <GoogleBtn text="Review ons op Google" url={GOOGLE_REVIEW_URL} />
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div data-widget-id="4c132e774844695c6c2696a6bdf"></div>
        </div>

      </div>
    </section>
  );
}
