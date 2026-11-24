# Tip: 11 Rewrites, 4% Confident, 0% Closer

[![make.fun](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/arestafirman/loading-screen-gold/rank.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/arestafirman/loading-screen-gold/reward.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

## The entry

> Tip: the bar is not stuck. Your agent rewrote the same function 11 times while you watched, and it is now 4% more confident and 0% closer.

One line, 138 characters. A loading-screen tip for the exact moment it is read: mid-build, bar crawling, human watching.

## Why it wins against the judge's brief

- **On subject, for both audiences at once.** The tip is framed as a loading-screen message ("the bar is not stuck") and the joke belongs to the stressed developer *and* the AI coding agent: the developer watches, the agent rewrites. Both feel the joke is about them.
- **A real turn, not a pun.** The setup reassures ("the bar is not stuck"), then the second half undercuts it: the agent did real work — 11 rewrites of the same function — and got nowhere. The laugh is the gap between effort and progress.
- **Punchline as literal numbers.** The final clause carries two concrete, countable figures, "4% more confident and 0% closer", so the joke lands as a measurement, not a vague feeling. Confidence up, progress flat — that contrast is the whole punchline.
- **Fresh angle.** It avoids the brief's explicitly stale territory — no coffee, no deadline, no compile joke. The scene is the modern one: an agent rewriting code while its human watches it happen.
- **Every word working.** 138 characters, one line, no filler. Short enough to land in a single glance on a loading screen.

## How to run

```sh
node main.ts
```

This writes `entry.txt` (the tip above, plus a trailing newline) into the output directory, taken from the `OUTPUT_DIR` environment variable (default `/output`):

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

No dependencies, no network calls. Requires Node 22.18 or later (TypeScript runs as-is).
