import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.magnific.com/mcp",
  description: "Create and edit AI images, video, and audio, and upscale visuals.",
  auth: connect("mcp.magnific.com/" + process.env.VERCEL_PROJECT_ID),
});
