---
title: "Four open-source tools — ku, Taurus, Comptoir, proqcm"
description: "Since the Godot remaster, four MIT tools joined the catalog: a sysadmin TUI, a zipped-site player, a once-a-day city RPG, and Markdown quizzes for Socrative."
pubDate: 2026-09-09
tags:
  - programming
  - open-source
---

Last month I announced the first native Godot builds of [Air Fireman](/air-fireman) and [Sheep Dog](/sheep-dog). Since then, four open-source tools joined the [catalog](/). They don’t look alike — a TUI, a zip player, a city RPG, a quiz CLI. They share one idea: **the durable source is a file you already own**.

## ku — what htop does not do

**[ku](/ku)** is a sysadmin TUI for Linux and macOS. Live CPU, memory, volumes, and processes, as you’d expect. Two extra views:

- **Growth**: which folders grew or vanished, and *why* (file vs recursive tree)
- **Orphans**: leftover data from uninstalled apps — dry-run by default, delete only when you ask

Rust and [Ratatui](https://ratatui.rs). `cargo install --path .` then `ku`. Repo: [github.com/noematic-eu/ku](https://github.com/noematic-eu/ku).

## Taurus — the zip changes, the app does not

**[Taurus](/taurus)** opens a `.zip` of a static site in its own window. Course packs, offline docs, WACZ archives: the content lives in the archive, not in the binary. Updating a course means shipping a new zip — not a new installer.

Built with [Tauri 2](https://tauri.app/). The pack has no access to Tauri APIs; the HTTP server binds to `127.0.0.1` only. macOS, Windows, Linux. Repo: [github.com/noematic-eu/taurus](https://github.com/noematic-eu/taurus).

## Comptoir — a city, once a day

Twine and Ink make hypertext. Inform makes parser IF. Ren’Py makes visual novels. **[Comptoir](/comptoir)** is for the other shape: a **town you visit once a day**, with shops, a walkable map, and short skill checks — the lineage of BBS door games.

You describe the world in `.hf` and scenes in Ink. A compiler builds an IR. A mode machine plays it, as a TUI or on a dumb 80×25 BBS terminal. You do not write a game loop.

Demo: [Cinder Ring](https://github.com/noematic-eu/comptoir/tree/main/testdata/src/cinder_ring), a horseshoe harbour. Repo: [github.com/noematic-eu/comptoir](https://github.com/noematic-eu/comptoir).

## proqcm — git is the library, Socrative is the room

[Socrative](https://www.socrative.com/) is a great live classroom: quizzes, Space Race, QR join, students need no account. Its Free plan stores **five quizzes**. **[proqcm](/proqcm)** keeps the questions in Markdown you already version-control, then fills Socrative’s **official Excel template** when you want to run them.

```
git is the library          Socrative is the room
*.qcm.md  ──export──►  .xlsx  ──import──►  launch  ──►  delete the slot
```

`go install github.com/noematic-eu/proqcm/cmd/proqcm@latest`. Lint, paper export, answer-key export, pack a folder. Repo: [github.com/noematic-eu/proqcm](https://github.com/noematic-eu/proqcm).

## What’s next

All MIT. Games you write for Comptoir stay yours.

If one of these tools is useful, the simplest way to contribute is not a GitHub issue: it’s **[OpenSource Contribution](https://payhip.com/b/pVwaY)** on Payhip — ku / Taurus / proqcm / Comptoir (€5 once, or €2 / month). Issues and stars still help for the code.

<a href="https://payhip.com/b/pVwaY" class="btn text-white border border-primary-600/30 bg-primary-600/90 dark:bg-primary-800/80 hover:bg-primary-800 hover:border-primary-800 sm:mb-0 px-8 py-3 w-full rounded-3xl">Contribute via Payhip</a>

The free Air Fireman classic stays online; the Godot remasters are on the [same shop](https://payhip.com/noematic). This round, the open-source catalog moved.

**Catalog:** [qi.noematic.eu](/) · **Contribute:** [Payhip](https://payhip.com/b/pVwaY) · **Code:** [github.com/noematic-eu](https://github.com/noematic-eu)
