import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.knock.app/mcp",
  description: "Notify users across email, in-app, push, SMS, and chat.",
  auth: connect("mcp.knock.app/" + process.env.VERCEL_PROJECT_ID),
});
