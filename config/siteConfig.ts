// config/navbar.ts

export interface RouteProps {
    href: string;
    label: string;
  }
  
  export interface FeatureProps {
    title: string;
    description: string;
  }
  
  export interface LinkProps {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }
  
  export const config = {
    siteName: "Hello",
    routes: [
        { href: "#testimonials", label: "Testimonials" },
        { href: "#team", label: "Team" },
        { href: "#contact", label: "Contact" },
        { href: "#faq", label: "FAQ" },
      ],
  
    features: <FeatureProps[]>[
      {
        title: "Showcase Your Value",
        description: "Highlight how your product solves user problems.",
      },
      {
        title: "Build Trust",
        description: "Leverages social proof elements to establish trust and credibility.",
      },
      {
        title: "Capture Leads",
        description: "Make your lead capture form visually appealing and strategically.",
      },
    ],
  
    links: <LinkProps[]>[
      {
        label: "GitHub",
        href: "https://github.com/nobruf/shadcn-landing-page.git",
      },
    ],
  };
  