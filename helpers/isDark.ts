const isDark = (color: string) => {
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5), 16);
  const value = red * 0.299 + green * 0.587 + blue * 0.114;
  if (value > 186) return false;
  return true;
};

export default isDark;
