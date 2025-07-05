import type { FC } from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router";

import { Routes } from "@/shared/constants";

const GenerateDocument: FC = () => {
  return (
    <Link
      to={Routes.HOME}
      className="flex h-10 cursor-pointer items-center gap-2 rounded-full bg-gray-50 px-4 text-xs font-medium text-gray-950 shadow-md hover:shadow-xs"
    >
      <Sparkles size={18} strokeWidth={1.5} />
      Generate Documents
    </Link>
  );
};

export default GenerateDocument;
