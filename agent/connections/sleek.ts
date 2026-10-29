import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://sleek.design/api/mcp",
  description: "Design your mobile app UI with AI, then have your coding agent build the real app from it.",
  auth: connect("sleek.design/" + process.env.VERCEL_PROJECT_ID),
});
