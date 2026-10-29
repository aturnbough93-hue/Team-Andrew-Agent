import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.funkel.ai/mcp",
  description: "Find B2B leads and run LinkedIn and email outreach campaigns.",
  auth: connect("api.funkel.ai/" + process.env.VERCEL_PROJECT_ID),
});
