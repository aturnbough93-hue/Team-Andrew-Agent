import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://cloud.fluxmail.ai/mcp",
  description: "Read, search, draft, and send email from connected Gmail, Outlook, and IMAP mailboxes.",
  auth: connect("cloud.fluxmail.ai/" + process.env.VERCEL_PROJECT_ID),
});
