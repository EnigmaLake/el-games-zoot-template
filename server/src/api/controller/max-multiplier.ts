import { RequestHandler } from "express";

import { config } from "../../config";
import { computeMaxMultiplier } from "../../rng/compute-max-multiplier";

export type MaxMultiplierResponse = {
  rtp: number;
  maxMultiplier: number;
  gameId?: number;
  details?: Record<string, unknown>;
};

export type InvalidRtpResponse = { error: "INVALID_RTP" };

/**
 * Parses `?rtp=<percent>`. Numeric, `1 <= rtp <= 100`, decimals allowed.
 * Returns `undefined` for anything else (missing, NaN, out of range).
 */
export const parseRtpPercent = (raw: unknown): number | undefined => {
  if (typeof raw !== "string" || raw.trim() === "") {
    return undefined;
  }

  const rtp = Number(raw);

  if (!Number.isFinite(rtp) || rtp < 1 || rtp > 100) {
    return undefined;
  }

  return rtp;
};

/**
 * `GET /max-multiplier?rtp=<percent>`
 * No auth, no player context, no DB, no RNG, no side effects.
 */
export const createMaxMultiplierRequestHandler = (): RequestHandler => {
  return async (req, res) => {
    const rtp = parseRtpPercent(req.query.rtp);

    if (rtp === undefined) {
      const body: InvalidRtpResponse = { error: "INVALID_RTP" };
      res.status(400).send(body);
      return;
    }

    const { maxMultiplier, details } = computeMaxMultiplier(rtp);

    // A number or omitted — never a string, NaN or 0.
    const gameId = Number(config.rgsGameId);
    const body: MaxMultiplierResponse = {
      rtp,
      maxMultiplier,
      ...(Number.isSafeInteger(gameId) && gameId > 0 ? { gameId } : {}),
      ...(details ? { details } : {}),
    };

    res.send(body);
  };
};
