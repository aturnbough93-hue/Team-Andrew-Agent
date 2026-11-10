import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://api.funkel.ai/mcp",
  description: "Find B2B leads and run LinkedIn and email outreach campaigns.",
  auth: connect("api.funkel.ai/" + process.env.VERCEL_PROJECT_ID),
});
