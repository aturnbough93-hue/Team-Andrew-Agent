import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://app-api.aide.app/mcp",
  description: "Search knowledge, look up Shopify orders, and reply to support conversations.",
  auth: connect("app-api.aide.app/" + process.env.VERCEL_PROJECT_ID),
});
