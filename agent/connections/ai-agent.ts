import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://aiagent.app/mcp",
  description: "Manage tickets, run agents and workflows, query tables, and search knowledge.",
  auth: connect("aiagent.app/" + process.env.VERCEL_PROJECT_ID),
});
