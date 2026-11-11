import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://api.trendsagi.com/mcp",
  description: "Get trending topics with volume, velocity, trajectories, and AI insights.",
  auth: connect("api.trendsagi.com/" + process.env.VERCEL_PROJECT_ID),
});
