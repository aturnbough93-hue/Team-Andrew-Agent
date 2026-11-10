import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.opus-growth.com/mcp",
  description: "Manage ad campaigns, analytics, measurement, and website workflows.",
  auth: connect("mcp.opus-growth.com/" + process.env.VERCEL_PROJECT_ID),
});
