import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_technology",
  title: "Get technology process",
  description:
    "Get the steps of the GreenMixes Carbon-to-Concrete process, from biomass residues to carbon locked in construction.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const technology = {
      headline: "From waste to carbon sink",
      description:
        "The Carbon-to-Concrete platform integrates seamlessly into existing construction workflows—no capex, no disruption.",
      steps: [
        { step: 1, title: "Biomass Residues", description: "Agricultural waste containing sequestered carbon" },
        { step: 2, title: "Biochar Production", description: "Pyrolysis converts waste into stable carbon" },
        {
          step: 3,
          title: "GreenMixes Processing",
          description: "Proprietary binders create high-performance admixtures",
        },
        { step: 4, title: "Construction", description: "Carbon locked permanently into building structures" },
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(technology, null, 2) }],
      structuredContent: technology,
    };
  },
});
