import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.preuve.ai/mcp",
  description: "Run market research on startup ideas, with sourced competitors, pricing, and risks.",
  auth: connect("mcp.preuve.ai/" + process.env.VERCEL_PROJECT_ID),
});
