import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.chatobserver.com/mcp",
  description: "Track AI visibility, mentions, sentiment, and cited sources.",
  auth: connect("mcp.chatobserver.com/" + process.env.VERCEL_PROJECT_ID),
});
