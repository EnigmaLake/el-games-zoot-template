# Zoot Game Server Template

### To start the server

```bash
npm run dev
```

### To run the tests

```bash
npm test
```

### Required HTTP endpoints

Every game server built from this template must expose these on the service
root (they are what the platform / games-config probe):

| Method | Path                  | Purpose                                                                                           |
| ------ | --------------------- | ------------------------------------------------------------------------------------------------- |
| GET    | `/healthcheck`        | Liveness probe.                                                                                   |
| POST   | `/register-user-play` | Registers and settles a play through the RGS.                                                     |
| GET    | `/max-multiplier`     | `?rtp=<percent>` → the largest payout/stake ratio the server can settle in one round at that RTP. |

#### `GET /max-multiplier?rtp=<percent>`

- No auth, no player context, no DB, no RNG, no side effects. Deterministic.
- `rtp`: RTP percent, numeric, `1 <= rtp <= 100`, decimals allowed.
  Missing / NaN / out of range → `400 {"error":"INVALID_RTP"}`.
- `200 {"rtp": 94, "maxMultiplier": 959.24, "gameId": <RGS_GAME_ID>, "details": {...optional}}`.
- games-config syncs the value (per RTP) into
  `games_details.max_payout_multiplier_by_rtp`; the Back Office, CSV exports and
  info screens read that. There is no manual per-game data.

The value comes from `src/rng/compute-max-multiplier.ts`. The template ships it
as a `NotImplemented` placeholder and
`src/api/controller/max-multiplier.test.ts` fails until you derive it from the
SAME pay tables / payout functions the settlement path uses — never a
hard-coded constant. Wire `npm test` into your game's CI so the placeholder
cannot ship.
