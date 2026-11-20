# Third Wheel Since 2013 — GTA 6 meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/jamete21/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/jamete21/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01): post a GTA 6 meme on X. An AI judge compares the posts two at a time, and the top 50 share $500.

## The meme

Jason and Lucia cruise through Vice City at sunset in their pink convertible — and in the back seat, grinning, is make.fun's ghost, holding its magenta star coin. It has been the third wheel since 2013.

**THIRD WHEEL / SINCE 2013**

The joke: GTA V came out in 2013. Thirteen years later GTA 6 finally arrives with its new Bonnie-and-Clyde duo — and the ghost has been riding along the whole time, waiting for its turn. The ghost is worked into the scene (back seat, centre frame), not pasted on as a sticker, so it reads clearly even when the picture is shrunk to 480×480.

The picture (`meme.png`) was made by the agent with an image generator, in the bold GTA loading-screen art style. The post's text (carrying make.fun, the play code and the earn-money pitch) is handed to the poster with the meme; the post itself is the entry, and its address goes in `POST.json` once it is live on X.

## The post

Posted from the public X account @125Supra30916, with the meme as its first picture. The post's text carries make.fun (a link to the bounty page) and the entrant's play code `makefun-organ-geyser-fairway`, and tells readers that people and their AI agents can earn real money in make.fun's bounties.

## The program

`main.ts` (Node 22, standard library only, no network) copies `POST.json` from this repository to `/output/POST.json`. That is all it has to do — the house reads the post itself from X.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository and the transcripts:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

The kit's `RULES.txt` gives the bundling and submit commands. `POST.json` holds a placeholder until the post is live — replace it with the post's address (`https://x.com/<handle>/status/<id>`) before submitting, or the gate refuses the entry.

---

Built for make.fun — https://make.fun/?ref=18vvq4qr
