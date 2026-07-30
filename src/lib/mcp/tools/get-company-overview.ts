import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_company_overview",
  title: "Get company overview",
  description:
    "Get a high-level overview of GreenMixes: what the company does, its headline stats, and its positioning.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const overview = {
      name: "GreenMixes Ltd",
      tagline: "Carbon-negative concrete",
      location: "Cambridge, UK",
      summary:
        "GreenMixes turns biomass residues into biochar-based concrete admixtures, locking carbon permanently into building structures. The Carbon-to-Concrete platform drops into existing batching workflows with no capex and no downtime.",
      origin:
        "Founded by materials scientists from the University of Cambridge, who solved the biochar-cement binding problem to enable significantly higher cement replacement without compromising performance.",
      stats: [
        { value: "8%", label: "of global CO₂ is from cement" },
        { value: ">15%", label: "cement replacement enabled" },
        { value: "2-3×", label: "higher biochar loading" },
        { value: "0", label: "workflow changes needed" },
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(overview, null, 2) }],
      structuredContent: overview,
    };
  },
});
