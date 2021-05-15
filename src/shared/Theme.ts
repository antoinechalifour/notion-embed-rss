export type Font = "default" | "serif" | "mono";
export const fonts: Font[] = ["default", "serif", "mono"];
export const safeFont = (font: string | undefined) =>
  fonts.includes(font as Font) ? (font as Font) : "default";

export type Theme = "light" | "dark";
export const themes: Theme[] = ["light", "dark"];
export const safeTheme = (theme: string | undefined) =>
  themes.includes(theme as Theme) ? (theme as Theme) : "light";
