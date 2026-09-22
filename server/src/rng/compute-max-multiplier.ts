/**
 * The largest payout/stake ratio this server can settle in ONE round at the
 * given RTP. Served by `GET /max-multiplier?rtp=<percent>`; games-config syncs
 * it into `games_details.max_payout_multiplier_by_rtp` per RTP.
 *
 * TODO(game implementer): derive this from the SAME pay tables / payout
 * functions that `generateRoundMultiplier` and the settlement path use.
 *   - NEVER return a hard-coded constant.
 *   - If the engine picks a maths tier per RTP, evaluate the tier for `rtp`.
 *   - Include in-round features always available at the same stake
 *     (double-or-nothing, rush tiers, ...), subject to server-enforced caps.
 *     If the cap is a cut-off (outcomes above it are rejected), the max is the
 *     largest attainable outcome under the cap.
 *   - Exclude per-operator money caps (`maxExposure` / play limits).
 *   - Deterministic: same rtp -> same answer. No RNG, no DB, no side effects.
 *   - Do not round below what the engine pays (at most 4 decimals).
 *
 * `src/api/controller/max-multiplier.test.ts` fails until this is implemented,
 * so a game cannot pass `npm test` while the placeholder is still here.
 *
 * @param rtp RTP percent, `1 <= rtp <= 100`, exactly as the endpoint receives it.
 */
export const computeMaxMultiplier = (
  rtp: number
): { maxMultiplier: number; details?: Record<string, unknown> } => {
  throw new Error(
    JSON.stringify({
      message: `NotImplemented: computeMaxMultiplier(rtp=${rtp}) must be derived from this game's pay tables`,
    })
  );
};
