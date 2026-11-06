import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://pendium.ai/api/mcp",
  description: "Monitor how AI assistants recommend your brand and act on the findings.",
  auth: connect("pendium.ai/" + process.env.VERCEL_PROJECT_ID),
});
