import {
  HandHelping,
  Milestone,
  MousePointerClick,
  Search,
  SquareMousePointer,
  Webhook
} from "lucide-react";

export const routes = [
  {
    title: "First Component",
    url: "/first-component",
    icon: HandHelping,
  },
  {
    title: "Adding Interactivity",
    url: "#",
    icon: SquareMousePointer,
    childUrl: [
      {
        title: "Responding to Events",
        url: "/adding-interactivity/responding-to-events",
        icon: MousePointerClick,
      },
      {
        title: "State",
        url: "/adding-interactivity/state",
        icon: MousePointerClick,
      }
    ]
  },
  {
    title: "Hooks",
    url: "#",
    icon: Webhook,
    childUrl: [
      {
        title: "useState",
        url: "/hooks/use-state-hook",
        icon: Milestone,
      },
      {
        title: "useEffect",
        url: "/hooks/use-effect-hook",
        icon: Milestone,
      }
    ]
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
]