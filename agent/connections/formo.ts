import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.formo.so/v0/mcp",
  description: "Query product analytics, wallet profiles, and attribution for onchain apps.",
  auth: connect("api.formo.so/" + process.env.VERCEL_PROJECT_ID),
});
