"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const termsContent = `CapsuleWeb — Terms of Service

Last Updated: January 2026

1. Acceptance of Terms

By accessing or using CapsuleWeb ("the Service"), you agree to be bound by these Terms. If you do not agree, do not use the Service.

2. Description of Service

CapsuleWeb is an AI-powered website generation and deployment tool. Users submit requests and CapsuleWeb generates website assets and may deploy or host them through third-party services.

3. No Refunds — Final Sale

All purchases made through CapsuleWeb are final and non-refundable. Due to the digital and automated nature of the Service, no refunds or chargebacks will be honored.

4. User Responsibility

You are solely responsible for:
• The content you request
• The legality and accuracy of your website
• Compliance with copyright, trademark, and other laws

CapsuleWeb does not verify user content.

5. Third-Party Services

CapsuleWeb uses third-party providers (such as hosting platforms, payment processors, and AI providers). We are not responsible for their performance, downtime, or actions.

6. Intellectual Property

You own the website content you generate through the Service. CapsuleWeb retains the right to display generated websites for promotional or demonstration purposes unless you explicitly request removal.

7. Limitation of Liability

CapsuleWeb is provided "as-is." We are not liable for any damages, loss of business, loss of data, or legal claims arising from the use of the Service. Your sole remedy is to stop using CapsuleWeb.

8. Indemnification

You agree to indemnify and hold CapsuleWeb harmless from any claims, losses, or damages resulting from your website or your use of the Service.

9. Termination

We reserve the right to suspend or terminate access at any time for any reason.

10. Governing Law

These Terms are governed by the laws of the State of California.`

const privacyContent = `CapsuleWeb — Privacy Policy

Last Updated: January 2026

1. Information We Collect

We may collect:
• Your email and account details
• Website prompts and content you submit
• Payment and billing information (via Stripe or other processors)
• Technical usage data (browser type, IP, device)

2. How We Use Information

We use your information to:
• Generate and deploy websites
• Improve and operate the Service
• Process payments
• Communicate with you

3. No Sensitive Personal Data

CapsuleWeb is not intended for storing sensitive personal information. Do not submit passwords, social security numbers, or confidential data.

4. Third-Party Providers

We share necessary information with trusted third-party services for:
• Hosting
• Payments
• AI generation
• Analytics

We are not responsible for their privacy practices.

5. Data Retention

We retain user data only as long as needed to operate the Service.

6. Security

We implement reasonable safeguards, but no system is completely secure. Use the Service at your own risk.

7. Your Rights

You may request access, correction, or deletion of your account data by contacting us.

8. Changes to this Policy

We may update this Privacy Policy at any time. Continued use means you accept the changes.`

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-16 bg-background border-t border-slate-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-5 rounded-full bg-gradient-to-b from-red-400 to-red-600" />
          <span className="text-sm font-medium text-muted-foreground">Dispensed by capsuleweb.site</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-muted-foreground mb-6">
          <Dialog>
            <DialogTrigger className="hover:text-foreground transition-colors">
              Terms of Service
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Terms of Service</DialogTitle>
              </DialogHeader>
              <div className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
                {termsContent}
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="hover:text-foreground transition-colors">
              Privacy Policy
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Privacy Policy</DialogTitle>
              </DialogHeader>
              <div className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
                {privacyContent}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © 2026 capsuleweb.site. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
