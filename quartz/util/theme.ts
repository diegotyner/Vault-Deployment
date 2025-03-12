export interface ColorScheme {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  header3: string
  header4: string
  header5: string
  bold: string
  italics: string
  secondary: string
  tertiary: string
  highlight: string
  textHighlight: string
}

interface Colors {
  lightMode: ColorScheme
  darkMode: ColorScheme
}

type FontSpecification =
  | string
  | {
    name: string
    weights?: number[]
    includeItalic?: boolean
  }

export interface Theme {
  typography: {
    header: FontSpecification
    body: FontSpecification
    code: FontSpecification
  }
  cdnCaching: boolean
  colors: Colors
  fontOrigin: "googleFonts" | "local"
}

export type ThemeKey = keyof Colors

const DEFAULT_SANS_SERIF =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
const DEFAULT_MONO = "ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace"

export function getFontSpecificationName(spec: FontSpecification): string {
  if (typeof spec === "string") {
    return spec
  }

  return spec.name
}

function formatFontSpecification(type: "header" | "body" | "code", spec: FontSpecification) {
  if (typeof spec === "string") {
    spec = { name: spec }
  }

  const defaultIncludeWeights = type === "header" ? [400, 700] : [400, 600]
  const defaultIncludeItalic = type === "body"
  const weights = spec.weights ?? defaultIncludeWeights
  const italic = spec.includeItalic ?? defaultIncludeItalic

  const features: string[] = []
  if (italic) {
    features.push("ital")
  }

  if (weights.length > 1) {
    const weightSpec = italic
      ? weights
        .flatMap((w) => [`0,${w}`, `1,${w}`])
        .sort()
        .join(";")
      : weights.join(";")

    features.push(`wght@${weightSpec}`)
  }

  if (features.length > 0) {
    return `${spec.name}:${features.join(",")}`
  }

  return spec.name
}

export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  const headerFont = formatFontSpecification("header", header)
  const bodyFont = formatFontSpecification("body", body)
  const codeFont = formatFontSpecification("code", code)

  return `https://fonts.googleapis.com/css2?family=${bodyFont}&family=${headerFont}&family=${codeFont}&display=swap`
}

// --light: ${theme.colors.lightMode.light};
// --lightgray: ${theme.colors.lightMode.lightgray};
// --gray: ${theme.colors.lightMode.gray};
// --darkgray: ${theme.colors.lightMode.darkgray};
// --dark: ${theme.colors.lightMode.dark};
// --secondary: ${theme.colors.lightMode.secondary};
// --tertiary: ${theme.colors.lightMode.tertiary};
// --highlight: ${theme.colors.lightMode.highlight};
// --textHighlight: ${theme.colors.lightMode.textHighlight};


export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --light: ${theme.colors.lightMode.light};
  --lightgray: ${theme.colors.lightMode.lightgray};
  --gray: ${theme.colors.lightMode.gray};
  --darkgray: ${theme.colors.lightMode.darkgray};
  --dark: ${theme.colors.lightMode.dark};
  --header3: ${theme.colors.lightMode.header3};
  --header4: ${theme.colors.lightMode.header4};
  --header5: ${theme.colors.lightMode.header5};
  --bold: ${theme.colors.lightMode.bold};
  --italics: ${theme.colors.lightMode.italics};
  --secondary: ${theme.colors.lightMode.secondary};
  --tertiary: ${theme.colors.lightMode.tertiary};
  --highlight: ${theme.colors.lightMode.highlight};
  --textHighlight: ${theme.colors.lightMode.textHighlight};

  --headerFont: "${theme.typography.header}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${theme.typography.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.code}", ${DEFAULT_MONO};
}

:root[saved-theme="dark"] {
  --light: ${theme.colors.darkMode.light};
  --lightgray: ${theme.colors.darkMode.lightgray};
  --gray: ${theme.colors.darkMode.gray};
  --darkgray: ${theme.colors.darkMode.darkgray};
  --dark: ${theme.colors.darkMode.dark};
  --header3: ${theme.colors.darkMode.header3};
  --header4: ${theme.colors.darkMode.header4};
  --header5: ${theme.colors.darkMode.header5};
  --bold: ${theme.colors.darkMode.bold};
  --italics: ${theme.colors.darkMode.italics};
  --secondary: ${theme.colors.darkMode.secondary};
  --tertiary: ${theme.colors.darkMode.tertiary};
  --highlight: ${theme.colors.darkMode.highlight};
  --textHighlight: ${theme.colors.darkMode.textHighlight};
}
`
}
