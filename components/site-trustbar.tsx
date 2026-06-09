const items = [
  { icon: "⭐", text: "5.0 Google Reviews · 12 beoordelingen" },
  { icon: "✓", text: "Gezien op VTM Lifestyle & Wonen" },
  { icon: "✓", text: "200+ daken gereinigd" },
  { icon: "✓", text: "Volledig verzekerd" },
  { icon: "✓", text: "Gratis drone-inspectie" },
  { icon: "✓", text: "Actief in Antwerpen & Vlaams-Brabant" },
  { icon: "✓", text: "Geen verkooppraatjes" },
];

function Item({ icon, text }: { icon: string; text: string }) {
  return (
    <span className="flex items-center gap-2 shrink-0 whitespace-nowrap" style={{ padding: "0 28px" }}>
      <span
        style={{
          color: "#9BCB6C",
          fontSize: "13px",
          fontWeight: 700,
        }}
      >
        {icon}
      </span>
      <span style={{ color: "#545454", fontSize: "14px" }}>{text}</span>
      <span style={{ color: "#E5E7EB", marginLeft: "28px", fontSize: "16px" }}>·</span>
    </span>
  );
}

export default function SiteTrustBar() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E5E7EB",
        borderBottom: "1px solid #E5E7EB",
        overflow: "hidden",
        padding: "14px 0",
      }}
    >
      {/* Double the items for seamless loop */}
      <div className="marquee-track flex">
        {[...items, ...items].map((item, i) => (
          <Item key={i} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
}
