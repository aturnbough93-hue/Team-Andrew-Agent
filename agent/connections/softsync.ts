import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.softsync.ai/mcp/softsync",
  description: "Manage CRM customers, call notes, and email conversations.",
  auth: connect("api.softsync.ai/" + process.env.VERCEL_PROJECT_ID),
});
