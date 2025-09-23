import { socialLinks } from "@/utils/socialLinks";
import SocialIconLink from "@/components/SocialIconLink";

export default function Footer() {
  return (
    <footer className="px-8">
      <div className="py-8 border-t border-t-neutral-200 flex gap-4 justify-center">
        {socialLinks.map((socialLink, index) => (
          <SocialIconLink key={index} link={socialLink.link} color={socialLink.color} icon={socialLink.path} />
        ))}
      </div>
    </footer>
  );
}
