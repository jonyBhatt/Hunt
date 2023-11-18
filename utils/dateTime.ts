const Time = (timestamp: Date) => {
  const dateObject = new Date(timestamp);

  // Extracting components of the date
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Month is zero-indexed, so we add 1
  const day = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  // Creating a formatted date string
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;

  // console.log(formattedDate);

  return formattedDate;
};

export default Time;