export const groupBy = (key: string, arr?: Object[]) => {
  const resultObj: any = {};
  arr!.forEach((arrItem: any) => {
    if (!resultObj[arrItem[key]]) {
      resultObj[arrItem[key]] = [];
    }
    resultObj[arrItem[key]].push(arrItem);
  });
  return resultObj;
};

export const getRandomHex = () => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
};
