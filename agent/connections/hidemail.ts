import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://hidemail.app/mcp",
  description: "Create and manage private email aliases that forward to your inbox.",
  auth: connect("hidemail.app/" + process.env.VERCEL_PROJECT_ID),
});
