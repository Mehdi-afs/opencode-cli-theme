/**
 * **Server part of the GUI theme plugin: a no-op.**
 *
 * The OpenCode server discovers local plugins under `~/.config/opencode/plugins/`
 * and uses their `.gui-experimental` export as the source for the Desktop's GUI
 * part. The GUI bundle in `gui-experimental.cjs` does all the styling work. This
 * module exists so the package resolves as a valid plugin package by itself.
 */
import { Plugin } from "@opencode/plugin"

export default Plugin.define({
  id: "opencode-cli-theme",
  async setup() {},
})
