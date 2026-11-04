import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://api.llmpulse.ai/api/v1/mcp",
  description: "Track how brands appear in AI answers: mentions, citations, and sentiment.",
  auth: connect("api.llmpulse.ai/" + process.env.VERCEL_PROJECT_ID),
});
