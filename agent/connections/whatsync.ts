import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://whatsync.app/api/mcp",
  description: "Search WhatsApp chats, see who is waiting for a reply, and send messages.",
  auth: connect("whatsync.app/" + process.env.VERCEL_PROJECT_ID),
});
