import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://nilyo.com/mcp",
  description: "Search, read, and send messages across your LinkedIn, WhatsApp, email, and calendars.",
  auth: connect("nilyo.com/" + process.env.VERCEL_PROJECT_ID),
});
