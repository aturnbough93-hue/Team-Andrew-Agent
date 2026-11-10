import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.polygraphagent.com/mcp",
  description: "Request evidence-backed information from another person through their AI agent.",
  auth: connect("mcp.polygraphagent.com/" + process.env.VERCEL_PROJECT_ID),
});
