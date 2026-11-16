import Image from "next/image";
import { logos } from "@/content/images";

/** A single outlet or partner logo, sized by visual weight rather than pixel height. */
export function Logo({ name, scale = 1 }: { name: string; scale?: number }) {
  const logo = logos[name];
  if (!logo) return <span className="logo logo--text">{name}</span>;
  const height = logo.h * scale;
  return (
    <Image
      className="logo"
      src={`/media/logos/${logo.src}.png`}
      alt={name}
      width={logo.width}
      height={logo.height}
      style={{ height: `${height}rem`, width: "auto" }}
      sizes="240px"
    />
  );
}

export function LogoRow({ names, label, scale }: { names: string[]; label: string; scale?: number }) {
  return (
    <ul className="logo-row" aria-label={label} data-reveal>
      {names.map((name) => (
        <li key={name}>
          <Logo name={name} scale={scale} />
        </li>
      ))}
    </ul>
  );
}
