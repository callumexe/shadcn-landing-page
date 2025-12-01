export interface FooterSection {
    title: string; 
    links: FooterLink[];
  }

  export interface FooterLink {
    label: string;
    href: string;
  }

  export const footerConfig: FooterSection[] = [
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Website - Terms of Service", href: "#" },
        { label: "Safeguarding Policy", href: "#" },
      ],
    },
    {
      title: "Socials",
      links: [
        { label: "Discord", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "TikTok", href: "#" },
      ],
    }
  ];
  
  export const footerCredits = {
    year: 2025,
    author: "CERPC Development",
    authorUrl: "",
  };