import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://api.sitespeak.ai/v1",
  description: "Answer customer questions with AI chatbots trained on your content.",
  auth: connect("api.sitespeak.ai/" + process.env.VERCEL_PROJECT_ID),
});
