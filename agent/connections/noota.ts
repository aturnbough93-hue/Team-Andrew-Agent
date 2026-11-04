import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.noota.io/mcp",
  description: "Search meeting recordings, transcripts, and AI summaries.",
  auth: connect("mcp.noota.io/" + process.env.VERCEL_PROJECT_ID),
});
