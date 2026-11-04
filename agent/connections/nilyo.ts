import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://nilyo.com/mcp",
  description: "Search, read, and send messages across your LinkedIn, WhatsApp, email, and calendars.",
  auth: connect("nilyo.com/" + process.env.VERCEL_PROJECT_ID),
});
