import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://api.titan.email/mcp",
  description: "Search, read, and send business email, schedule meetings, and manage tasks.",
  auth: connect("api.titan.email/" + process.env.VERCEL_PROJECT_ID),
});
