import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://postedly.com/mcp/send",
  description: "Quote, draft, and track US physical mail and fax orders.",
  auth: connect("postedly.com/" + process.env.VERCEL_PROJECT_ID),
});
