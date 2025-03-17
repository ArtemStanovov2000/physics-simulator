export class BaseRock {
    data: {
        data: {
            xStart: number;
            yStart: number;
        }[];
        color: string;
        fill: string;
    }[]
    coordinates: {
        x: number;
        y: number;
    }
    speedY: number
    speedX: number
    speedWindowY: number
    speedWindowX: number
    Zindex: number
    speed: number

    constructor(coordinates: { x: number, y: number }) {
        this.data = [
            {
                data: [
                    {
                        xStart: -19.0789,
                        yStart: 13.8568
                    },
                    {
                        xStart: 28.9647,
                        yStart: 19.3924
                    },
                    {
                        xStart: 36.9319,
                        yStart: 11.5821
                    },
                    {
                        xStart: 17.9527,
                        yStart: 5.8004
                    },
                    {
                        xStart: -8.8277,
                        yStart: 7.839
                    },
                ],
                color: "#9e9381",
                fill: "#9e9381"
            },
            {
                data: [
                    {
                        xStart: 0.6478,
                        yStart: -11.7995,
                    },
                    {
                        xStart: 17.9527,
                        yStart: 5.8004,
                    },
                    {
                        xStart: 36.9319,
                        yStart: 11.5821,
                    },
                    {
                        xStart: 41.3222,
                        yStart: 6.5834,
                    },
                    {
                        xStart: 34.0507,
                        yStart: -8.2139,
                    },
                    {
                        xStart: 30.7135,
                        yStart: -10.8821,
                    },
                    {
                        xStart: 14.2325,
                        yStart: -15.5041,
                    },
                ],
                color: "#595146",
                fill: "#595146"
            },
            {
                data: [
                    {
                        xStart: -10.6162,
                        yStart: -5.3427,
                    },
                    {
                        xStart: -12.3906,
                        yStart: -2.8834,
                    },
                    {
                        xStart: -9.7235,
                        yStart: 3.4127,
                    },
                    {
                        xStart: -8.8277,
                        yStart: 7.839,
                    },
                    {
                        xStart: 17.9527,
                        yStart: 5.8004,
                    },
                    {
                        xStart: 11.045,
                        yStart: -1.2251,
                    },
                    {
                        xStart: 0.6478,
                        yStart: -11.7995,
                    },
                    {
                        xStart: -7.6667,
                        yStart: -6.4798,
                    },
                ],
                color: "#aca08c",
                fill: "#aca08c"
            },
            {
                data: [
                    {
                        xStart: -20.279,
                        yStart: 7.7082,
                    },
                    {
                        xStart: -19.0789,
                        yStart: 13.8568,
                    },
                    {
                        xStart: -8.8277,
                        yStart: 7.839,
                    },
                    {
                        xStart: -9.7235,
                        yStart: 3.4127,
                    },
                    {
                        xStart: -12.3906,
                        yStart: -2.8834,
                    },
                    {
                        xStart: -17.184,
                        yStart: 3.7602,
                    },
                ],
                color: "#988d7b",
                fill: "#988d7b"
            },
            {
                data: [
                    {
                        xStart: -31.2099,
                        yStart: -0.9534,
                    },
                    {
                        xStart: -20.279,
                        yStart: 7.7082,
                    },
                    {
                        xStart: -17.184,
                        yStart: 3.7602,
                    },
                    {
                        xStart: -10.6162,
                        yStart: -5.3427,
                    },
                    {
                        xStart: -18.6091,
                        yStart: -8.0364,
                    },
                    {
                        xStart: -23.0393,
                        yStart: -10.4205,
                    },
                    {
                        xStart: -28.1821,
                        yStart: -6.3644,
                    },
                ],
                color: "#a49886",
                fill: "#a49886"
            },
            {
                data: [
                    {
                        xStart: -31.2099,
                        yStart: -0.9534,
                    },
                    {
                        xStart: -30.9364,
                        yStart: -8.1759,
                    },
                    {
                        xStart: -18.5198,
                        yStart: -17.9372,
                    },
                    {
                        xStart: -21.7409,
                        yStart: -12.9008,
                    },
                    {
                        xStart: -23.0393,
                        yStart: -10.4205,
                    },
                    {
                        xStart: -28.1821,
                        yStart: -6.3644,
                    },
                ],
                color: "#988d7b",
                fill: "#988d7b"
            },
            {
                data: [
                    {
                        xStart: -18.5198,
                        yStart: -17.9372,
                    },
                    {
                        xStart: -21.7409,
                        yStart: -12.9008,
                    },
                    {
                        xStart: -23.0393,
                        yStart: -10.4205,
                    },
                    {
                        xStart: -18.6091,
                        yStart: -8.0364,
                    },
                    {
                        xStart: -10.6162,
                        yStart: -5.3427,
                    },
                    {
                        xStart: -7.6667,
                        yStart: -6.4798,
                    },
                    {
                        xStart: 0.6478,
                        yStart: -11.7995,
                    },
                    {
                        xStart: -15.1813,
                        yStart: -17.4953,
                    },
                ],
                color: "#9c9180",
                fill: "#9c9180"
            },
            {
                data: [
                    {
                        xStart: -18.5198,
                        yStart: -17.9372,
                    },
                    {
                        xStart: -15.1813,
                        yStart: -17.4953,
                    },
                    {
                        xStart: 0.6478,
                        yStart: -11.7995,
                    },
                    {
                        xStart: 14.2325,
                        yStart: -15.5041,
                    },
                    {
                        xStart: 1.9116,
                        yStart: -20.114,
                    },
                    {
                        xStart: -9.8512,
                        yStart: -19.4364,
                    },
                ],
                color: "#473f34",
                fill: "#473f34"
            },
        ]
        this.coordinates = coordinates
        this.speedY = 0
        this.speedX = 0
        this.speedWindowY = 0
        this.speedWindowX = 0
        this.Zindex = 1
        this.speed = 0
    }

    renderElement(ctx: CanvasRenderingContext2D | null | undefined) {
        if (ctx) {
            for (let i = 0; i < this.data.length; i++) {
                for (let k = 0; k < this.data[i].data.length; k++) {
                    if (k === 0) {
                        ctx.beginPath();
                        ctx.moveTo(
                            this.data[i].data[k].xStart + this.coordinates.x,
                            this.data[i].data[k].yStart * -1 + this.coordinates.y
                        );
                    }
                    ctx.lineTo(
                        this.data[i].data[k].xStart + this.coordinates.x,
                        this.data[i].data[k].yStart * -1 + this.coordinates.y
                    );
                    if (k === this.data[i].data.length - 1) {
                        ctx.strokeStyle = this.data[i].color;
                        ctx.closePath();
                        ctx.lineWidth = 1
                        ctx.fillStyle = this.data[i].fill;
                        ctx.fill();
                        ctx.stroke();
                    }
                }
            }
        }
    }

    setCoordinates(x: number, y: number) {
        this.coordinates.x = x
        this.coordinates.y = y
    }
}