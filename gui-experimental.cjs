/**
 * **Paints the OpenCode Desktop window with the CLI's dark palette.**
 *
 * Injected as CSS variables while the plugin's contribution is active. It only
 * touches the dark color scheme (`:root[data-color-scheme="dark"]`), so light
 * mode keeps the app's own colors. Every declaration carries `!important` so
 * it wins inside the cascade no matter when the app's own theme style lands.
 *
 * Three layers: the app's `--v2-*` token variables, the timeline markdown
 * rules the app pins to white (headings, bold, inline code), and the code
 * block `--hls-*` highlighter variables that shiki paints with inline values.
 *
 * The palette comes from the CLI's version 2 dark theme, file
 * `packages/tui/src/theme/assets/v2/opencode.json` in the anomalyco/opencode
 * repository — the same colors the Typora "OpenCode" skin prints.
 */
;(function () {
  var css = [
    ':root[data-color-scheme="dark"] {',

    // ── Text: the CLI's near-white on dark ──
    '--v2-text-text-base: #eeeeee !important;',
    '--v2-text-text-muted: #808080 !important;',
    '--v2-text-text-faint: #6f6f6f !important;',
    '--v2-text-text-weak: #707070 !important;',
    '--v2-text-text-accent: #fab283 !important;',
    '--v2-text-text-accent-hover: #ffd8c6 !important;',

    // ── Backgrounds: the CLI's grey ladder (900 → 100) ──
    '--v2-background-bg-deep: #030303 !important;',
    '--v2-background-bg-base: #0a0a0a !important;',
    '--v2-background-bg-layer-01: #141414 !important;',
    '--v2-background-bg-layer-02: #1e1e1e !important;',
    '--v2-background-bg-layer-03: #1e1e1e !important;',
    '--v2-background-bg-layer-04: #282828 !important;',
    '--v2-background-bg-contrast: #111111 !important;',
    '--v2-background-bg-accent: #3d1d06 !important;',

    // ── Borders and icons ──
    '--v2-border-border-base: #484848 !important;',
    '--v2-border-border-muted: #232323 !important;',
    '--v2-border-border-focus: #fab283 !important;',
    '--v2-icon-icon-base: #8a8a8a !important;',
    '--v2-icon-icon-muted: #3a3a3a !important;',

    // ── State colors: the CLI's 200 steps ──
    '--v2-state-fg-success: #7fd88f !important;',
    '--v2-state-fg-danger: #e06c75 !important;',
    '--v2-state-fg-warning: #f5a742 !important;',
    '--v2-state-fg-info: #56b6c2 !important;',

    // ── Purple ladder (CLI accent): dark 100–900, extrapolated 1000–1200 ──
    '--v2-purple-100: #b38ff4 !important;',
    '--v2-purple-200: #9d7cd8 !important;',
    '--v2-purple-300: #8869bd !important;',
    '--v2-purple-400: #7357a2 !important;',
    '--v2-purple-500: #5f4688 !important;',
    '--v2-purple-600: #4b356f !important;',
    '--v2-purple-700: #392557 !important;',
    '--v2-purple-800: #271640 !important;',
    '--v2-purple-900: #17072b !important;',
    '--v2-purple-1000: #10041b !important;',
    '--v2-purple-1100: #0a0112 !important;',
    '--v2-purple-1200: #040008 !important;',

    // ── Orange ladder: the CLI's warm primary (#fab283 at 200) ──
    '--v2-orange-100: #fddac5 !important;',
    '--v2-orange-200: #fab283 !important;',
    '--v2-orange-300: #d8976c !important;',
    '--v2-orange-400: #b67c56 !important;',
    '--v2-orange-500: #966341 !important;',
    '--v2-orange-600: #774a2c !important;',
    '--v2-orange-700: #593319 !important;',
    '--v2-orange-800: #3d1d06 !important;',
    '--v2-orange-900: #1f0b01 !important;',
    '--v2-orange-1000: #140400 !important;',
    '--v2-orange-1100: #0b0200 !important;',
    '--v2-orange-1200: #050000 !important;',

    // ── Blue ladder (CLI interactive blue) ──
    '--v2-blue-100: #82b4fb !important;',
    '--v2-blue-200: #5c9cf5 !important;',
    '--v2-blue-300: #4c86d6 !important;',
    '--v2-blue-400: #3c70b8 !important;',
    '--v2-blue-500: #2c5b9b !important;',
    '--v2-blue-600: #1d477f !important;',
    '--v2-blue-700: #0f3364 !important;',
    '--v2-blue-800: #02214a !important;',
    '--v2-blue-900: #01112b !important;',
    '--v2-blue-1000: #010a1f !important;',
    '--v2-blue-1100: #000614 !important;',
    '--v2-blue-1200: #00030a !important;',

    // ── Green ladder ──
    '--v2-green-100: #96f7a7 !important;',
    '--v2-green-200: #7fd88f !important;',
    '--v2-green-300: #68b977 !important;',
    '--v2-green-400: #539c61 !important;',
    '--v2-green-500: #3d7f4b !important;',
    '--v2-green-600: #296336 !important;',
    '--v2-green-700: #144922 !important;',
    '--v2-green-800: #00300f !important;',
    '--v2-green-900: #011705 !important;',
    '--v2-green-1000: #010d03 !important;',
    '--v2-green-1100: #000701 !important;',
    '--v2-green-1200: #000300 !important;',

    // ── Red ladder ──
    '--v2-red-100: #fd7e87 !important;',
    '--v2-red-200: #e06c75 !important;',
    '--v2-red-300: #c35a63 !important;',
    '--v2-red-400: #a74952 !important;',
    '--v2-red-500: #8c3941 !important;',
    '--v2-red-600: #722931 !important;',
    '--v2-red-700: #591921 !important;',
    '--v2-red-800: #410a13 !important;',
    '--v2-red-900: #280207 !important;',
    '--v2-red-1000: #190103 !important;',
    '--v2-red-1100: #0e0002 !important;',
    '--v2-red-1200: #060001 !important;',

    // ── Cyan ladder ──
    '--v2-cyan-100: #68d0dd !important;',
    '--v2-cyan-200: #56b6c2 !important;',
    '--v2-cyan-300: #449da7 !important;',
    '--v2-cyan-400: #33848e !important;',
    '--v2-cyan-500: #226c75 !important;',
    '--v2-cyan-600: #0f555d !important;',
    '--v2-cyan-700: #093e44 !important;',
    '--v2-cyan-800: #02292e !important;',
    '--v2-cyan-900: #001518 !important;',
    '--v2-cyan-1000: #000b0c !important;',
    '--v2-cyan-1100: #000506 !important;',
    '--v2-cyan-1200: #000302 !important;',

    // ── Yellow ladder, built around the CLI's warning orange (#f5a742) ──
    '--v2-yellow-100: #fbca8c !important;',
    '--v2-yellow-200: #f5a742 !important;',
    '--v2-yellow-300: #d88b35 !important;',
    '--v2-yellow-400: #b4742a !important;',
    '--v2-yellow-500: #8f5c21 !important;',
    '--v2-yellow-600: #6d4717 !important;',
    '--v2-yellow-700: #4c320f !important;',
    '--v2-yellow-800: #301f08 !important;',
    '--v2-yellow-900: #180f03 !important;',
    '--v2-yellow-1000: #0d0702 !important;',
    '--v2-yellow-1100: #060301 !important;',
    '--v2-yellow-1200: #030100 !important;',

    '}',
    // Shiki paints token spans with var(--hls-<token>) and sets the literal
    // oc-2 colors inline on the code element. Author stylesheets carrying
    // !important win over inline declarations, so naming the same variables
    // here retints every token to the CLI's syntax colors.
    '[data-component="markdown"] [data-component="markdown-code"] { --hls-keyword: #9d7cd8 !important; --hls-function: #5c9cf5 !important; --hls-variable: #e06c75 !important; --hls-string: #7fd88f !important; --hls-number: #f5a742 !important; --hls-type: #e5c07b !important; --hls-operator: #56b6c2 !important; --hls-comment: #808080 !important; --hls-property: #fab283 !important; --hls-constant: #93e9f6 !important; --hls-punctuation: #eeeeee !important; --hls-tag: #e06c75 !important; --hls-attr: #fab283 !important; --hls-selector-tag: #e06c75 !important; --hls-meta: #808080 !important; --hls-link: #fab283 !important; --hls-builtin: #56b6c2 !important; --hls-title: #5c9cf5 !important; --hls-literal-constant: #93e9f6 !important; --hls-boolean: #93e9f6 !important; --hls-regex: #93e9f6 !important; }',

    // ── Timeline markdown: the CLI's message styling ──
    // The app stylesheet pins headings, bold, and inline code to white
    // (--v2-text-text-base). These rules override them with the CLI's own
    // markdown palette: purple headings, orange bold, yellow emphasis,
    // green inline code, orange links.
    '[data-component="markdown"] h1, [data-component="markdown"] h2, [data-component="markdown"] h3, [data-component="markdown"] h4, [data-component="markdown"] h5, [data-component="markdown"] h6 { color: #9d7cd8 !important; }',
    '[data-component="markdown"] strong, [data-component="markdown"] b { color: #f5a742 !important; }',
    '[data-component="markdown"] em, [data-component="markdown"] i { color: #e5c07b !important; }',
    '[data-component="markdown"] :not(pre) > code { color: #7fd88f !important; }',
  ].join('\n')

  var sdk = require('@opencode/plugin/gui')
  var plugin = sdk.Plugin.define({
    setup: function (ctx) {
      ctx.add(sdk.Style, css)

      // Diagnostic: proves from inside the window whether this setup ran,
      // whether the style block exists, and what the app actually computed.
      // Id: opencode-cli-theme.diag — run it from the command palette.
      ctx.add(sdk.Command, function () {
        return {
          id: 'diag',
          title: 'Diagnose theme plugin (opencode-cli-theme)',
          run: function () {
            var styleTag = null
            var styles = document.querySelectorAll('style[data-plugin]')
            for (var i = 0; i < styles.length; i++) {
              if ((styles[i].getAttribute('data-plugin') || '').indexOf('opencode-cli-theme') > -1) styleTag = styles[i]
            }
            var cs = getComputedStyle(document.documentElement)
            var msg = [
              'setup ran: yes',
              'scheme: ' + document.documentElement.getAttribute('data-color-scheme'),
              'style blocks total: ' + styles.length,
              'opencode-cli-theme style block: ' + (styleTag ? 'FOUND (' + (styleTag.textContent || '').length + ' chars)' : 'MISSING'),
              '--v2-text-text-base: ' + cs.getPropertyValue('--v2-text-text-base').trim(),
              '--v2-background-bg-base: ' + cs.getPropertyValue('--v2-background-bg-base').trim(),
            ].join('\n')
            ctx.toast.show({ title: 'Theme plugin diagnostics', description: msg, variant: 'default', duration: 30000 })
          },
        }
      })
    },
  })
  plugin.default = plugin
  module.exports = plugin
})()
