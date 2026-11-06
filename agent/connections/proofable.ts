import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.proofable.me/mcp",
  description: "Give AI agents trusted context, scoped access, and proof of actions.",
  auth: connect("mcp.proofable.me/" + process.env.VERCEL_PROJECT_ID),
});
