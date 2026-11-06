import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.onkernel.com/mcp",
  description: "Run cloud browsers for AI agents.",
  auth: connect("mcp.onkernel.com/" + process.env.VERCEL_PROJECT_ID),
});
