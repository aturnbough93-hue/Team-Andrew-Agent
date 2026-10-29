import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://whatsync.app/api/mcp",
  description: "Search WhatsApp chats, see who is waiting for a reply, and send messages.",
  auth: connect("whatsync.app/" + process.env.VERCEL_PROJECT_ID),
});
