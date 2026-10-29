import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.routergrowth.com/mcp",
  description: "Run go-to-market data tools from one API with a prepaid balance.",
  auth: connect("api.routergrowth.com/" + process.env.VERCEL_PROJECT_ID),
});
