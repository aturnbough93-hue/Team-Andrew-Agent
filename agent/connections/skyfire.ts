import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.skyfire.xyz/mcp",
  description: "Manage payments and service transactions for AI agents.",
  auth: connect("skyfire/team-4b1ed8f0s-agent-skyfire"),
});
