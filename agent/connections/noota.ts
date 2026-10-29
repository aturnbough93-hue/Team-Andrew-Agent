import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.noota.io/mcp",
  description: "Search meeting recordings, transcripts, and AI summaries.",
  auth: connect("mcp.noota.io/" + process.env.VERCEL_PROJECT_ID),
});
