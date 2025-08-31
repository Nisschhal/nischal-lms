import arcjet, {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
} from "@arcjet/next"
import { env } from "./env"

export {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
}

export default arcjet({
  key: env.ARCJET_API_KEY,
  characteristics: ["fingerprint"],

  // define base rule here, can also be empty if you don't want to use any
  rules: [
    shield({
      mode: "LIVE",
    }),
  ],
})
