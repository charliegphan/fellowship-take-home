const toDashedDate = (date) => {
  return date.split('/').join(' - ');
};

export default toDashedDate;
