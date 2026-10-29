import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.gowinston.ai/mcp/v1",
  description: "Check content for AI-generated text, plagiarism, and AI-generated images.",
  auth: connect("api.gowinston.ai/" + process.env.VERCEL_PROJECT_ID),
});
