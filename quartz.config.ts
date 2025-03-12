import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Vault",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    // {
    //   provider: "plausible",
    // },
    locale: "en-US",
    baseUrl: "dtyner-vault.vercel.app",
    ignorePatterns: [
      "Private",
      "Work/",
      "Journal/", 
      ".obsidian"
    ],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      /*  
        Theming notes:
        - H1 - dark 
        - H2 - dark
        - H3 - dark
        - H4 - dark
        - H5 - dark
        - text - darkgray
        - Links:
          - Text: Secondary
          - Hover: Tertiary 
          - Background: 
      */
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          italics: "4e4e4e",
          dark: "#2b2b2b",
          header3: "#2b2b2b",
          header4: "#2b2b2b",
          header5: "#2b2b2b",
          bold: "2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0e1116",
          lightgray: "#181c20",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          header3: "#2e80f2",
          header4: "#68c57c",
          header5: "#f79e08",
          bold: "#ff82b2",
          italics: "#4C8CE6",
          // Links might be too intense?
          secondary: "#A14CE6", // A14CE6 // 7b97aa
          tertiary: "#af53fa",  // 84a59d // af53fa
          highlight: "rgba(143, 159, 169, 0.03)",
          textHighlight: "#b3aa021A", // b3aa0288
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ 
        enableInHtmlEmbed: true,
        enableCheckbox: true,
        parseArrows: false,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
      Plugin.HardLineBreaks()
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
