# OpenCode CLI Theme — for OpenCode Desktop

**Brings the OpenCode CLI's dark palette to OpenCode Desktop.** Near-black surfaces, white text, purple headings, orange bold and accents, and the CLI's syntax colors in code blocks — the look of the terminal, in the windowed app.

It is an official, experimental **GUI plugin**: it injects a few hundred lines of CSS into the app window while the plugin is active. Nothing in the app installation is touched, app updates are unaffected, and disabling it is one switch in Settings.

## What it changes (dark color scheme only)

| What you see | Color | Hex |
| --- | --- | --- |
| Backgrounds | near-black (CLI ladder) | `#0a0a0a` → `#030303` |
| Body text | near-white | `#eeeeee` |
| Headings | purple (CLI accent) | `#9d7cd8` |
| **Bold** | orange | `#f5a742` |
| Links | orange | `#fab283` |
| Inline code | green | `#7fd88f` |
| Strings | green | `#7fd88f` |
| Keywords | purple | `#9d7cd8` |
| Function names | blue | `#5c9cf5` |
| Numbers | orange | `#f5a742` |
| Variables | red | `#e06c75` |
| Comments | gray | `#808080` |

The palette is the OpenCode CLI's own version 2 dark theme (from the [`anomalyco/opencode`](https://github.com/anomalyco/opencode) repository, `packages/tui/src/theme/assets/v2/opencode.json`).

Light mode keeps the app's defaults with one exception: code text uses a calmer green, `#165e2e`, because the default light green is hard to read.

## Requirements

- **OpenCode Desktop** version 2.2.0 or newer, on macOS (tested), Windows and Linux untested but expected to work — the plugin only ships CSS.
- **Color scheme: Dark** and **Theme: OpenCode** in **Settings → Appearance**.

The plugin uses the Desktop's GUI plugin API, which is labeled experimental by the OpenCode project. The `Style` contribution used here is one stable surface of that API; if a future Desktop release changes it, the plugin either keeps working unchanged or simply stops applying until updated.

## Install (one command)

```sh
git clone https://github.com/Mehdi-afs/opencode-cli-theme.git ~/.config/opencode/plugins/opencode-cli-theme
```

Then **fully quit OpenCode Desktop (`Cmd + Q`) and reopen it.** First-time activation needs the restart; later edits reload live because the app watches the plugin files.

<details>
<summary>No git? Manual install</summary>

1. Download the repository as a ZIP (green **Code** button → **Download ZIP**).
2. Unpack it into `~/.config/opencode/plugins/opencode-cli-theme/` so that `package.json` sits directly inside that folder.
3. Restart the Desktop app.

</details>

## Update

```sh
git -C ~/.config/opencode/plugins/opencode-cli-theme pull
```

The app reloads the plugin in every open window within seconds. If nothing changes, restart the Desktop app once.

## Disable or uninstall

- **Disable:** Settings → Extensions → Plugins → switch off the `opencode-cli-theme` row. The CSS goes away immediately.
- **Uninstall:** delete the folder `~/.config/opencode/plugins/opencode-cli-theme/`.

No entry in `opencode.json` or `cli.json` is required, because the Desktop discovers plugins in `~/.config/opencode/plugins/` automatically.

## Troubleshooting

- **No changes after install.** Check three places: the `opencode-cli-theme` row exists and is on in Settings → Extensions → Plugins; Color scheme is **Dark**; the theme is **OpenCode**.
- **Is it really running?** Open the command palette and run **"Diagnose theme plugin (opencode-cli-theme)"**. It reports from inside the window: whether the setup ran, whether the style block exists, and the two most important computed colors.
- **Code colors partially off.** Syntax tokens are painted with internal `--hls-*` variables named by the highlighter. If a token type stays unchanged (comments, operators, and similar), open an issue naming the token; one override line fixes each.

## How it works

```
~/.config/opencode/plugins/opencode-cli-theme/
├── package.json          Plugin package manifest (server + GUI parts)
├── index.ts              Server part: a registered no-op, so the package resolves
└── gui-experimental.cjs  GUI part: Plugin.define with two contributions
    ├── Style   → the full palette as CSS (scoped to the dark scheme)
    └── Command → "Diagnose theme plugin (opencode-cli-theme)" in the palette
```

The Desktop's background server discovers the folder automatically, lists it under Settings → Extensions → Plugins, and hands the GUI bundle to every app window. Windows evaluate the bundle, run its `setup`, and mount the CSS.

## Credits

- Palette source: the [OpenCode](https://opencode.ai) CLI's version 2 theme, [anomalyco/opencode](https://github.com/anomalyco/opencode).
- Inspiration: the Typora skin ["OpenCode"](https://theme.typora.io/theme/OpenCode/) by nxxxsooo, built from the same palette.

## License

[MIT](LICENSE)
