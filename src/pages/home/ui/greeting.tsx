import type { FC } from "react";

const Greeting: FC = () => {
  return (
    <div className="mb-6 flex items-center justify-center">
      <div className="w-full">
        <div className="mx-auto text-center">
          <div className="bg-ai-radial mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gray-50/20">
            <img alt="Docbyte" src="/docbyte-d.svg" width={32} height={32} />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-50">
            Hi there. I’m your Your AI-Powered Document Assistant
          </h2>
          <p className="mx-auto mb-4 max-w-lg leading-relaxed text-gray-400">
            Generate polished documents in seconds, search your archive with smart filters, and share files seamlessly —
            all in one intelligent workspace
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["✍️ Documents Generation", "🔍 Smart Search", "🚀 Instant Sharing"].map((label, idx) => (
              <span key={idx} className="rounded-full border border-gray-50/20 px-3 py-2 text-nowrap backdrop-blur-md">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
