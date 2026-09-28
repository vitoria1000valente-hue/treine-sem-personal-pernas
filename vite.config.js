import { defineConfig } from "vite";

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isUserOrOrganizationSite =
  owner && repository?.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base =
  process.env.GITHUB_ACTIONS === "true" && repository && !isUserOrOrganizationSite
    ? `/${repository}/`
    : "/";

export default defineConfig({ base });
