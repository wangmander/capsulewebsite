// src/app/api/checkout/route.ts
import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = String(body?.name || "").trim()
    const email = String(body?.email || "").trim()
    const description = String(body?.description || "").trim()
    const vibe = body?.vibe ? String(body.vibe) : ""
    const color = body?.color ? String(body.color) : ""

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
    const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID
    const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL

    if (!STRIPE_SECRET_KEY) throw new Error("Missing STRIPE_SECRET_KEY")
    if (!STRIPE_PRICE_ID) throw new Error("Missing STRIPE_PRICE_ID")
    if (!NEXT_PUBLIC_APP_URL) throw new Error("Missing NEXT_PUBLIC_APP_URL")

    const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" })

    // Simple slug: "Pam's Bakery" -> "pam-s-bakery"
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 30) || "site"

    const successUrl =
      `${NEXT_PUBLIC_APP_URL}/share?` +
      `slug=${encodeURIComponent(slug)}` +
      `&name=${encodeURIComponent(name)}` +
      `&desc=${encodeURIComponent(description)}`

    const cancelUrl = `${NEXT_PUBLIC_APP_URL}/?canceled=1`

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
      customer_email: email,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        slug,
        name,
        description,
        vibe,
        color,
      },
    })

    return NextResponse.json({ checkoutUrl: session.url })
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Server error" },
      { status: 500 }
    )
  }
}
