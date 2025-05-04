export const colors = () => {
    const colorList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    const colorHexFirst = Math.floor(Math.random() * 15);
    const colorHexSecond = Math.floor(Math.random() * 15);
    const colorHexFirst1 = Math.floor(Math.random() * 15);
    const colorHexSecond1 = Math.floor(Math.random() * 15);
    const colorHexFirst2 = Math.floor(Math.random() * 15);
    const colorHexSecond2 = Math.floor(Math.random() * 15);
    return `#${colorList[colorHexFirst]}${colorList[colorHexSecond]}${colorList[colorHexFirst1]}${colorList[colorHexSecond1]}${colorList[colorHexFirst2]}${colorList[colorHexSecond2]}`;
};
//# sourceMappingURL=colors.js.map