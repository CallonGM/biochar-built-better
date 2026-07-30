import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_audiences",
  title: "Get target audiences",
  description:
    "Get the customer segments GreenMixes serves and the value proposition for each (manufacturers, construction, governments, carbon credit buyers).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const audiences = [
      {
        title: "Concrete Manufacturers",
        description:
          "Swap in our admixture—same batching process, same plant, radically lower carbon footprint. No capex, no downtime.",
      },
      {
        title: "Real Estate & Construction",
        description:
          "Every cubic metre poured becomes a verified carbon sink. Hit net-zero targets on projects already in your pipeline.",
      },
      {
        title: "Governments & Regulators",
        description:
          "Decarbonise public infrastructure with a solution validated at the University of Cambridge and ready for national-scale deployment.",
      },
      {
        title: "Carbon Credit Buyers",
        description:
          "Access durable, physically locked carbon removal credits—quantifiable per building, auditable per tonne.",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(audiences, null, 2) }],
      structuredContent: { audiences },
    };
  },
});
