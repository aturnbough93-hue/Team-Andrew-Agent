import assert from "node:assert/strict";
import test from "node:test";
import { requiresConnectionToolApproval } from "./connection-approval.ts";

test("allows an explicitly read-only, non-destructive connection tool", () => {
  assert.equal(requiresConnectionToolApproval({ readOnlyHint: true }), false);
});

test("requires approval when a connection tool may modify external state", () => {
  assert.equal(requiresConnectionToolApproval({ readOnlyHint: false }), true);
});

test("requires approval when a connection tool has no safety annotations", () => {
  assert.equal(requiresConnectionToolApproval(undefined), true);
});

test("requires approval when a connection tool is marked destructive", () => {
  assert.equal(
    requiresConnectionToolApproval({ readOnlyHint: true, destructiveHint: true }),
    true,
  );
});
