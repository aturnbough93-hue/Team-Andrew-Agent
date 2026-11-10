import type { ApprovalPolicy, ConnectionToolAnnotations } from "eve/tools/approval";

export function requiresConnectionToolApproval(
  annotations: ConnectionToolAnnotations | undefined,
): boolean {
  return annotations?.readOnlyHint !== true || annotations.destructiveHint === true;
}

export const connectionToolApproval: ApprovalPolicy = ({ toolAnnotations }) =>
  requiresConnectionToolApproval(toolAnnotations) ? "user-approval" : "not-applicable";
