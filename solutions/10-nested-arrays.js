// BEGIN
export const getSuperSeriesWinner = (arr) => {
    let victoriesUssr = 0;
    let victoriesCanada = 0;
    for (const gameScore of arr) {
      if (gameScore[0] === gameScore[1]) {
        continue;
      } else if (gameScore[0] > gameScore[1]){
        victoriesCanada += 1;
      } else {
        victoriesUssr += 1;
      }
    }
    if (victoriesCanada === victoriesUssr) {
      return null;
    } else if (victoriesCanada > victoriesUssr) {
      return 'canada';
    } else {
      return 'ussr';
    }
} 

export default getSuperSeriesWinner;
// END