import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://dev.niftyimages.com/store_mcp",
  description: "Create dynamic images and personalized content for email campaigns.",
  auth: connect("niftyimages/team-4b1ed8f0s-agent-niftyimages"),
});
