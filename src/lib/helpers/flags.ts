const flags= {
  "enable-contact-form": {
    description: "When enabled, users can see the contact form",
    enabled: false
  }
}

type Flags = typeof flags
type FlagKey = keyof Flags

class FeatureFlags {
  flags = flags

  enabled = (flagName: FlagKey) => {
    if (flagName in this.flags) {
      return this.flags[flagName].enabled
    }
    return false
  }
}

const featureFlags = new FeatureFlags()

const flagEnabled = (flagName: FlagKey) => {
  return featureFlags.enabled(flagName)
}

export {
  flagEnabled
}
