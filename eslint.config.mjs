// ESLint flat config (ESLint 9 + Next.js 16).
// `next lint` was removed in Next 16 — linting now runs ESLint directly
// (see the "lint" script in package.json).
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  // Next.js recommended rules + Core Web Vitals.
  ...nextCoreWebVitals,

  // Project overrides.
  {
    rules: {
      // New in the Next 16 / eslint-plugin-react-hooks toolchain. We have two
      // intentional setState-in-effect patterns — the Hero typewriter state
      // machine and the ThemeToggle mount-time hydration sync — that are correct
      // and bounded. Keep the rule as a warning (informative) rather than a hard
      // error so it doesn't block lint/CI.
      "react-hooks/set-state-in-effect": "warn",
    },
  },

  // Don't lint build output or deps.
  {
    ignores: [".next/**", "node_modules/**"],
  },
];

export default eslintConfig;
