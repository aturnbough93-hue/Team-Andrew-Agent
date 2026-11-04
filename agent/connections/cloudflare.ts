import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.cloudflare.com/mcp",
  description: "Build applications with compute, storage, and AI.",
  auth: connect("mcp.cloudflare.com/" + process.env.VERCEL_PROJECT_ID),
});
