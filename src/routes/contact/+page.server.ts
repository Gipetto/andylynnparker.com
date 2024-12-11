import { fail } from "@sveltejs/kit"
import type { Actions } from "./$types"
import { Resend } from "resend"
import { PostHog } from "posthog-node"
import { PUBLIC_POSTHOG_API_KEY } from "$env/static/public"

export const actions: Actions = {
  default: async (event) => {
    const posthog = new PostHog(
      PUBLIC_POSTHOG_API_KEY,
      {
        host: "https://eu.i.posthog.com"
      }
    )

    const { request } = event
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    const resend = new Resend("re_UPtU5aux_7rFRLY3mMzD8f1PbzbgrmTCr")
    const { data, error } = await resend.emails.send({
      from: "no-reply@andylynnparker.com",
      to: "shawn+andy@topfroggraphics.com",
      subject: "Contact Request from andylynnparker.com",
      text: `New message from ${name} - ${email}\n\n${message}`
    })

    if (error) {
      return fail(500, {
        error: error
      })
    }

    console.log(data)

    // posthog.capture(
    //   {
    //     distinctId: "foo",
    //     event: "email_sent"
    //   }
    // )

    await posthog.shutdown()
    return { success: true }
  }
}
