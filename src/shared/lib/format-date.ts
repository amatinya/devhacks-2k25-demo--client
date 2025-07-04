const formatDate = (date: Date | string | number): string => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Invalid date input";
  }

  const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  const timeFormatter = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false });

  const formattedDate = dateFormatter.format(parsedDate).replace(/\//g, ".");
  const formattedTime = timeFormatter.format(parsedDate);

  return `${formattedDate} at ${formattedTime}`;
};

export default formatDate;
