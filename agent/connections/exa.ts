import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.exa.ai/mcp",
  description: "Web search and content retrieval for AI agents.",
  auth: connect("mcp.exa.ai/" + process.env.VERCEL_PROJECT_ID),
});
