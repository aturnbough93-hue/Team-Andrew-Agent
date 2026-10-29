import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.polygraphagent.com/mcp",
  description: "Request evidence-backed information from another person through their AI agent.",
  auth: connect("mcp.polygraphagent.com/" + process.env.VERCEL_PROJECT_ID),
});
