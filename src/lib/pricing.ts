/**
 * Single source of truth for Wayfinder's plan and price. Used by the
 * homepage (hero + pricing card), docs, FAQ, llms.txt, and structured data.
 * Change it here and every mention on the site updates.
 */
export const PLAN = {
  name: "Basic",
  price: 15,
  currency: "USD",
  trialDays: 7,
} as const;

/** "$15" */
export const PRICE_LABEL = `$${PLAN.price}`;
/** "7-day free trial" */
export const TRIAL_LABEL = `${PLAN.trialDays}-day free trial`;
