import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://app-api.aide.app/mcp",
  description: "Search knowledge, look up Shopify orders, and reply to support conversations.",
  auth: connect("app-api.aide.app/" + process.env.VERCEL_PROJECT_ID),
});
