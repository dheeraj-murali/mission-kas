import { Logo } from "../shared/Logo";
import { Contact } from "./Contact";
import { Copyright } from "./Copyright";
import { SectionLinks } from "./SectionLinks";
import { SocialHeader } from "./SocialHeader";

export const Footer = () => {
  return (
    <footer className="text-center text-gray-600 bg-emerald-50 lg:text-left">
      <SocialHeader />
      <div className="py-10 mx-6 text-center md:text-left">
        <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo type="dark" width={150} height={60} />
          </div>

          <div>
            <SectionLinks />
          </div>
          <div className="lg:col-span-2">
            <Contact />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};
