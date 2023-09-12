import { defineConfig } from "@playwright/test";
import path from "path";

const baseURL = "http://localhost:3000";

export default defineConfig({
  testDir: path.join(__dirname, "src/e2e"),
  webServer: {
    command: "npm run dev",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: baseURL,
  },
});
