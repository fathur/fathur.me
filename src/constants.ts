export const guessColor = (bg: string | undefined) => {
  let bgColor: string;
  let hoverBgColor: string;
  let textColor: string;
  let hoverTextColor: string;
  let focusStyle: string;
  switch (bg) {
    case 'blue':
      bgColor = 'bg-blue-700 ';
      hoverBgColor = 'hover:bg-blue-800';
      textColor = 'text-white hover:text-lime-300';
      focusStyle =
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700';
      break;
    case 'purple':
      bgColor = 'bg-purple-500';
      hoverBgColor = 'hover:bg-purple-600';
      textColor = 'text-white hover:text-lime-300';
      focusStyle =
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500';
      break;
    case 'lime':
      bgColor = 'bg-lime-300';
      hoverBgColor = 'hover:bg-lime-500';
      textColor = 'text-black hover:text-gray-800';
      focusStyle =
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-300';
      break;
    case 'white':
      bgColor = 'bg-gray-50';
      hoverBgColor = 'hover:bg-gray-300';
      textColor = 'text-black hover:text-gray-800';
      focusStyle =
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black';
      break;
    case 'black':
      bgColor = 'bg-black';
      hoverBgColor = 'hover:bg-black';
      textColor = 'text-white hover:text-lime-300';
      focusStyle =
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black';
      break;

    default:
      bgColor = 'bg-white dark:bg-black';
      hoverBgColor = 'hover:bg-gray-300';
      textColor = 'text-gray-800 dark:text-gray-50';
      hoverTextColor = 'hover:text-lime-300';
      focusStyle =
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700';
  }

  return {
    bgColor,
    hoverBgColor,
    textColor,
    focusStyle,
  };
};
