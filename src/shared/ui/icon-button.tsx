import { type ComponentProps, type FC } from "react";
import { Link } from "react-router";
import { Loader, type LucideProps } from "lucide-react";
import clsx from "clsx";

interface BaseProps {
  icon: FC<LucideProps>;
  variant?: "solid" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

interface LinkProps extends BaseProps, Omit<ComponentProps<"a">, "href"> {
  as: "link";
  to: string;
}

interface ButtonProps extends BaseProps, ComponentProps<"button"> {
  as?: "button";
}

const IconButton: FC<LinkProps | ButtonProps> = (props) => {
  const { icon: Icon, variant = "ghost", size = "md", isLoading = false, ...rest } = props;

  const iconsSize = { sm: 16, md: 16, lg: 20 } as const;

  if (props.as === "link") {
    const { to, className: linkClassName, ...restLinkProps } = rest as LinkProps;

    return (
      <Link
        to={to}
        className={clsx(
          "flex items-center justify-center rounded-lg",
          { "h-8 w-8 min-w-8": size === "sm" || size === "md" || size === "lg" },
          variant === "ghost" ? "hover:bg-gray-50/15 hover:backdrop-blur-md" : "bg-gray-50 text-gray-950",
          linkClassName
        )}
        {...restLinkProps}
      >
        {isLoading ? (
          <Loader size={iconsSize[size]} strokeWidth={1.5} className={"animate-spin"} />
        ) : (
          <Icon size={iconsSize[size]} strokeWidth={1.5} />
        )}
      </Link>
    );
  }

  const { className: buttonClassName, ...restButtonProps } = rest as ButtonProps;

  return (
    <button
      className={clsx(
        "flex items-center justify-center rounded-lg enabled:cursor-pointer",
        { "h-8 w-8 min-w-8": size === "sm" || size === "md" || size === "lg" },
        variant === "ghost"
          ? "enabled:hover:bg-gray-50/15 enabled:hover:backdrop-blur-md"
          : "bg-gray-50 text-gray-950 enabled:hover:bg-gray-50/80",
        buttonClassName
      )}
      disabled={isLoading}
      {...restButtonProps}
    >
      {isLoading ? (
        <Loader size={iconsSize[size]} strokeWidth={1.5} className={"animate-spin"} />
      ) : (
        <Icon size={iconsSize[size]} strokeWidth={1.5} />
      )}
    </button>
  );
};

export default IconButton;
