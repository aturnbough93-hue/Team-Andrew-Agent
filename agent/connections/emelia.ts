import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.emelia.io/mcp",
  description: "Manage email and LinkedIn outreach and find prospect contact details.",
  auth: connect("mcp.emelia.io/" + process.env.VERCEL_PROJECT_ID),
});
