// src/app/share/page.tsx
"use client"

import { useEffect, useMemo, useState } from "react"

type ShareData = { slug: string; name?: string; description?: string }

function getParam(key: string) {
  if (typeof window === "undefined") return null
  const url = new URL(window.location.href)
  return url.searchParams.get(key)
}

function buildSiteUrl(slug: string) {
  return `https://${slug}.capsuleweb.site`
}

export default function SharePage() {
  const [copied, setCopied] = useState(false)
  const [data, setData] = useState<ShareData | null>(null)

  useEffect(() => {
    const slug = (getParam("slug") || "").trim().toLowerCase()
    const name = (getParam("name") || "").trim()
    const description = (getParam("desc") || "").trim()

    if (!slug) {
      setData(null)
      return
    }
    setData({ slug, name: name || undefined, description: description || undefined })
  }, [])

  const siteUrl = useMemo(() => (data?.slug ? buildSiteUrl(data.slug) : ""), [data?.slug])

  const shareText = useMemo(() => {
    const who = data?.name ? `${data.name} just` : "I just"
    const about = data?.description ? ` — ${data.description}` : ""
    return `${who} generated a website in 60 seconds on CapsuleWeb${about}. Try it: ${siteUrl}`
  }, [data?.name, data?.description, siteUrl])

  async function copyLink() {
    if (!siteUrl) return
    await navigator.clipboard.writeText(siteUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  function openX() {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  async function openIGTip() {
    await copyLink()
    alert("Link copied. Take a screenshot of this page and post to Instagram Stories. Paste the link in the sticker.")
  }

  if (!data?.slug) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-2xl font-semibold">No site found</h1>
          <p className="text-white/70 mt-2">
            This page needs a <code className="text-white">slug</code> (example: <code className="text-white">/share?slug=pam</code>).
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/60">CapsuleWeb</div>
              <h1 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
                Your site is live{data?.name ? `, ${data.name}` : ""} ✅
              </h1>
              {data?.description ? (
                <p className="mt-3 text-white/70">{data.description}</p>
              ) : (
                <p className="mt-3 text-white/70">Generated + deployed. Share it to flex.</p>
              )}
            </div>

            <div className="shrink-0 rounded-2xl bg-white/10 border border-white/10 px-3 py-2 text-xs text-white/70">
              {data.slug}.capsuleweb.site
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-black/40 border border-white/10 p-4">
            <div className="text-xs text-white/60">Your link</div>
            <div className="mt-2 flex flex-col md:flex-row md:items-center gap-3">
              <a href={siteUrl} target="_blank" rel="noreferrer" className="text-white underline underline-offset-4 break-all">
                {siteUrl}
              </a>

              <button
                onClick={copyLink}
                className="md:ml-auto rounded-2xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90"
              >
                {copied ? "Copied ✅" : "Copy link"}
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              onClick={() => window.open(siteUrl, "_blank", "noopener,noreferrer")}
              className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/15"
            >
              Open site
            </button>

            <button
              onClick={openX}
              className="rounded-2xl bg-white text-black px-4 py-3 text-sm font-semibold hover:bg-white/90"
            >
              Share to X
            </button>

            <button
              onClick={openIGTip}
              className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/15"
            >
              Instagram Story (screenshot)
            </button>
          </div>

          <p className="mt-6 text-xs text-white/50">Tip: this card is designed to be screenshot. (On Mac: ⇧⌘4)</p>
        </div>

        <div className="mt-6 text-center text-xs text-white/40">capsuleweb.site • built in minutes</div>
      </div>
    </main>
  )
}
