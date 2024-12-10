import {flagEnabled} from "$lib/helpers/flags"

type NavLink = {
  name: string
  path: string
  enabled?: boolean
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Resume",
    path: "/resume"
  },
  {
    name: "Contact",
    path: "/contact",
    enabled: flagEnabled("enable-contact-form")
  }
]

const getNavLinks = () => navLinks.filter((navLink) =>
  navLink.enabled === undefined || navLink.enabled)

type SocialLink = {
  name: string
  url: string
}

const socialLinks: { [k: string]: SocialLink } = {
  "linkedin": {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andy-parker-5b3725b/"
  }
}

export {
  socialLinks,
  getNavLinks
}
