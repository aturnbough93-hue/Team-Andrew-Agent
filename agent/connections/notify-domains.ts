import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://notify.domains/mcp",
  description: "Watch taken domain names for expiration, auctions, and marketplace listings.",
  auth: connect("notify.domains/" + process.env.VERCEL_PROJECT_ID),
});
