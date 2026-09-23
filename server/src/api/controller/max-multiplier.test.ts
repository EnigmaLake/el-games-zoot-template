import { expect } from "chai";
import { Request, Response } from "express";

import {
  InvalidRtpResponse,
  MaxMultiplierResponse,
  createMaxMultiplierRequestHandler,
} from "./max-multiplier";

/**
 * Calls the handler directly with a stubbed req/res (no HTTP server needed).
 */
const callMaxMultiplier = async (
  rtp?: string
): Promise<{ status: number; body: unknown }> => {
  const handler = createMaxMultiplierRequestHandler();

  let status = 200;
  let body: unknown;

  const req = {
    query: rtp === undefined ? {} : { rtp },
  } as unknown as Request;

  const res = {
    status(code: number) {
      status = code;
      return this;
    },
    send(payload: unknown) {
      body = payload;
      return this;
    },
  } as unknown as Response;

  await Promise.resolve(handler(req, res, () => undefined));

  return { status, body };
};

describe("GET /max-multiplier", () => {
  // These two FAIL while `computeMaxMultiplier` is still the template
  // placeholder. That is deliberate: a new game must derive the max multiplier
  // from its pay tables before its test suite can go green.
  for (const rtp of ["94", "100"]) {
    it(`returns a finite max multiplier at rtp=${rtp}`, async () => {
      const { status, body } = await callMaxMultiplier(rtp);
      const response = body as MaxMultiplierResponse;

      expect(status).to.equal(200);
      expect(response.rtp).to.equal(Number(rtp));
      expect(response.maxMultiplier).to.be.a("number");
      expect(Number.isFinite(response.maxMultiplier)).to.equal(true);
      expect(response.maxMultiplier).to.be.greaterThan(0);
      // gameId is a positive integer, or omitted — never a string.
      if (response.gameId !== undefined) {
        expect(Number.isSafeInteger(response.gameId)).to.equal(true);
        expect(response.gameId).to.be.greaterThan(0);
      }
    });
  }

  it("is deterministic: same rtp -> same answer", async () => {
    const first = (await callMaxMultiplier("94")).body as MaxMultiplierResponse;
    const second = (await callMaxMultiplier("94"))
      .body as MaxMultiplierResponse;

    expect(first.maxMultiplier).to.equal(second.maxMultiplier);
  });

  for (const rtp of ["0", "101", "abc", ""]) {
    it(`rejects rtp=${JSON.stringify(rtp)} with 400 INVALID_RTP`, async () => {
      const { status, body } = await callMaxMultiplier(rtp);

      expect(status).to.equal(400);
      expect(body).to.deep.equal({
        error: "INVALID_RTP",
      } as InvalidRtpResponse);
    });
  }

  it("rejects a missing rtp with 400 INVALID_RTP", async () => {
    const { status, body } = await callMaxMultiplier();

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ error: "INVALID_RTP" } as InvalidRtpResponse);
  });
});
