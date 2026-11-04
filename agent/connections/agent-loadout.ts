import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://agent-loadout.com",
  description: "Give AI agents email inboxes, a credential vault, cards, and machines.",
  auth: connect("agent-loadout.com/" + process.env.VERCEL_PROJECT_ID),
});
