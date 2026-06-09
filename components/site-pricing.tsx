export default function SitePricing() {
  return (
    <section className="site-pad" style={{ background: "#F8F8F8" }}>
      <div className="site-wrap">
        <div className="mx-auto" style={{ maxWidth: "900px" }}>

          {/* Header */}
          <div className="mb-10">
            <p
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#5A9E2F",
                marginBottom: "16px",
              }}
            >
              Richtprijscalculator
            </p>
            <h2
              className="font-bold mb-3"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.02em",
                color: "#111111",
              }}
            >
              Wat kost dakontmossing?
            </h2>
            <p style={{ color: "#555555", fontSize: "16px" }}>
              Ontvang binnen 1 minuut een eerste richtprijs voor uw dak.
            </p>
          </div>

          {/* Calculator iframe */}
          <iframe
            src="https://v0-dak-calculator.vercel.app/"
            width="100%"
            height="700px"
            style={{
              border: "none",
              borderRadius: "16px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              display: "block",
            }}
            title="Dakprijs calculator"
          />

        </div>
      </div>
    </section>
  );
}
