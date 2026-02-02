# Email Capture Setup Guide

## Overview

The CTA panel uses **Formspree** for email capture. Formspree is a form backend service that handles form submissions and sends them to your email.

**Benefits:**
- No backend code required
- Free tier: 50 submissions/month
- Easy spam protection
- Email notifications for each submission
- Export to CSV or integrate with Zapier/webhooks

---

## Setup Instructions

### 1. Create Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### 2. Create a New Form

1. Click **"New Form"** in your Formspree dashboard
2. Name it: **"Lead Magnet - Essay One-Sheet"**
3. Set notification email to your preferred address
4. Copy the **Form Endpoint** (looks like: `https://formspree.io/f/xyzabc123`)

### 3. Update the CTA Panel

1. Open `components/cta-panel.html`
2. Find line ~40: `<form class="magnet-form" id="leadMagnetForm" action="https://formspree.io/f/YOUR_FORM_ID">`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
4. Save the file

**Example:**
```html
<form class="magnet-form" id="leadMagnetForm" action="https://formspree.io/f/xyzabc123" method="POST">
```

### 4. Configure Formspree Settings (Optional)

In your Formspree dashboard, you can configure:

**Notifications:**
- Set custom email subject lines
- Add multiple notification recipients
- Customize email templates

**Integrations:**
- Connect to Zapier for CRM automation
- Set up webhooks for custom integrations
- Export submissions to Google Sheets

**Spam Protection:**
- Enable reCAPTCHA (requires Google reCAPTCHA keys)
- Set submission rate limits
- Block specific domains or IPs

**Autoresponders:**
- Send automatic "Thank you" emails to submitters
- Include download link to the Essay One-Sheet PDF

---

## Data Captured

Each form submission sends:

| Field | Description | Example |
|-------|-------------|---------|
| `email` | User's email address | `parent@example.com` |
| `lead_magnet` | Which resource they requested | `The Outsiders Essay One-Sheet` |
| `pattern` | What pattern they were reading about | `Belonging` |
| `_subject` | Email subject line | `New Lead Magnet Request: The Outsiders` |

---

## Testing

### Local Testing

1. Open any page with the CTA panel (e.g., a guide page)
2. Enter a test email address
3. Click "Get the Tips"
4. Check:
   - Button shows "Sending..." state
   - Success message appears
   - Form border turns green
   - Formspree dashboard shows the submission
   - You receive an email notification

### Production Testing

After deploying:
1. Test from a real device (mobile + desktop)
2. Verify email deliverability
3. Check spam folder if emails don't arrive
4. Test with multiple email providers (Gmail, Outlook, etc.)

---

## Alternative: Simple Redirect Flow

If you want users to download the PDF immediately without waiting for email delivery, you can modify the form to redirect to a download page:

```html
<input type="hidden" name="_next" value="https://yourdomain.com/download/essay-one-sheet.pdf">
```

This way:
1. User submits email
2. Gets redirected to PDF download
3. You still capture their email in Formspree
4. No email delivery delay

---

## Monitoring & Maintenance

**Weekly:**
- Check Formspree dashboard for new submissions
- Review submission count (free tier = 50/month)
- Export data to CRM or spreadsheet

**Monthly:**
- Analyze conversion rates
- Test form functionality
- Review spam submissions

**Upgrade Triggers:**
- If you exceed 50 submissions/month → Upgrade to paid plan ($10/mo for 1,000)
- If you need advanced features (webhooks, custom branding) → Upgrade to Pro plan

---

## Troubleshooting

### Form not submitting
- Check browser console for errors
- Verify form action URL is correct
- Check Formspree dashboard for form status

### Not receiving emails
- Check spam folder
- Verify email address in Formspree settings
- Check Formspree submission logs

### CORS errors
- Formspree handles CORS automatically
- If issues persist, verify you're using `method="POST"`

### Rate limiting
- Free tier limits: 50 submissions/month
- Each test submission counts toward your limit
- Use Formspree's test mode for development

---

## Alternative Services

If Formspree doesn't meet your needs:

| Service | Free Tier | Best For |
|---------|-----------|----------|
| **Web3Forms** | Unlimited | Simple, no signup |
| **Basin** | 100/month | Privacy-focused |
| **Netlify Forms** | 100/month | If hosting on Netlify |
| **FormSubmit** | Unlimited | No dashboard needed |
| **ConvertKit** | 1,000 subscribers | Email marketing automation |

---

## Next Steps

1. ✅ Formspree integration added to CTA panel
2. ⬜ Set up Formspree account and get form ID
3. ⬜ Update `components/cta-panel.html` with your form ID
4. ⬜ Create the Essay One-Sheet PDF
5. ⬜ Set up autoresponder with PDF download link
6. ⬜ Test submission flow end-to-end
7. ⬜ Deploy to production
8. ⬜ Monitor first week of submissions

**Once configured, mark Issue #62 as complete.**
