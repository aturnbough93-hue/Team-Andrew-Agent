import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.chiefisnext.com/mcp",
  description: "Track and manage your AI agents and see what needs your attention.",
  auth: connect("mcp.chiefisnext.com/" + process.env.VERCEL_PROJECT_ID),
});
