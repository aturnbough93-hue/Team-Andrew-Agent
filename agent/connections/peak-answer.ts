import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://peakanswer.com/api/mcp",
  description: "Track AI search visibility, audit pages, and find placement and discussion opportunities.",
  auth: connect("peakanswer.com/" + process.env.VERCEL_PROJECT_ID),
});
