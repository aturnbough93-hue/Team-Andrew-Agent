import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://notify.domains/mcp",
  description: "Watch taken domain names for expiration, auctions, and marketplace listings.",
  auth: connect("notify.domains/" + process.env.VERCEL_PROJECT_ID),
});
