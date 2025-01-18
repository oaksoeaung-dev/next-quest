import {
  Milestone,
  Webhook
} from "lucide-react";

export const routes = [
  // {
  //   title: "First Component",
  //   url: "/first-component",
  //   icon: HandHelping,
  // },
  // {
  //   title: "Adding Interactivity",
  //   url: "#",
  //   icon: SquareMousePointer,
  //   childUrl: [
  //     {
  //       title: "Responding to Events",
  //       url: "/adding-interactivity/responding-to-events",
  //       icon: MousePointerClick,
  //     },
  //     {
  //       title: "State",
  //       url: "/adding-interactivity/state",
  //       icon: MousePointerClick,
  //     }
  //   ]
  // },
  {
    title: "Hooks",
    url: "#",
    icon: Webhook,
    childUrl: [
      {
        title: "useEffect",
        url: "/hooks/useEffect",
        icon: Milestone,
      }
    ]
  },
]