import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.athenahq.ai/api/mcp",
  description: "Track brand visibility, citations, and competitors in AI search answers.",
  auth: connect("api.athenahq.ai/" + process.env.VERCEL_PROJECT_ID),
});
