import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://sleek.design/api/mcp",
  description: "Design your mobile app UI with AI, then have your coding agent build the real app from it.",
  auth: connect("sleek.design/" + process.env.VERCEL_PROJECT_ID),
});
