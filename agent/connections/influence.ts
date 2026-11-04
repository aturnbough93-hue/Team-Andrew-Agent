import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://influence.so/api/mcp",
  description: "Plan social campaigns, prepare drafts, schedule approved posts, and read insights.",
  auth: connect("influence.so/" + process.env.VERCEL_PROJECT_ID),
});
