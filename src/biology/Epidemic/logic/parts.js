export const parts = [];
const COUNT_PARTH = 2000;
for (let i = 0; i < COUNT_PARTH; i++) {
    parts.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: 0,
        speedY: 0,
        size: 2,
        isSick: "noSick",
        color: "#b3b3b3"
    });
}
parts[2].color = "#ff5252";
parts[2].isSick = "sick";
parts[2].size = 3;
export const restart = () => {
    for (let i = 0; i < parts.length; i++) {
        parts[i].color = "#b3b3b3";
        parts[i].isSick = "noSick";
        parts[i].size = 2;
        parts[i].speedX = 0;
        parts[i].speedY = 0;
    }
    parts[2].color = "#ff5252";
    parts[2].isSick = "sick";
    parts[2].size = 3;
};
//# sourceMappingURL=parts.js.map