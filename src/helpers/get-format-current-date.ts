const getFormatCurrentDate = () => {
  const date = new Date();
  const day = date.toLocaleString('en-us', { weekday: 'long' });
  const month = date.toLocaleString('en-us', { month: 'long' });
  const dayOfMonth = date.toLocaleString('en-us', { day: 'numeric' });
  const year = date.toLocaleString('en-us', { year: 'numeric' });

  return `${day}, ${dayOfMonth} ${month} ${year}`;
};

export default getFormatCurrentDate;
