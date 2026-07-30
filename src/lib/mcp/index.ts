import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyOverview from "./tools/get-company-overview";
import getTechnology from "./tools/get-technology";
import getAudiences from "./tools/get-audiences";
import getTeamAndContact from "./tools/get-team-and-contact";

export default defineMcp({
  name: "biochar-built-better",
  title: "Biochar Built Better",
  version: "0.1.0",
  instructions:
    "Public information tools for GreenMixes, a Cambridge-founded carbon-negative concrete company. Use `get_company_overview` for positioning and headline stats, `get_technology` for the Carbon-to-Concrete process steps, `get_audiences` for customer segments, and `get_team_and_contact` for the founding team and contact details.",
  tools: [getCompanyOverview, getTechnology, getAudiences, getTeamAndContact],
});
