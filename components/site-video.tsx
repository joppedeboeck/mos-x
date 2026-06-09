"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function SiteVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section style={{ background: "#1A1A1A", padding: "80px 0" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="font-bold text-white leading-tight mb-3"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Bekijk Yannick Aan Het Werk
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px" }}>
            Persoonlijk. Professioneel. Eerlijk.
          </p>
        </div>

        {/* Video container */}
        <div
          className="relative mx-auto overflow-hidden"
          style={{
            maxWidth: "860px",
            borderRadius: "16px",
            aspectRatio: "16/9",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
          onClick={() => setPlaying(true)}
        >
          {!playing ? (
            <>
              {/* Thumbnail */}
              <video
                src="/videos/yannick-hero.mp4"
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: "rgba(26,26,26,0.45)" }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "#9BCB6C",
                    boxShadow: "0 0 0 12px rgba(155,203,108,0.20)",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                  }}
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
                <p
                  className="text-white font-semibold mt-4 text-sm"
                  style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "0.04em" }}
                >
                  Bekijk de video
                </p>
              </div>
            </>
          ) : (
            <video
              src="/videos/yannick-hero.mp4"
              autoPlay
              controls
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          )}
        </div>

        {/* VTM badge */}
        <div className="flex justify-center mt-8">
          <div
            className="inline-flex items-center gap-3"
            style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: "10px",
              padding: "10px 16px",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <div
              className="flex items-center justify-center font-black text-white shrink-0"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "0.875rem",
                background: "#E8000D",
                borderRadius: "5px",
                padding: "3px 7px",
              }}
            >
              vtm
            </div>
            <div>
              <p className="text-[10px] leading-none mb-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>
                Bekend van
              </p>
              <p
                className="text-[0.8125rem] font-semibold leading-none text-white"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                VTM Lifestyle &amp; Wonen
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
