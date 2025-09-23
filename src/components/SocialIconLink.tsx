export default function SocialIconLink({ link, color, icon }: { link: string; color: string; icon: string }) {
  return (
    <a href={link} target="_blank" className={`block rounded-full duration-200 hover:scale-[1.1] ${color}`}>
      <svg viewBox="0 0 640 640" width={40} height={40}>
        <path fill="currentColor" d={icon} />
      </svg>
    </a>
  );
}
