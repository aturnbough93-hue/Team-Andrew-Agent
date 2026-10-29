import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.synthflow.ai/mcp",
  description: "Automate inbound and outbound calls with AI voice agents.",
  auth: connect("mcp.synthflow.ai/" + process.env.VERCEL_PROJECT_ID),
});
