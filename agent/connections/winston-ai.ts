import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://api.gowinston.ai/mcp/v1",
  description: "Check content for AI-generated text, plagiarism, and AI-generated images.",
  auth: connect("api.gowinston.ai/" + process.env.VERCEL_PROJECT_ID),
});
