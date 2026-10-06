---
title: How to find a file when the drives pile up
description: Photos, videos, music, and documents end up on several disks. A local catalog lets you browse the tree, search by name or extension, and see duplicates — even when the drive is unplugged.
pubDate: 2024-12-30
tags:
  - files
  - management
---

## Why it helps to know where files are

Before the tool, the gain is simple:

 - **Access:** find a file without plugging drives in one by one.
 - **Space:** see which folders fill the volume, and which copies already exist elsewhere.
 - **Later:** keep a record of a drive in the vault, not only of the one that is mounted.

## What Media Cataloger 2 does

[Media Cataloger 2](/media-cataloger-2) lists your disks in a local catalog. Once a volume is indexed, you browse its tree even when it is unplugged.

 - **Offline:** folders, modification dates, and sizes, whether the disk is connected or not. Free space on local and remote volumes is visible at a glance.
 - **What uses space:** which folders and files take up the most room.
 - **Search:** by name or extension, across every catalogued drive.
 - **Duplicates:** copies on one disk or across several, lists by subject or owner, files that exist in only one place.
 - **SSH:** catalog the disks of a remote computer.
 - **On your machine:** cataloging, search, and duplicates do not need the internet.

Not a DAM, not iTunes, not an EXIF editor, not a backup tool. No tags, no search inside document text, no collection sharing.

On macOS, two apps, one engine: Swift + nmcd (native) and nmcui (Go / Fyne). On Windows and Linux, the Go build. The emailed license is pasted into the 15 October download. The native Mac app does not read that file yet.

## Steps

1. **Index a volume.** Folder walks run in parallel.
2. **Read it later.** The tree and the space report stay available with the disk unplugged.
3. **Search** by name or extension.
4. **Spot** duplicates and unique files, then remove the extra copies if you decide to.
5. **Another machine:** catalog its disks over SSH.

## The two pages

[Media Cataloger 2](/media-cataloger-2) is the current version (0.2 beta). There is no public zip yet. The **0.0.1** zips, free and limited to 1 drive (Mac Intel, Windows, Linux), stay on [Media Cataloger](/media-cataloger). A license already emailed is pasted into the 15 October download. The native Mac app does not read that file yet.

<a href="/media-cataloger-2" class="btn text-white border border-primary-600/30 bg-primary-600/90 dark:bg-primary-800/80 hover:bg-primary-800 hover:border-primary-800 sm:mb-0 px-8 py-3 w-full rounded-3xl">See Media Cataloger 2</a>
