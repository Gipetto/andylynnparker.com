import { fail } from "@sveltejs/kit"
import type { Actions } from "./$types"
import { Resend } from "resend"

export const actions: Actions = {
  default: async (event) => {
    const { request } = event
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    const resend = new Resend("re_UPtU5aux_7rFRLY3mMzD8f1PbzbgrmTCr")
    const { data, error} = await resend.emails.send({
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
    return { success: true }
  }
}
