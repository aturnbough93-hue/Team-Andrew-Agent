import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.paidnice.com/mcp",
  description: "Chase overdue invoices and handle customer replies for Xero and QuickBooks.",
  auth: connect("api.paidnice.com/" + process.env.VERCEL_PROJECT_ID),
});
