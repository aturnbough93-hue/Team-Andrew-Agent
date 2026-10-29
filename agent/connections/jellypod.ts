import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.jellypod.com/mcp",
  description: "Create narrated videos, vertical shorts, and AI podcasts from prompts or scripts.",
  auth: connect("mcp.jellypod.com/" + process.env.VERCEL_PROJECT_ID),
});
