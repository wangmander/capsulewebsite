// FILE: src/app/page.tsx
"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import Examples from "@/components/Examples"
import ViralShare from "@/components/viral-share"
import Footer from "@/components/footer"

export interface FormData {
  description: string
  name: string
  email: string
  vibe: string | null
  color: string | null
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    description: "",
    name: "",
    email: "",
    vibe: null,
    color: null,
  })

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection formData={formData} setFormData={setFormData} />
      <HowItWorks />
      <Pricing />
      <Examples />
      <ViralShare />
      <Footer />
    </main>
  )
}
