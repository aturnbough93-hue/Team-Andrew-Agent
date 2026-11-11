import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.emelia.io/mcp",
  description: "Manage email and LinkedIn outreach and find prospect contact details.",
  auth: connect("mcp.emelia.io/" + process.env.VERCEL_PROJECT_ID),
});
