export default function SocialLink({ link, className, name, icon }: { link: string; className: string; name: string; icon: string }) {
  return (
    <a href={link} target="_blank" className={`block rounded-full duration-200 hover:scale-[1.1] ${className}`}>
      <span className="sr-only">{name}</span>
      <svg viewBox="0 0 640 640" width={40} height={40}>
        <path fill="currentColor" d={icon} />
      </svg>
    </a>
  );
}
