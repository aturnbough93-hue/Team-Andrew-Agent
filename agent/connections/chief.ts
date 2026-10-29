import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.chiefisnext.com/mcp",
  description: "Track and manage your AI agents and see what needs your attention.",
  auth: connect("mcp.chiefisnext.com/" + process.env.VERCEL_PROJECT_ID),
});
