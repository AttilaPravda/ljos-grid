/**
 * Returns color of grid item
 * @param {*} index
 */
export const returnColor = (index) => {
  const colorPalette = [
    "linear-gradient(300deg, #949A00 0%, #E9C220 75%, #F2CA21 100%)",
    "linear-gradient(304deg, #111B38 0%, #4F73D9 100%)",
    "linear-gradient(304deg, #501D0D 0%, #F25721 100%)",
    "linear-gradient(310deg, #125B5C 0%, #179D9E 100%)",
    "linear-gradient(299deg, #4E7720 0%, #74B72B 100%)",
    "linear-gradient(304deg, #860098 0%, #E62BFF 100%)",
  ];
  return colorPalette[index % colorPalette.length];
};
