import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import { footerConfig, footerCredits } from "@/config/footerConfig";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Logo */}
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">Shadcn</h3>
            </Link>
          </div>

          {footerConfig.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">{section.title}</h3>
              {section.links.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} className="opacity-60 hover:opacity-100">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Credits */}
        <section>
          <h3>
            &copy; {footerCredits.year} Designed and developed by
            <Link
              target="_blank"
              href={footerCredits.authorUrl}
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              {footerCredits.author}
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
