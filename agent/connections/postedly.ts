import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://postedly.com/mcp/send",
  description: "Quote, draft, and track US physical mail and fax orders.",
  auth: connect("postedly.com/" + process.env.VERCEL_PROJECT_ID),
});
