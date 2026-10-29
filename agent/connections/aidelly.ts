import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://app.aidelly.ai/mcp",
  description: "Draft, schedule, and publish social posts, manage approvals and inbox, and read analytics.",
  auth: connect("app.aidelly.ai/" + process.env.VERCEL_PROJECT_ID),
});
