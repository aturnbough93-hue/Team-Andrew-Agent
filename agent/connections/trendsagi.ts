import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.trendsagi.com/mcp",
  description: "Get trending topics with volume, velocity, trajectories, and AI insights.",
  auth: connect("api.trendsagi.com/" + process.env.VERCEL_PROJECT_ID),
});
