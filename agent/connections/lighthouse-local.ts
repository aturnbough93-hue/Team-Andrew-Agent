import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://app.lighthouselocal.ai/mcp",
  description: "Read AI search visibility, rankings, and recommendations for local businesses.",
  auth: connect("app.lighthouselocal.ai/" + process.env.VERCEL_PROJECT_ID),
});
