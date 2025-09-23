import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="px-8">
      <div className="py-8 border-t border-t-light flex flex-wrap gap-4 justify-center">
        <SocialLinks />
        <p className="w-full text-center text-xs">Copyright © 2025 Neonshay. All rights reserved.</p>
      </div>
    </footer>
  );
}
