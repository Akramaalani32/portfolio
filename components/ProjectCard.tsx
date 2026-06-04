"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { type Project } from "@/lib/data";

// Local fallback color tokens (used previously from lib/data). Adjust as needed.
const C = {
  s2: "#0f172033",
  border: "#1f2937",
  muted: "#9ca3af",
  s1: "#0b1220",
  text: "#e6eef8",
  accentLo: "#0369a130",
  accent: "#0369a1",
  bg: "#071126",
};

/* ── Fake UI mockup shown when no screenshot ── */
function MockupPlaceholder({ ac }: { ac: string }) {
  return (
    <div
      style={{
        borderRadius: 12,
        overflow:     "hidden",
        background:   C.s2,
        border:       `1px solid ${C.border}`,
        height:       168,
        position:     "relative",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          padding:       "10px 14px",
          borderBottom:  `1px solid ${C.border}`,
          display:       "flex",
          alignItems:    "center",
          gap:           8,
        }}
      >
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
          <div
            key={c}
            style={{ width: 10, height: 10, borderRadius: "50%", background: c }}
          />
        ))}
        <div
          style={{
            flex:         1,
            height:       18,
            background:   C.border,
            borderRadius: 4,
            marginLeft:   8,
          }}
        />
      </div>

      {/* Content skeleton */}
      <div style={{ padding: "14px 16px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <div
            style={{
              width:        "30%",
              height:       28,
              background:   `${ac}22`,
              borderRadius: 6,
            }}
          />
          <div style={{ width: "20%", height: 28, background: C.border, borderRadius: 6 }} />
          <div style={{ flex: 1 }} />
          <div style={{ width: 28, height: 28, background: `${ac}30`, borderRadius: 6 }} />
        </div>
        {[80, 60, 70, 45].map((w, i) => (
          <div
            key={i}
            style={{
              height:       8,
              width:        `${w}%`,
              background:   i === 0 ? `${ac}25` : C.border,
              borderRadius: 4,
              marginBottom: 7,
            }}
          />
        ))}
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          {[35, 25, 40].map((w, i) => (
            <div
              key={i}
              style={{
                height:       20,
                width:        `${w}%`,
                background:   i === 0 ? `${ac}20` : C.border,
                borderRadius: 4,
              }}
            />
          ))}
        </div>
      </div>

      <span
        style={{
          position:   "absolute",
          bottom:     8,
          right:      10,
          fontFamily: "var(--font-mono), monospace",
          fontSize:   "0.65rem",
          color:      C.muted,
          opacity:    0.5,
        }}
      >
        aperçu UI
      </span>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  idx:     number;
}

export default function ProjectCard({ project: p, idx }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={idx * 0.08}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        style={{
          background:   C.s1,
          border:       `1px solid ${C.border}`,
          borderRadius: 20,
          overflow:     "hidden",
        }}
      >
        {/* Accent bar */}
        <div style={{ height: 3, background: p.accentColor }} />

        <div style={{ padding: 28 }}>
          {/* Header row */}
          <div
            style={{
              display:        "flex",
              justifyContent: "space-between",
              alignItems:     "flex-start",
              marginBottom:   16,
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize:   "0.68rem",
                  color:      C.muted,
                }}
              >
                {p.num}
              </span>
              <h3
                style={{
                  fontFamily:    "var(--font-syne), sans-serif",
                  fontWeight:    700,
                  fontSize:      "1.6rem",
                  color:         C.text,
                  lineHeight:    1.05,
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize:   "0.78rem",
                  color:      p.accentColor,
                  marginTop:  2,
                }}
              >
                {p.tagline}
              </p>
            </div>

            <div
              style={{
                display:       "flex",
                flexDirection: "column",
                alignItems:    "flex-end",
                gap:           6,
                flexShrink:    0,
                marginLeft:    12,
              }}
            >
              <span
                style={{
                  background:   `${p.statusColor}15`,
                  color:        p.statusColor,
                  fontSize:     "0.68rem",
                  fontFamily:   "var(--font-outfit), sans-serif",
                  fontWeight:   600,
                  padding:      "4px 10px",
                  borderRadius: 999,
                  border:       `1px solid ${p.statusColor}35`,
                }}
              >
                {p.status}
              </span>
              <span
                style={{
                  fontSize:   "0.68rem",
                  color:      C.muted,
                  fontFamily: "var(--font-outfit), sans-serif",
                }}
              >
                {p.role}
              </span>
            </div>
          </div>

          {/* Screenshot or mockup */}
          <div style={{ marginBottom: 20 }}>
            {p.screenshot ? (
              <div
                style={{
                  borderRadius: 12,
                  overflow:     "hidden",
                  border:       `1px solid ${C.border}`,
                  height:       168,
                  position:     "relative",
                }}
              >
                <Image
                  src={p.screenshot}
                  alt={`Aperçu ${p.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <MockupPlaceholder ac={p.accentColor ?? "#999"} />
            )}
          </div>

          {/* Description */}
          <p
            style={{
              color:      C.muted,
              fontSize:   "0.9rem",
              fontFamily: "var(--font-outfit), sans-serif",
              lineHeight: 1.75,
              marginBottom: 16,
            }}
          >
            {p.description}
          </p>

          {/* Metrics */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            {[p.lines, p.endpoints].map((m) => (
              <span
                key={m}
                style={{
                  background:   C.accentLo,
                  border:       `1px solid ${C.accent}30`,
                  color:        C.accent,
                  fontSize:     "0.7rem",
                  fontFamily:   "var(--font-mono), monospace",
                  padding:      "3px 10px",
                  borderRadius: 4,
                }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {p.stack.map((s) => (
              <span
                key={s}
                style={{
                  background:   C.bg,
                  border:       `1px solid ${C.border}`,
                  color:        C.muted,
                  fontSize:     "0.7rem",
                  fontFamily:   "var(--font-mono), monospace",
                  padding:      "3px 10px",
                  borderRadius: 4,
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Toggle challenges */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border:     "none",
              cursor:     "pointer",
              color:      p.accentColor,
              fontSize:   "0.82rem",
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              display:    "flex",
              alignItems: "center",
              gap:        6,
              padding:    0,
            }}
          >
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ↓
            </motion.span>
            {open ? "Masquer" : "Voir"} les défis techniques
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div
                  style={{
                    marginTop:     16,
                    display:       "flex",
                    flexDirection: "column",
                    gap:           10,
                  }}
                >
                  {p.challenges.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        background:  C.bg,
                        border:      `1px solid ${C.border}`,
                        borderLeft:  `3px solid ${p.accentColor}`,
                        borderRadius: 8,
                        padding:     "12px 16px",
                      }}
                    >
                      <div
                        style={{
                          color:      C.text,
                          fontFamily: "var(--font-outfit), sans-serif",
                          fontWeight: 600,
                          fontSize:   "0.85rem",
                          marginBottom: 4,
                        }}
                      >
                        ⚡ {c.q}
                      </div>
                      <div
                        style={{
                          color:      C.muted,
                          fontFamily: "var(--font-outfit), sans-serif",
                          fontSize:   "0.8rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {c.a}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.article>
    </FadeIn>
  );
}
