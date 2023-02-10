import { cva, VariantProps } from "cva";
import clsx from "clsx";

const buttonStyles = cva(
  clsx(
    "flex items-center justify-center px-4  py-1 focus:outline-none focus:ring-2",
    "border border-text-secondary rounded-md",
    "bg-background-secondary hover:bg-background-tertiary"
  ),
  {
    variants: {
      intent: {
        primary: "bg-background-sencondary text-text-secondary",
      },
      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      intent: "primary",
    },
  }
);

export type ButtonProps = VariantProps<typeof buttonStyles> & {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
};

const Button = ({ text, fullWidth, intent, ...props }: ButtonProps) => {
  return (
    <button className={buttonStyles({ intent, fullWidth })} {...props}>
      {text}
    </button>
  );
};

export default Button;
