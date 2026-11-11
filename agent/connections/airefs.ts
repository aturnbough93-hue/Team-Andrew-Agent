import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.getairefs.com/mcp",
  description: "Track how ChatGPT and Google AI Overviews mention and cite your brand.",
  auth: connect("mcp.getairefs.com/" + process.env.VERCEL_PROJECT_ID),
});
