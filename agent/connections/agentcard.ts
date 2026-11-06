import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.agentcard.sh/mcp",
  description: "Issue virtual cards for AI agents and place orders they pay for.",
  auth: connect("mcp.agentcard.sh/" + process.env.VERCEL_PROJECT_ID),
});
