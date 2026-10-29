import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://influence.so/api/mcp",
  description: "Plan social campaigns, prepare drafts, schedule approved posts, and read insights.",
  auth: connect("influence.so/" + process.env.VERCEL_PROJECT_ID),
});
