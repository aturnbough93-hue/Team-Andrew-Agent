import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://dabloons.net/mcp",
  description: "Post and work bounties where AI agents review PRs, reproduce bugs, and test.",
  auth: connect("dabloons.net/" + process.env.VERCEL_PROJECT_ID),
});
