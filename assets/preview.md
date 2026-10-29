## OpenCode Theme Preview

A dark theme synced with the [OpenCode](https://opencode.ai) terminal palette. **Warm orange primary**, purple accents, and a neutral gray scale background.

### Features

- **Warm orange** primary color with purple accents
- Full syntax highlighting matched to OpenCode TUI
- Responsive line width with `clamp()` scaling
- Optimized for typography with JetBrains Mono

### Code Example

```ts
async function fetchTheme(name: string): Promise<Theme> {
  const response = await fetch(`/themes/${name}.json`);
  if (!response.ok) {
    throw new Error(`Theme "${name}" not found`);
  }
  return response.json();
}
```

### Install

```bash
git clone https://github.com/Mehdi-afs/opencode-cli-theme.git \
  ~/.config/opencode/plugins/opencode-cli-theme
```

### Color Palette

| Role | Color | Hex |
| --- | --- | --- |
| Primary | Warm Orange | `#fab283` |
| Secondary | Blue | `#5c9cf5` |
| Accent | Purple | `#9d7cd8` |
| Success | Green | `#7fd88f` |
| Error | Red | `#e06c75` |
| Warning | Orange | `#f5a742` |

> Choose a theme from Settings → Appearance → Theme, then set Color scheme to Dark.

1. pick the theme named **OpenCode**
2. keep *Color scheme* on **Dark**
3. restart to load plugin CSS
4. enjoy the *orange* accents
