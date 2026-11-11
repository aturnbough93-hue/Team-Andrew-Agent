import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://api.paidnice.com/mcp",
  description: "Chase overdue invoices and handle customer replies for Xero and QuickBooks.",
  auth: connect("api.paidnice.com/" + process.env.VERCEL_PROJECT_ID),
});
