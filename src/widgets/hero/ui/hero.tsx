import type { FC, PropsWithChildren } from "react";

interface IHeroProps {
  backgroundImageSrc: string;
  title: string;
  description: string;
}

const Hero: FC<PropsWithChildren<IHeroProps>> = ({ backgroundImageSrc, title, description, children }) => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <img src={backgroundImageSrc} alt="Background" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 bg-black/30 px-6 py-10 text-center text-gray-50">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="max-w-lg">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Hero;
