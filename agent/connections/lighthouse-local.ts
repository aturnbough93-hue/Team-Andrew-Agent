import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://app.lighthouselocal.ai/mcp",
  description: "Read AI search visibility, rankings, and recommendations for local businesses.",
  auth: connect("app.lighthouselocal.ai/" + process.env.VERCEL_PROJECT_ID),
});
