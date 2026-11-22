// Follow this setup guide to integrate the Deno language server with your editor:
// https://supabase.com/docs/guides/functions/local-development
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const ADMIN_EMAIL = 'admin@iyyappaflowerdecorator.com' // Ensure to update this or use Deno.env.get('ADMIN_EMAIL')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' } })
  }

  try {
    const payload = await req.json()
    // Depending on if this is called from the client or from a DB webhook, the structure might change.
    // Assuming DB Webhook structure: payload.record
    const record = payload.record || payload

    if (!record.name || !record.phone || !record.message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Enquiry Bot <onboarding@resend.dev>',
        to: [ADMIN_EMAIL],
        subject: `New Enquiry from ${record.name}`,
        html: `
          <h2>New Decorator Enquiry</h2>
          <p><strong>Name:</strong> ${record.name}</p>
          <p><strong>Phone:</strong> ${record.phone}</p>
          <p><strong>Function Date:</strong> ${record.date || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${record.message}</p>
        `
      })
    })

    const data = await res.json()

    return new Response(
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" } },
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    })
  }
})
