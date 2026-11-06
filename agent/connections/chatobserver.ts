import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.chatobserver.com/mcp",
  description: "Track AI visibility, mentions, sentiment, and cited sources.",
  auth: connect("mcp.chatobserver.com/" + process.env.VERCEL_PROJECT_ID),
});
