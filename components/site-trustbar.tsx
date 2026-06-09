const items = [
  { icon: "⭐", text: "5 sterren op Google Reviews" },
  { icon: "✓", text: "100+ daken gereinigd" },
  { icon: "📺", text: "Bekend van VTM Lifestyle & Wonen" },
];

export default function SiteTrustBar() {
  return (
    <section
      style={{
        background: "#1A1A1A",
        width: "100%",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0",
        }}
      >
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && (
              <div
                style={{
                  width: "1px",
                  height: "20px",
                  background: "#333333",
                  margin: "0 48px",
                  flexShrink: 0,
                }}
              />
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "14px", lineHeight: 1 }}>{item.icon}</span>
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
