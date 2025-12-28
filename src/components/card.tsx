import type { ReactNode, ComponentProps } from "react";

type CardProps = ComponentProps<'ul'>;
type CardItemProps = ComponentProps<'li'>;

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <ul className={`grid grid-cols-1 lg:grid-cols-3 m-auto w-full gap-4 ${className} || ''`} {...props}>
      {children}
    </ul>
  );
}

export const CardItem = ({ children, className, ...props }: CardItemProps) => {
  return (
    <li className={`bg-zinc-50 p-6 flex flex-col justify-between items-start gap-3 rounded-lg shadow
     transition duration-300 ease-in-out
       transform hover:bg-zinc-100 hover:scale-103
        border border-zinc-200 h-62.5 max-h-[250px] ${className} || ''`} {...props}
    >
      {children}
    </li>
  );
}