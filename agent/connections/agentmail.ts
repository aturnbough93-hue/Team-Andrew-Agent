import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.agentmail.to/mcp",
  description: "Email inboxes for AI agents",
  auth: connect("mcp.agentmail.to/" + process.env.VERCEL_PROJECT_ID),
});
