import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.us.nylas.com",
  description: "Manage email, calendars, contacts, and meeting notes.",
  auth: connect("mcp.us.nylas.com/" + process.env.VERCEL_PROJECT_ID),
});
