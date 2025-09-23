import { socialLinks } from "@/utils/links";
import SocialLink from "@/components/SocialLink";

export default function SocialLinks() {
  return (
    <>
      {socialLinks.map((socialLink, index) => (
        <SocialLink key={index} link={socialLink.link} className={socialLink.color} name={socialLink.name} icon={socialLink.path} />
      ))}
    </>
  );
}
