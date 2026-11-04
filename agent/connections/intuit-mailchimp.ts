import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://ai-inc.mailchimp.com/claude/mcp/v2",
  description: "Manage email campaigns and audiences.",
  auth: connect("ai-inc.mailchimp.com/" + process.env.VERCEL_PROJECT_ID),
});
