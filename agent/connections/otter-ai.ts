import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.otter.ai/mcp",
  description: "Search meeting transcripts and summaries.",
  auth: connect("mcp.otter.ai/" + process.env.VERCEL_PROJECT_ID),
});
