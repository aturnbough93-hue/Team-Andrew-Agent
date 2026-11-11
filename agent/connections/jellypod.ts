import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.jellypod.com/mcp",
  description: "Create narrated videos, vertical shorts, and AI podcasts from prompts or scripts.",
  auth: connect("mcp.jellypod.com/" + process.env.VERCEL_PROJECT_ID),
});
