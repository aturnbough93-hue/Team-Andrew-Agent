import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.sitespeak.ai/v1",
  description: "Answer customer questions with AI chatbots trained on your content.",
  auth: connect("api.sitespeak.ai/" + process.env.VERCEL_PROJECT_ID),
});
