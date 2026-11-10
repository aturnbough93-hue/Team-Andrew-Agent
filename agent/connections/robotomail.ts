import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://robotomail.com/mcp",
  description: "Give AI agents their own email inboxes to send, receive, and reply.",
  auth: connect("robotomail.com/" + process.env.VERCEL_PROJECT_ID),
});
