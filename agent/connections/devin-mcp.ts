import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.devin.ai/mcp",
  description: "Explore GitHub repository documentation and analyze codebases with AI.",
  auth: connect("mcp.devin.ai/" + process.env.VERCEL_PROJECT_ID),
});
