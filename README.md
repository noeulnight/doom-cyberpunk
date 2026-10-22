# Talia doom

Play DOOM inside a holographic mask. [Play at doom.lth.so](https://doom.lth.so).

The game starts automatically. Click the game if keyboard input loses focus.

## Controls

| Key | Action |
| --- | --- |
| ↑ / ↓ | Move forward / backward |
| ← / → | Turn left / right |
| Ctrl | Fire |
| Space | Open / use |
| Shift + arrows | Run |
| Alt + ← / → | Strafe |
| 1–7 | Select weapon |
| Esc / Enter | Menu / select |
| Tab | Map |

## Docker

```sh
docker run --rm -p 8080:80 ghcr.io/noeulnight/doom-cyberpunk:latest
```

Open <http://localhost:8080>. The image supports `linux/arm64`.

## Credits and licenses

- DOOM 1.9 shareware by id Software. Includes the [original distribution](public/licenses/doom19s.zip) and [distribution terms](public/licenses/DOOM-shareware.txt). Runtime files are repacked without modification. No retail WADs are included.
- [js-dos 6.22.60](https://github.com/caiiiycuk/js-dos/releases/tag/6.22.60) / DOSBox: [GPL-2.0](public/licenses/js-dos-GPL-2.0.txt), with [corresponding source](public/licenses/js-dos-6.22.60-source.tar.gz).
- Character artwork belongs to its respective rights holders. No license to the artwork is granted by this repository; permission has not been verified.

Unofficial, noncommercial fan work. Not endorsed by CD PROJEKT RED, id Software, or the animation’s rights holders.
