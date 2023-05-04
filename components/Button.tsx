import newShade from '../utils/lightenDarkenColor';

interface Props {
  size?: string;
  style?: string;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ size, style, className, children }: Props) => {
  // Define the classes to apply to the button based on the size and style props
  let classes = 'rounded-lg ';
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  const primaryColor = '#f7ab0a';

  const buttonStyle = {
    backgroundColor: primaryColor,
    border: primaryColor,
    ':hover': {
      backgroundColor: newShade(primaryColor, -40),
      borderColor: newShade(primaryColor, -40),
    },
  };

  switch (size) {
    case 'auto':
      classes += '';
    case 'large':
      classes += 'max-w-max py-4 px-8 text-black font-bold text-lg';
      break;
    case 'medium':
      classes += 'max-w-max py-2 px-6 text-black font-semibold text-md';
      break;
    case 'small':
      classes += 'max-w-max py-1 px-3 text-md';
      break;
    default:
      classes += 'max-w-max py-2 px-6 text-black font-semibold text-md';
      break;
  }

  switch (style) {
    case 'primary':
      classes += 'text-black';
      buttonStyle.backgroundColor = primaryColor;
      buttonStyle.border = primaryColor;
      break;
    case 'transparent':
      // classes += 'bg-transparent border-transparent';
      classes += 'text-white';
      buttonStyle.backgroundColor = 'transparent';
      buttonStyle.border = 'transparent';
      buttonStyle[':hover'].borderColor = primaryColor;
      break;
    default:
      classes += 'text-black';
      buttonStyle.backgroundColor = primaryColor;
      buttonStyle.border = primaryColor;
      break;
  }

  return (
    <button style={buttonStyle} className={`button border-2 rounded-md ${classes} ${className && className} relative items-center justify-center inline-block overflow-hidden font-medium rounded-lg shadow-2xl group`}>
      <span style={{ backgroundColor: buttonStyle.backgroundColor.match(hexColorRegex) ? newShade(buttonStyle.backgroundColor, -20) : buttonStyle.backgroundColor }} className={`absolute top-0 left-0 w-full h-full transition-all duration-700 rounded-full blur-md ease`}></span>
      <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span style={{ background: buttonStyle.backgroundColor.match(hexColorRegex) ? newShade(buttonStyle.backgroundColor, 20) : buttonStyle.backgroundColor }} className="absolute bottom-0 left-0 w-5/6 h-5/6 -ml-10 rounded-full blur-md"></span>
        <span style={{ background: buttonStyle.backgroundColor.match(hexColorRegex) ? newShade(buttonStyle.backgroundColor, -20) : buttonStyle.backgroundColor }} className={`absolute bottom-0 right-0 w-5/6 h-5/6 -mr-10 rounded-full blur-md`}></span>
      </span>
      <span className="relative text-white">{children}</span>
    </button>
  );
};

export default Button;
