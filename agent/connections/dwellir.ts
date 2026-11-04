import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { connectionToolApproval } from "../lib/connection-approval";

export default defineMcpClientConnection({
  approval: connectionToolApproval,
  url: "https://mcp.dwellir.com/mcp",
  description: "Find blockchain RPC endpoints, inspect usage, manage keys, and run read-only RPC calls.",
  auth: connect("mcp.dwellir.com/" + process.env.VERCEL_PROJECT_ID),
});
