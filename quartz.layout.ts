import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./quartz/components/types"

// 1. Define a clean, native Avatar component
const Avatar: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`avatar-container ${displayClass ?? ""}`} style={{ 
      display: "flex", 
      justifyContent: "flex-start", 
      margin: "1rem 0 1.5rem 0" 
    }}>
      <img 
        src="./static/callenavatar.jpg" 
        alt="CAllen Architecture Logo" 
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "2px solid var(--lightgray)",
          objectFit: "cover",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}
      />
    </div>
  )
}
Avatar.css = ""
// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
