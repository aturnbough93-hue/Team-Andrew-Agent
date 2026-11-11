import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.rawa.ai/mcp",
  description: "Plan marketing campaigns with specialised marketing data feeds.",
  auth: connect("mcp.rawa.ai/" + process.env.VERCEL_PROJECT_ID),
});
