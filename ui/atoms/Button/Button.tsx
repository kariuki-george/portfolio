import { cva, VariantProps } from "cva";

const buttonStyles = cva(
  "flex items-center justify-center px-4  py-2 focus:outline-none focus:ring-2",
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
  <button className={buttonStyles({ intent, fullWidth })} {...props}>
    {text}
  </button>;
};

export default Button;
