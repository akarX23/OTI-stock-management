import { FC, HTMLProps } from 'react';

enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  title: string;
  className?: string;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = ({
  title,
  className = '',
  type = ButtonType.BUTTON,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`hover:bg-primary-dark rounded-md bg-primary px-4 py-2 font-medium uppercase tracking-wide text-white transition-colors duration-300 ease-in-out ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
