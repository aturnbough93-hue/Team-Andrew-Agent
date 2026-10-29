import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.polylane.com/mcp",
  description: "Investigate incidents and ship fixes with AI agents.",
  auth: connect("mcp.polylane.com/" + process.env.VERCEL_PROJECT_ID),
});
