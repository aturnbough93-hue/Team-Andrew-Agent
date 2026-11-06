import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://app.searcherries.com/mcp/searcherries",
  description: "Track how AI assistants answer and cite a brand, plus Search Console and GA4 data.",
  auth: connect("app.searcherries.com/" + process.env.VERCEL_PROJECT_ID),
});
