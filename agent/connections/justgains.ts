import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://justgains.com/connect/mcp",
  description: "Read and log workouts, programs, personal records, meals, and bodyweight.",
  auth: connect("justgains.com/" + process.env.VERCEL_PROJECT_ID),
});
