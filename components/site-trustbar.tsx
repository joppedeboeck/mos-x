const stats = [
  { number: "12",   label: "5 sterren reviews" },
  { number: "100+", label: "daken gereinigd" },
  { number: "VTM",  label: "Lifestyle & Wonen" },
];

export default function SiteTrustBar() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        width: "100%",
        padding: "48px 0",
        borderTop: "1px solid #EEEEEE",
        borderBottom: "1px solid #EEEEEE",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0",
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && (
              <div
                style={{
                  width: "1px",
                  height: "40px",
                  background: "#DDDDDD",
                  margin: "0 80px",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#8DC63F",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "14px",
                  color: "#888888",
                  marginTop: "6px",
                }}
              >
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
