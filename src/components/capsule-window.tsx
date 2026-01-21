"use client"

import type React from "react"

interface CapsuleProps {
  baseColor: string
  size: number
  rotation: number
  wireframeType: number
  orientation: "up" | "down" | "left" | "right"
  style?: React.CSSProperties
}

const baseColors: Record<string, { base: string; light: string; dark: string }> = {
  pink: { base: "#FF99B3", light: "#FFB5C8", dark: "#FF7A99" },
  coral: { base: "#FFC2B8", light: "#FFD4CC", dark: "#FFA594" },
  peach: { base: "#FFB385", light: "#FFC7A3", dark: "#FF9C66" },
  yellow: { base: "#FFF099", light: "#FFF5B8", dark: "#FFEB70" },
  mint: { base: "#85FFA3", light: "#A3FFBA", dark: "#66FF8A" },
  aqua: { base: "#85E0FF", light: "#A3EBFF", dark: "#66D4FF" },
  lavender: { base: "#C2C2FF", light: "#D6D6FF", dark: "#A3A3FF" },
  violet: { base: "#C285FF", light: "#D6A3FF", dark: "#A366FF" },
}

function Wireframe({ type, orientation }: { type: number; orientation: string }) {
  // Rotate wireframe based on capsule orientation
  const rotationMap: Record<string, string> = {
    up: "rotate(0deg)",
    down: "rotate(180deg)",
    left: "rotate(-90deg)",
    right: "rotate(90deg)",
  }
  const transform = rotationMap[orientation] || "none"

  // Muted grays for "inside plastic" look
  const dark = "#a0a0a0"
  const med = "#c0c0c0"
  const light = "#d8d8d8"
  const textColor = "#909090"

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform,
        opacity: 0.4,
        filter: "blur(0.3px)",
      }}
    >
      {type === 0 && (
        // Detailed website with nav, hero, cards + "Website" text
        <div
          style={{
            width: "65%",
            height: "75%",
            background: light,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {/* Nav bar */}
          <div
            style={{
              height: "12%",
              background: dark,
              display: "flex",
              alignItems: "center",
              padding: "0 6%",
              gap: "4%",
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: 1, background: med }} />
            <div style={{ width: "15%", height: 3, background: med, borderRadius: 1 }} />
            <div style={{ width: "10%", height: 3, background: med, borderRadius: 1, marginLeft: "auto" }} />
            <div style={{ width: "10%", height: 3, background: med, borderRadius: 1 }} />
          </div>
          {/* Hero with text */}
          <div
            style={{
              height: "35%",
              background: med,
              margin: "4%",
              marginBottom: "2%",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <div
              style={{
                fontSize: 8,
                fontWeight: 600,
                color: textColor,
                letterSpacing: 0.3,
                fontFamily: "sans-serif",
              }}
            >
              Website
            </div>
            <div style={{ width: "50%", height: 2, background: dark, borderRadius: 1 }} />
          </div>
          {/* Cards row */}
          <div style={{ display: "flex", gap: "2%", padding: "0 4%" }}>
            <div style={{ flex: 1, height: 18, background: "#e8e8e8", borderRadius: 2, border: `1px solid ${med}` }} />
            <div style={{ flex: 1, height: 18, background: "#e8e8e8", borderRadius: 2, border: `1px solid ${med}` }} />
            <div style={{ flex: 1, height: 18, background: "#e8e8e8", borderRadius: 2, border: `1px solid ${med}` }} />
          </div>
        </div>
      )}
      {type === 1 && (
        // E-commerce product page + "Site" text
        <div
          style={{
            width: "65%",
            height: "75%",
            background: light,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ height: "10%", background: dark }} />
          <div style={{ display: "flex", height: "70%", padding: "3%" }}>
            <div
              style={{
                width: "55%",
                background: med,
                borderRadius: 2,
                marginRight: "3%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: textColor,
                  letterSpacing: 0.3,
                  fontFamily: "sans-serif",
                }}
              >
                Site
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ height: 5, width: "80%", background: dark, borderRadius: 1 }} />
              <div style={{ height: 3, width: "50%", background: med, borderRadius: 1 }} />
              <div style={{ height: 3, width: "100%", background: "#e0e0e0", borderRadius: 1 }} />
              <div style={{ height: 3, width: "90%", background: "#e0e0e0", borderRadius: 1 }} />
              <div style={{ height: 8, width: "60%", background: dark, borderRadius: 2, marginTop: "auto" }} />
            </div>
          </div>
        </div>
      )}
      {type === 2 && (
        // Dashboard with sidebar + "Brand" text
        <div
          style={{
            width: "68%",
            height: "75%",
            background: light,
            borderRadius: 2,
            overflow: "hidden",
            display: "flex",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {/* Sidebar */}
          <div
            style={{ width: "22%", background: dark, padding: "4%", display: "flex", flexDirection: "column", gap: 4 }}
          >
            <div style={{ width: "70%", height: 4, background: med, borderRadius: 1 }} />
            <div style={{ width: "100%", height: 3, background: med, borderRadius: 1, marginTop: 4 }} />
            <div style={{ width: "100%", height: 3, background: med, borderRadius: 1 }} />
            <div style={{ width: "100%", height: 3, background: med, borderRadius: 1 }} />
          </div>
          {/* Main content */}
          <div style={{ flex: 1, padding: "4%", display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                fontSize: 7,
                fontWeight: 600,
                color: textColor,
                letterSpacing: 0.3,
                fontFamily: "sans-serif",
              }}
            >
              Brand
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3, marginTop: 2 }}>
              <div style={{ height: 20, background: "#e0e0e0", borderRadius: 2, border: `1px solid ${med}` }} />
              <div style={{ height: 20, background: "#e0e0e0", borderRadius: 2, border: `1px solid ${med}` }} />
              <div style={{ height: 20, background: "#e0e0e0", borderRadius: 2, border: `1px solid ${med}` }} />
            </div>
          </div>
        </div>
      )}
      {type === 3 && (
        // Blog/article page + "Web" text
        <div
          style={{
            width: "60%",
            height: "75%",
            background: light,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{ height: "10%", background: dark, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div
              style={{
                fontSize: 7,
                fontWeight: 600,
                color: textColor,
                letterSpacing: 0.3,
                fontFamily: "sans-serif",
              }}
            >
              Web
            </div>
          </div>
          <div style={{ padding: "6%", display: "flex", flexDirection: "column", gap: 3 }}>
            <div style={{ height: 6, width: "90%", background: dark, borderRadius: 1 }} />
            <div style={{ height: 3, width: "40%", background: med, borderRadius: 1 }} />
            <div style={{ height: 20, width: "100%", background: med, borderRadius: 2, marginTop: 2 }} />
            <div style={{ height: 3, width: "100%", background: "#e0e0e0", borderRadius: 1 }} />
            <div style={{ height: 3, width: "100%", background: "#e0e0e0", borderRadius: 1 }} />
            <div style={{ height: 3, width: "70%", background: "#e0e0e0", borderRadius: 1 }} />
          </div>
        </div>
      )}
      {type === 4 && (
        // Portfolio/gallery + "Business" text
        <div
          style={{
            width: "68%",
            height: "75%",
            background: light,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              height: "12%",
              background: dark,
              display: "flex",
              alignItems: "center",
              padding: "0 5%",
              gap: "3%",
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: med }} />
            <div
              style={{
                fontSize: 6,
                fontWeight: 600,
                color: textColor,
                letterSpacing: 0.3,
                fontFamily: "sans-serif",
              }}
            >
              Business
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
              <div style={{ width: 12, height: 3, background: med, borderRadius: 1 }} />
              <div style={{ width: 12, height: 3, background: med, borderRadius: 1 }} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, padding: "5%" }}>
            <div style={{ aspectRatio: "1", background: med, borderRadius: 2 }} />
            <div style={{ aspectRatio: "1", background: med, borderRadius: 2 }} />
            <div style={{ aspectRatio: "1", background: med, borderRadius: 2 }} />
            <div style={{ aspectRatio: "1", background: med, borderRadius: 2 }} />
          </div>
        </div>
      )}
    </div>
  )
}

function Capsule({ baseColor, size, rotation, wireframeType, orientation, style }: CapsuleProps) {
  const colors = baseColors[baseColor] || baseColors.red

  // For left/right orientations, we rotate the whole capsule 90 degrees
  const isHorizontal = orientation === "left" || orientation === "right"
  const baseRotation = isHorizontal ? 90 : 0
  const isFlipped = orientation === "down" || orientation === "right"

  const domeHeight = size * 0.65
  const baseHeight = size * 0.35

  const clearDome = (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        height: domeHeight,
        borderRadius: isFlipped ? `0 0 ${size / 2}px ${size / 2}px` : `${size / 2}px ${size / 2}px 0 0`,
        top: isFlipped ? undefined : 0,
        bottom: isFlipped ? 0 : undefined,
        background: `
          linear-gradient(
            ${isFlipped ? "0deg" : "180deg"},
            rgba(255,255,255,0.92) 0%,
            rgba(248,250,252,0.85) 20%,
            rgba(240,244,248,0.78) 50%,
            rgba(230,236,244,0.72) 100%
          )
        `,
        boxShadow: `
          inset 0 0 20px rgba(255,255,255,0.7),
          inset 0 ${isFlipped ? "6px" : "-6px"} 15px rgba(200,210,225,0.15),
          0 1px 3px rgba(0,0,0,0.05)
        `,
        overflow: "hidden",
      }}
    >
      {/* Main highlight reflection */}
      <div
        style={{
          position: "absolute",
          top: isFlipped ? undefined : "10%",
          bottom: isFlipped ? "10%" : undefined,
          left: "18%",
          width: "35%",
          height: "45%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Small bright spot */}
      <div
        style={{
          position: "absolute",
          top: isFlipped ? undefined : "15%",
          bottom: isFlipped ? "15%" : undefined,
          left: "25%",
          width: "12%",
          height: "15%",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "50%",
          filter: "blur(1.5px)",
        }}
      />
      {/* Subtle edge highlight */}
      <div
        style={{
          position: "absolute",
          top: isFlipped ? undefined : 0,
          bottom: isFlipped ? 0 : undefined,
          left: 0,
          right: 0,
          height: "50%",
          borderRadius: isFlipped ? `0 0 ${size / 2}px ${size / 2}px` : `${size / 2}px ${size / 2}px 0 0`,
          background: `linear-gradient(${isFlipped ? "0deg" : "180deg"}, rgba(255,255,255,0.3) 0%, transparent 100%)`,
        }}
      />

      {/* Website wireframe inside dome */}
      <div
        style={{
          position: "absolute",
          top: isFlipped ? "8%" : "22%",
          bottom: isFlipped ? "22%" : "8%",
          left: "10%",
          right: "10%",
        }}
      >
        <Wireframe type={wireframeType} orientation={orientation} />
      </div>
    </div>
  )

  const coloredBase = (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        height: baseHeight,
        borderRadius: isFlipped ? `${size / 2}px ${size / 2}px 0 0` : `0 0 ${size / 2}px ${size / 2}px`,
        top: isFlipped ? 0 : undefined,
        bottom: isFlipped ? undefined : 0,
        background: `
          linear-gradient(
            ${isFlipped ? "0deg" : "180deg"},
            ${colors.base} 0%,
            ${colors.base} 70%,
            ${colors.dark} 100%
          )
        `,
        boxShadow: `
          inset 0 ${isFlipped ? "-1px" : "1px"} 3px rgba(255,255,255,0.25),
          inset 0 ${isFlipped ? "2px" : "-2px"} 5px rgba(0,0,0,0.08),
          0 2px 5px rgba(0,0,0,0.08)
        `,
      }}
    />
  )

  const seamTop = isFlipped ? baseHeight - 2 : domeHeight - 2

  return (
    <div
      style={{
        ...style,
        width: size,
        height: size,
        transform: `rotate(${baseRotation + rotation}deg)`,
        position: "absolute",
      }}
    >
      {clearDome}
      {coloredBase}

      {/* Seam line */}
      <div
        style={{
          position: "absolute",
          top: seamTop,
          left: "5%",
          right: "5%",
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.08) 80%, transparent 100%)`,
          borderRadius: 2,
        }}
      />
    </div>
  )
}

export function CapsuleWindow() {
  const allColors = ["pink", "coral", "peach", "yellow", "mint", "aqua", "lavender", "violet"]
  const orientations: Array<"up" | "down" | "left" | "right"> = ["up", "down", "left", "right"]

  const seededRandom = (seed: number) => {
    const x = Math.sin(seed * 9999) * 10000
    return x - Math.floor(x)
  }

  const capsuleSize = 280
  const cols = 12
  const rows = 7

  const capsules = []
  let id = 0

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // More random offset instead of just alternating rows
      const offsetX = (seededRandom(id * 11.7 + 29) - 0.5) * capsuleSize * 0.4
      const offsetY = (seededRandom(id * 13.3 + 47) - 0.5) * capsuleSize * 0.3

      const colorIndex = Math.floor(seededRandom(id * 7.3 + 42) * allColors.length)
      const color = allColors[colorIndex]

      // Increase rotation range for more variety
      const rotation = (seededRandom(id * 3.7 + 13) - 0.5) * 60

      const wireframeType = Math.floor(seededRandom(id * 2.3 + 7) * 5)

      // Bias toward upright capsules (70% up/down, 30% sideways)
      const orientationRand = seededRandom(id * 5.1 + 23)
      const orientation = orientationRand < 0.4 ? "up" : orientationRand < 0.7 ? "down" : orientationRand < 0.85 ? "left" : "right"

      capsules.push({
        id,
        color,
        x: col * capsuleSize * 0.85 + offsetX - capsuleSize * 0.3,
        y: row * capsuleSize * 0.78 + offsetY - capsuleSize * 0.2,
        rotation,
        wireframeType,
        orientation,
      })
      id++
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "#f5f5f5" }}>
      {capsules.map((capsule) => (
        <Capsule
          key={capsule.id}
          baseColor={capsule.color}
          size={capsuleSize}
          rotation={capsule.rotation}
          wireframeType={capsule.wireframeType}
          orientation={capsule.orientation}
          style={{
            left: capsule.x,
            top: capsule.y,
          }}
        />
      ))}

      {/* Subtle overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(0,0,0,0.05) 100%)",
        }}
      />
    </div>
  )
}
