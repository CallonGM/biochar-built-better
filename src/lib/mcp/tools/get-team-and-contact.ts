import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_team_and_contact",
  title: "Get team and contact details",
  description:
    "Get the GreenMixes founding team and the public contact details for business enquiries.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      team: [
        { name: "Callon Peate", role: "PhD Student, University of Cambridge" },
        { name: "Dr. Dushanth Seevaratnam", role: "PhD Chemical Engineering, University of Cambridge" },
      ],
      contact: {
        email: "callon@greenmixes.com",
        location: "Cambridge, UK",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
