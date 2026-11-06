import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.agentphone.ai/mcp",
  description: "Give AI agents phone numbers for messages and voice calls.",
  auth: connect("mcp.agentphone.ai/" + process.env.VERCEL_PROJECT_ID),
});
