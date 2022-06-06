
export let designer = false;

export const canvasConfig = {
    borderColor: "#00c3f9",
    cornerColor: "#00c3f9",
    cornerStrokeColor: "#ffffff",
    cornerStyle: "circle",
    minScaleLimit: 0,
    lockScalingFlip: true,
    selectionDashArray: [5, 0],
    borderDashArray: [5, 5],
    cornerDashArray: [2, 0],
    borderScaleFactor: 1,
    cornerSize: 15,
    transparentCorners: false,
    centeredRotation: true,
    preserveObjectStacking: true,
    // imageSmoothingEnabled: true
    // interactive: false
};

export const canvasBorderOffset = 10;
export const isObjectSelectable = designer ? true : false;
export const custom_attribute = ['id', 'contentType', 'scaleMode', 'fontName', 'fontSrc', 'sizeType', 'text', 'locked', 'gradientAngle', 'isGradientInCenter', 'padding'];
export const defaultFontFamily = {
    "fontPath": "fonts/Roboto-Regular.ttf",
    "fontName": "Roboto-Regular",
    "fontLabel": "Roboto-Regular",
    "className": "",
    "image": "",
    "fontSrc": "assets/fonts/Roboto-Regular.ttf",
    "catalogType": "Misc"
};

export const defaultGradientArray = [
    { color: '#000', stop: 0, id: 0 },
    { color: '#fff', stop: 1, id: 1 }
];

export const gradientList = [
    {
        "cssColor": "linear-gradient(90deg, #B6315D 0%, #F5867B 100%)",
        "colorArray": [
            {
                "color": "#B6315D",
                "stop": 0
            },
            {
                "color": "#F5867B",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF3E46 0%, #FFAEAE 100%)",
        "colorArray": [
            {
                "color": "#FF3E46",
                "stop": 0
            },
            {
                "color": "#FFAEAE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF9B9F 0%, #FACFC3 100%)",
        "colorArray": [
            {
                "color": "#FF9B9F",
                "stop": 0
            },
            {
                "color": "#FACFC3",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #ffb6b9 0%, #facfc3 100%)",
        "colorArray": [
            {
                "color": "#ffb6b9",
                "stop": 0
            },
            {
                "color": "#facfc3",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #F5576C 0%, #F091F7 100%)",
        "colorArray": [
            {
                "color": "#F5576C",
                "stop": 0
            },
            {
                "color": "#F091F7",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #F5576C 0%, #FFA3E3 100%)",
        "colorArray": [
            {
                "color": "#F5576C",
                "stop": 0
            },
            {
                "color": "#FFA3E3",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFA1DF 0%, #FECFF1 100%)",
        "colorArray": [
            {
                "color": "#FFA1DF",
                "stop": 0
            },
            {
                "color": "#FECFF1",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FDCBF1 0%, #E6DEE9 100%)",
        "colorArray": [
            {
                "color": "#FDCBF1",
                "stop": 0
            },
            {
                "color": "#E6DEE9",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF6233 0%, #F6D365 100%)",
        "colorArray": [
            {
                "color": "#FF6233",
                "stop": 0
            },
            {
                "color": "#F6D365",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF8F6C 0%, #FFE080 100%)",
        "colorArray": [
            {
                "color": "#FF8F6C",
                "stop": 0
            },
            {
                "color": "#FFE080",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFB69F 0%, #FFEBAC 100%)",
        "colorArray": [
            {
                "color": "#FFB69F",
                "stop": 0
            },
            {
                "color": "#FFEBAC",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFD1C3 0%, #FFF4D4 100%)",
        "colorArray": [
            {
                "color": "#FFD1C3",
                "stop": 0
            },
            {
                "color": "#FFF4D4",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #0BA360 0%, #3BBA91 100%)",
        "colorArray": [
            {
                "color": "#0BA360",
                "stop": 0
            },
            {
                "color": "#3BBA91",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #01BC43 0%, #47FDA0 100%)",
        "colorArray": [
            {
                "color": "#01BC43",
                "stop": 0
            },
            {
                "color": "#47FDA0",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #45FB9D 0%, #C7FFE2 100%)",
        "colorArray": [
            {
                "color": "#45FB9D",
                "stop": 0
            },
            {
                "color": "#C7FFE2",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #BEFFDE 0%, #DDFFEE 100%)",
        "colorArray": [
            {
                "color": "#BEFFDE",
                "stop": 0
            },
            {
                "color": "#DDFFEE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #B11D75 0%, #FD5EBD 100%)",
        "colorArray": [
            {
                "color": "#B11D75",
                "stop": 0
            },
            {
                "color": "#FD5EBD",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF51B9 0%, #FFA0D9 100%)",
        "colorArray": [
            {
                "color": "#FF51B9",
                "stop": 0
            },
            {
                "color": "#FFA0D9",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF99D6 0%, #FFC9E9 100%)",
        "colorArray": [
            {
                "color": "#FF99D6",
                "stop": 0
            },
            {
                "color": "#FFC9E9",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFB4E1 0%, #FFE0F2 100%)",
        "colorArray": [
            {
                "color": "#FFB4E1",
                "stop": 0
            },
            {
                "color": "#FFE0F2",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #5272DF 0%, #34C3F3 100%)",
        "colorArray": [
            {
                "color": "#5272DF",
                "stop": 0
            },
            {
                "color": "#34C3F3",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #6F86D6 0%, #48C5EF 100%)",
        "colorArray": [
            {
                "color": "#6F86D6",
                "stop": 0
            },
            {
                "color": "#48C5EF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #8DA4F2 0%, #78DBFC 100%)",
        "colorArray": [
            {
                "color": "#8DA4F2",
                "stop": 0
            },
            {
                "color": "#78DBFC",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #B3C4FF 0%, #B9EDFF 100%)",
        "colorArray": [
            {
                "color": "#B3C4FF",
                "stop": 0
            },
            {
                "color": "#B9EDFF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #871C11 0%, #B14C1C 100%)",
        "colorArray": [
            {
                "color": "#871C11",
                "stop": 0
            },
            {
                "color": "#B14C1C",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #AC471B 0%, #D68B66 100%)",
        "colorArray": [
            {
                "color": "#AC471B",
                "stop": 0
            },
            {
                "color": "#D68B66",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #CD6D44 0%, #F2B699 100%)",
        "colorArray": [
            {
                "color": "#CD6D44",
                "stop": 0
            },
            {
                "color": "#F2B699",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #DE8F6C 0%, #FFDDCC 100%)",
        "colorArray": [
            {
                "color": "#DE8F6C",
                "stop": 0
            },
            {
                "color": "#FFDDCC",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #B224EF 0%, #7677FF 100%)",
        "colorArray": [
            {
                "color": "#B224EF",
                "stop": 0
            },
            {
                "color": "#7677FF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #D77BFF 0%, #9E9EFF 100%)",
        "colorArray": [
            {
                "color": "#D77BFF",
                "stop": 0
            },
            {
                "color": "#9E9EFF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #CC63FF 0%, #BBE2FC 100%)",
        "colorArray": [
            {
                "color": "#CC63FF",
                "stop": 0
            },
            {
                "color": "#BBE2FC",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #DAABFF 0%, #D5F4FE 100%)",
        "colorArray": [
            {
                "color": "#DAABFF",
                "stop": 0
            },
            {
                "color": "#D5F4FE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #39EB4E 0%, #01B7E6 100%)",
        "colorArray": [
            {
                "color": "#39EB4E",
                "stop": 0
            },
            {
                "color": "#01B7E6",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #67FF78 0%, #5ADCFE 100%)",
        "colorArray": [
            {
                "color": "#67FF78",
                "stop": 0
            },
            {
                "color": "#5ADCFE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #A7FFB0 0%, #A9EDFE 100%)",
        "colorArray": [
            {
                "color": "#A7FFB0",
                "stop": 0
            },
            {
                "color": "#A9EDFE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #BDFFC4 0%, #CDF5FE 100%)",
        "colorArray": [
            {
                "color": "#BDFFC4",
                "stop": 0
            },
            {
                "color": "#CDF5FE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFC250 0%, #B430D0 100%)",
        "colorArray": [
            {
                "color": "#FFC250",
                "stop": 0
            },
            {
                "color": "#B430D0",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFCF78 0%, #DA59F5 100%)",
        "colorArray": [
            {
                "color": "#FFCF78",
                "stop": 0
            },
            {
                "color": "#DA59F5",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFE2AD 0%, #EA86FE 100%)",
        "colorArray": [
            {
                "color": "#FFE2AD",
                "stop": 0
            },
            {
                "color": "#EA86FE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFEDCE 0%, #F0A9FF 100%)",
        "colorArray": [
            {
                "color": "#FFEDCE",
                "stop": 0
            },
            {
                "color": "#F0A9FF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 255, 255) 0%, rgb(225, 230, 236) 100%)",
        "colorArray": [
            {
                "color": "rgb(255,255,255)",
                "stop": 0
            },
            {
                "color": "rgb(227,226,226)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(216, 223, 227) 0%, rgb(174, 184, 189) 100%)",
        "colorArray": [
            {
                "color": "rgb(229,234,236)",
                "stop": 0
            },
            {
                "color": "rgb(175,185,190)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 180, 61) 0%, rgb(255, 142, 61) 100%)",
        "colorArray": [
            {
                "color": "rgb(255,180,62)",
                "stop": 0
            },
            {
                "color": "rgb(255,143,61)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 230, 93) 0%, rgb(247, 195, 74) 100%)",
        "colorArray": [
            {
                "color": "rgb(255,229,92)",
                "stop": 0
            },
            {
                "color": "rgb(247,195,74)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(203, 255, 90) 0%, rgb(129, 213, 69) 100%)",
        "colorArray": [
            {
                "color": "rgb(200,252,88)",
                "stop": 0
            },
            {
                "color": "rgb(133,221,69)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(81, 189, 73) 0%, rgb(55, 134, 49) 100%) ",
        "colorArray": [
            {
                "color": "rgb(81, 189, 73)",
                "stop": 0
            },
            {
                "color": "rgb(55,134,49)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(115, 229, 220) 0%, rgb(52, 224, 210) 100%) ",
        "colorArray": [
            {
                "color": "rgb(115, 229, 220)",
                "stop": 0
            },
            {
                "color": "rgb(52, 224, 210)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(96, 204, 255) 0%, rgb(0, 156, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(96,204,255)",
                "stop": 0
            },
            {
                "color": "rgb(0, 156, 255)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(0, 132, 255) 0%, rgb(13, 85, 185) 100%) ",
        "colorArray": [
            {
                "color": "rgb(0,132,255)",
                "stop": 0
            },
            {
                "color": "rgb(13, 85, 185)",
                "stop": 1
            }
        ],
        "angle": 315,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(91, 43, 127) 0%, rgb(45, 20, 64) 100%) ",
        "colorArray": [
            {
                "color": "rgb(91,43,127)",
                "stop": 0
            },
            {
                "color": "rgb(45, 20, 64)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(126, 104, 223) 0%, rgb(83, 61, 178) 100%) ",
        "colorArray": [
            {
                "color": "rgb(126,104,223)",
                "stop": 0
            },
            {
                "color": "rgb(83, 61, 178)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(243, 234, 255) 0%, rgb(219, 194, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(243,234,255)",
                "stop": 0
            },
            {
                "color": "rgb(219,194,255)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 125, 164) 0%, rgb(246, 52, 111) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255,125,164)",
                "stop": 0
            },
            {
                "color": "rgb(246, 52, 111)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 101, 105) 0%, rgb(239, 58, 63) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 101, 105)",
                "stop": 0
            },
            {
                "color": "rgb(239, 58, 63)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(246, 74, 34) 0%, rgb(199, 9, 15) 100%) ",
        "colorArray": [
            {
                "color": "rgb(246, 74, 34)",
                "stop": 0
            },
            {
                "color": "rgb(199, 9, 15)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(82, 65, 57) 0%, rgb(51, 41, 36) 100%) ",
        "colorArray": [
            {
                "color": "rgb(82, 65, 57)",
                "stop": 0
            },
            {
                "color": "rgb(51, 41, 36)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(165, 133, 87) 0%, rgb(128, 104, 70) 100%) ",
        "colorArray": [
            {
                "color": "rgb(165, 133, 87)",
                "stop": 0
            },
            {
                "color": "rgb(128, 104, 70)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(229, 186, 125) 0%, rgb(191, 145, 80) 100%) ",
        "colorArray": [
            {
                "color": "rgb(229, 186, 125)",
                "stop": 0
            },
            {
                "color": "rgb(191, 145, 80)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 248, 238) 0%, rgb(245, 231, 211) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 248, 238)",
                "stop": 0
            },
            {
                "color": "rgb(245, 231, 211)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(169, 188, 198) 0%, rgb(108, 123, 131) 100%) ",
        "colorArray": [
            {
                "color": "rgb(169, 188, 198)",
                "stop": 0
            },
            {
                "color": "rgb(108, 123, 131)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(4, 187, 198) 0%, rgb(144, 58, 243) 100%) ",
        "colorArray": [
            {
                "color": "rgb(4, 187, 198)",
                "stop": 0
            },
            {
                "color": "rgb(144, 58, 243)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(68, 222, 255) 0%, rgb(41, 66, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(68, 222, 255)",
                "stop": 0
            },
            {
                "color": "rgb(41, 66, 255)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(68, 222, 255) 0%, rgb(33, 255, 126) 100%) ",
        "colorArray": [
            {
                "color": "rgb(68, 222, 255)",
                "stop": 0
            },
            {
                "color": "rgb(33, 255, 126)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(245, 231, 211) 0%, rgb(255, 252, 84) 100%) ",
        "colorArray": [
            {
                "color": "rgb(245, 231, 211)",
                "stop": 0
            },
            {
                "color": "rgb(255, 252, 84)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(237, 160, 91) 0%, rgb(197, 37, 25) 100%) ",
        "colorArray": [
            {
                "color": "rgb(237, 160, 91)",
                "stop": 0
            },
            {
                "color": "rgb(197, 37, 25)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(234, 248, 235) 0%, rgb(139, 251, 249) 100%) ",
        "colorArray": [
            {
                "color": "rgb(234, 248, 235)",
                "stop": 0
            },
            {
                "color": "rgb(139, 251, 249)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(226, 241, 251) 0%, rgb(238, 168, 175) 100%) ",
        "colorArray": [
            {
                "color": "rgb(226, 241, 251)",
                "stop": 0
            },
            {
                "color": "rgb(238, 168, 175)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(38, 248, 253) 0%, rgb(195, 186, 248) 100%) ",
        "colorArray": [
            {
                "color": "rgb(38, 248, 253)",
                "stop": 0
            },
            {
                "color": "rgb(195, 186, 248)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(183, 225, 232) 0%, rgb(255, 214, 245) 100%) ",
        "colorArray": [
            {
                "color": "rgb(183, 225, 232)",
                "stop": 0
            },
            {
                "color": "rgb(255, 214, 245)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(81, 102, 199) 0%, rgb(30, 178, 205) 100%) ",
        "colorArray": [
            {
                "color": "rgb(81, 102, 199)",
                "stop": 0
            },
            {
                "color": "rgb(30, 178, 205)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(238, 243, 245) 0%, rgb(249, 61, 95) 100%) ",
        "colorArray": [
            {
                "color": "rgb(238, 243, 245)",
                "stop": 0
            },
            {
                "color": "rgb(249, 61, 95)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "radial-gradient(rgb(216, 223, 227) 0%, rgb(174,184, 189) 100%) ",
        "colorArray": [
            {
                "color": "rgb(216, 223, 227)",
                "stop": 0
            },
            {
                "color": "rgb(174, 184, 189)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 255, 255) 0%, rgb(225, 230, 236) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 255, 255)",
                "stop": 0
            },
            {
                "color": "rgb(225, 230, 236)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(216, 223, 227) 0%, rgb(174, 184, 189) 100%) ",
        "colorArray": [
            {
                "color": "rgb(216, 223, 227)",
                "stop": 0
            },
            {
                "color": "rgb(174, 184, 189)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(42, 42, 42) 0%, rgb(0, 0, 0) 100%) ",
        "colorArray": [
            {
                "color": "rgb(42, 42, 42)",
                "stop": 0
            },
            {
                "color": "rgb(0, 0, 0)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 230, 93) 0%, rgb(247, 195, 74) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 230, 93)",
                "stop": 0
            },
            {
                "color": "rgb(247, 195, 74)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(203, 255, 90) 0%, rgb(129, 213, 69) 100%) ",
        "colorArray": [
            {
                "color": "rgb(203, 255, 90)",
                "stop": 0
            },
            {
                "color": "rgb(129, 213, 69)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 180, 61) 0%, rgb(255, 142, 61) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 180, 61)",
                "stop": 0
            },
            {
                "color": "rgb(255, 142, 61)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(81, 189, 73) 0%, rgb(55, 134, 49) 100%) ",
        "colorArray": [
            {
                "color": "rgb(81, 189, 73)",
                "stop": 0
            },
            {
                "color": "rgb(55, 134, 49)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(115, 229, 220) 0%, rgb(52, 224, 210) 100%) ",
        "colorArray": [
            {
                "color": "rgb(115, 229, 220)",
                "stop": 0
            },
            {
                "color": "rgb(52, 224, 210)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(96, 204, 255) 0%, rgb(0, 156, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(96, 204, 255)",
                "stop": 0
            },
            {
                "color": "rgb(0, 156, 255)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(29, 62, 89) 0%, rgb(11, 37, 61) 100%) ",
        "colorArray": [
            {
                "color": "rgb(29, 62, 89)",
                "stop": 0
            },
            {
                "color": "rgb(11, 37, 61)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(0, 132, 255) 0%, rgb(13, 85, 185) 100%) ",
        "colorArray": [
            {
                "color": "rgb(0, 132, 255)",
                "stop": 0
            },
            {
                "color": "rgb(13, 85, 185)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(0, 132, 255) 0%, rgb(13, 85, 185) 100%) ",
        "colorArray": [
            {
                "color": "rgb(0, 132, 255)",
                "stop": 0
            },
            {
                "color": "rgb(13, 85, 185)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(91, 43, 127) 0%, rgb(45, 20, 64) 100%) ",
        "colorArray": [
            {
                "color": "rgb(91, 43, 127)",
                "stop": 0
            },
            {
                "color": "rgb(45, 20, 64)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(126, 104, 223) 0%, rgb(83, 61, 178) 100%) ",
        "colorArray": [
            {
                "color": "rgb(126, 104, 223)",
                "stop": 0
            },
            {
                "color": "rgb(83, 61, 178)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(243, 234, 255) 0%, rgb(219, 194, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(243, 234, 255)",
                "stop": 0
            },
            {
                "color": "rgb(219, 194, 255)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(162, 141, 255) 0%, rgb(121, 97, 230) 100%) ",
        "colorArray": [
            {
                "color": "rgb(162, 141, 255)",
                "stop": 0
            },
            {
                "color": "rgb(121, 97, 230)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 125, 164) 0%, rgb(246, 52, 111) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 125, 164)",
                "stop": 0
            },
            {
                "color": "rgb(246, 52, 111)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 101, 105) 0%, rgb(239, 58, 63) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 101, 105)",
                "stop": 0
            },
            {
                "color": "rgb(239, 58, 63)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(246, 74, 34) 0%, rgb(199, 9, 15) 100%) ",
        "colorArray": [
            {
                "color": "rgb(246, 74, 34)",
                "stop": 0
            },
            {
                "color": "rgb(199, 9, 15)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(229, 186, 125) 0%, rgb(191, 145, 80) 100%) ",
        "colorArray": [
            {
                "color": "rgb(229, 186, 125)",
                "stop": 0
            },
            {
                "color": "rgb(191, 145, 80)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(169, 188, 198) 0%, rgb(108, 123, 131) 100%) ",
        "colorArray": [
            {
                "color": "rgb(169, 188, 198)",
                "stop": 0
            },
            {
                "color": "rgb(108, 123, 131)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 248, 238) 0%, rgb(245, 231, 211) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 248, 238)",
                "stop": 0
            },
            {
                "color": "rgb(245, 231, 211)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(165, 133, 87) 0%, rgb(128, 104, 70) 100%) ",
        "colorArray": [
            {
                "color": "rgb(165, 133, 87)",
                "stop": 0
            },
            {
                "color": "rgb(128, 104, 70)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(82, 65, 57) 0%, rgb(51, 41, 36) 100%) ",
        "colorArray": [
            {
                "color": "rgb(82, 65, 57)",
                "stop": 0
            },
            {
                "color": "rgb(51, 41, 36)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(68, 222, 255) 0%, rgb(41, 66, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(68, 222, 255)",
                "stop": 0
            },
            {
                "color": "rgb(41, 66, 255)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(4, 187, 198) 0%, rgb(144, 58, 243) 100%) ",
        "colorArray": [
            {
                "color": "rgb(4, 187, 198)",
                "stop": 0
            },
            {
                "color": "rgb(144, 58, 243)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(68, 222, 255) 0%, rgb(33, 255, 126) 100%) ",
        "colorArray": [
            {
                "color": "rgb(68, 222, 255)",
                "stop": 0
            },
            {
                "color": "rgb(33, 255, 126)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(245, 231, 211) 0%, rgb(255, 252, 84) 100%) ",
        "colorArray": [
            {
                "color": "rgb(245, 231, 211)",
                "stop": 0
            },
            {
                "color": "rgb(255, 252, 84)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(237, 160, 91) 0%, rgb(197, 37, 25) 100%) ",
        "colorArray": [
            {
                "color": "rgb(237, 160, 91)",
                "stop": 0
            },
            {
                "color": "rgb(197, 37, 25)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(234, 248, 235) 0%, rgb(139, 251, 249) 100%) ",
        "colorArray": [
            {
                "color": "rgb(234, 248, 235)",
                "stop": 0
            },
            {
                "color": "rgb(139, 251, 249)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(226, 241, 251) 0%, rgb(238, 168, 175) 100%) ",
        "colorArray": [
            {
                "color": "rgb(226, 241, 251)",
                "stop": 0
            },
            {
                "color": "rgb(238, 168, 175)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(38, 248, 253) 0%, rgb(195, 186, 248) 100%) ",
        "colorArray": [
            {
                "color": "rgb(38, 248, 253)",
                "stop": 0
            },
            {
                "color": "rgb(195, 186, 248)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(183, 225, 232) 0%, rgb(255, 214, 245) 100%) ",
        "colorArray": [
            {
                "color": "rgb(183, 225, 232)",
                "stop": 0
            },
            {
                "color": "rgb(255, 214, 245)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(238, 243, 245) 0%, rgb(249, 61, 95) 100%) ",
        "colorArray": [
            {
                "color": "rgb(238, 243, 245)",
                "stop": 0
            },
            {
                "color": "rgb(249, 61, 95)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(81, 102, 199) 0%, rgb(30, 178, 205) 100%) ",
        "colorArray": [
            {
                "color": "rgb(81, 102, 199)",
                "stop": 0
            },
            {
                "color": "rgb(30, 178, 205)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    }
]

export const sizes = [
    {
        sizeName: "Medium Rectangle",
        sizeType: "medium-rectangle",
        icon: "assets/icons/svg8.svg",
        width: 300,
        height: 250,
        selected: false
    },
    {
        sizeName: "Large Rectangle",
        sizeType: "large-rectangle",
        icon: "assets/icons/svg9.svg",
        width: 336,
        height: 280,
        selected: false
    },
    {
        sizeName: "Leaderboard",
        sizeType: "leaderboard",
        icon: "assets/icons/svg10.svg",
        width: 728,
        height: 90,
        selected: false
    },
    {
        sizeName: "Mobile",
        sizeType: "mobile",
        icon: "assets/icons/svg11.svg",
        width: 320,
        height: 50,
        selected: false
    },
    {
        sizeName: "Large Mobile",
        sizeType: "large-mobile",
        icon: "assets/icons/svg12.svg",
        width: 320,
        height: 100,
        selected: false
    },
    {
        sizeName: "Half Page",
        sizeType: "half-page",
        icon: "assets/icons/svg13.svg",
        width: 300,
        height: 600,
        selected: false
    },
    {
        sizeName: "Wide Skyscrapper",
        sizeType: "wide-skyscrapper",
        icon: "assets/icons/svg14.svg",
        width: 160,
        height: 600,
        selected: false
    },
    {
        sizeName: "Skyscrapper",
        sizeType: "skyscrapper",
        icon: "assets/icons/svg15.svg",
        width: 120,
        height: 600,
        selected: false
    },
    {
        sizeName: "Square",
        sizeType: "square",
        icon: "assets/icons/svg16.svg",
        width: 250,
        height: 250,
        selected: false
    },
    {
        sizeName: "Small Square",
        sizeType: "small-square",
        icon: "assets/icons/svg17.svg",
        width: 200,
        height: 200,
        selected: false
    },
    {
        sizeName: "Main Banner",
        sizeType: "main-banner",
        icon: "assets/icons/svg18.svg",
        width: 468,
        height: 60,
        selected: false
    },
    {
        sizeName: "Portrait",
        sizeType: "portrait",
        icon: "assets/icons/svg19.svg",
        width: 300,
        height: 1050,
        selected: false
    },
    {
        sizeName: "Billboard",
        sizeType: "billboard",
        icon: "assets/icons/svg20.svg",
        width: 970,
        height: 250,
        selected: false
    },
    {
        sizeName: "Large Leaderboard",
        sizeType: "large-leaderboard",
        icon: "assets/icons/svg21.svg",
        width: 970,
        height: 90,
        selected: false
    },
    {
        sizeName: "Half Banner",
        sizeType: "half-banner",
        icon: "assets/icons/svg22.svg",
        width: 234,
        height: 60,
        selected: false
    },
    {
        sizeName: "Vertical Banner",
        sizeType: "vertical-banner",
        icon: "assets/icons/svg23.svg",
        width: 120,
        height: 240,
        selected: false
    },
    {
        sizeName: "Small Rectangle",
        sizeType: "small-rectangle",
        icon: "assets/icons/svg24.svg",
        width: 180,
        height: 150,
        selected: false
    },
    {
        sizeName: "Facebook Cover",
        sizeType: "facebook-cover",
        icon: "assets/icons/svg25.svg",
        width: 851,
        height: 315,
        selected: false
    },
    {
        sizeName: "Facebook Post",
        sizeType: "facebook-post",
        icon: "assets/icons/svg26.svg",
        width: 1200,
        height: 900,
        selected: false
    },
    {
        sizeName: "FAcebook Ad",
        sizeType: "facebook-ad",
        icon: "assets/icons/svg27.svg",
        width: 1200,
        height: 628,
        selected: false
    },
    {
        sizeName: "Page like Ad",
        sizeType: "page-like-ad",
        icon: "assets/icons/svg28.svg",
        width: 1200,
        height: 444,
        selected: false
    },
    {
        sizeName: "Click To Website Ad",
        sizeType: "click-to-website-ad",
        icon: "assets/icons/svg29.svg",
        width: 600,
        height: 600,
        selected: false
    },
    {
        sizeName: "Twitter Cover",
        sizeType: "twitter-cover",
        icon: "assets/icons/svg30.svg",
        width: 1500,
        height: 500,
        selected: false
    },
    {
        sizeName: "Twitter Post",
        sizeType: "twitter-post",
        icon: "assets/icons/svg31.svg",
        width: 1024,
        height: 512,
        selected: false
    },
    {
        sizeName: "Youtube Channel Cover",
        sizeType: "youtube-channel-cover",
        icon: "assets/icons/svg32.svg",
        width: 2560,
        height: 1040,
        selected: false
    },
    {
        sizeName: "Youtube Video Thumbnail",
        sizeType: "youtube-video-thumbnail",
        icon: "assets/icons/svg33.svg",
        width: 1280,
        height: 720,
        selected: false
    },
    {
        sizeName: "Instagram Post",
        sizeType: "instagram-post",
        icon: "assets/icons/svg34.svg",
        width: 1080,
        height: 1080,
        selected: false
    },
    {
        sizeName: "Profile Picture",
        sizeType: "profile-picture",
        icon: "assets/icons/svg35.svg",
        width: 400,
        height: 400,
        selected: false
    },
    {
        sizeName: "Pinterest Post",
        sizeType: "pinterest-post",
        icon: "assets/icons/svg36.svg",
        width: 600,
        height: 1200,
        selected: false
    },
    {
        sizeName: "LinkedIn Cover",
        sizeType: "linkedin-cover",
        icon: "assets/icons/svg37.svg",
        width: 1584,
        height: 396,
        selected: false
    },
    {
        sizeName: "Story",
        sizeType: "story",
        icon: "assets/icons/svg38.svg",
        width: 1080,
        height: 1920,
        selected: false
    },
    {
        sizeName: "HD SlideShow",
        sizeType: "hd-slideshow",
        icon: "assets/icons/svg39.svg",
        width: 1920,
        height: 1080,
        selected: false
    },
    {
        sizeName: "SlideShow",
        sizeType: "slideshow",
        icon: "assets/icons/svg40.svg",
        width: 960,
        height: 720,
        selected: false
    },
    {
        sizeName: "Esty Cover",
        sizeType: "esty-cover",
        icon: "assets/icons/svg41.svg",
        width: 1200,
        height: 300,
        selected: false
    },
    {
        sizeName: "SoundCloud Cover",
        sizeType: "soundcloud-cover",
        icon: "assets/icons/svg42.svg",
        width: 2480,
        height: 520,
        selected: false
    },
    {
        sizeName: "Twitch Video Player Cover",
        sizeType: "twitch-video-player-cover",
        icon: "assets/icons/svg43.svg",
        width: 1920,
        height: 1080,
        selected: false
    },
    {
        sizeName: "Twitch Channel Cover",
        sizeType: "twitch-channel-cover",
        icon: "assets/icons/svg44.svg",
        width: 1200,
        height: 480,
        selected: false
    },
    {
        sizeName: "Logo",
        sizeType: "logo",
        icon: "assets/icons/svg55.svg",
        width: 800,
        height: 800,
        selected: false
    },
    {
        sizeName: "Presentation",
        sizeType: "presentation",
        icon: "assets/icons/svg57.svg",
        width: 1920,
        height: 1080,
        selected: false
    },
    {
        sizeName: "Album Cover",
        sizeType: "album-cover",
        icon: "assets/icons/svg58.svg",
        width: 1600,
        height: 1600,
        selected: false
    },
    {
        sizeName: "Book Cover",
        sizeType: "book-cover",
        icon: "assets/icons/svg59.svg",
        width: 1600,
        height: 2400,
        selected: false
    },
]

export const fontList = [
    {
        "fontPath": "fonts/font22.ttf",
        "fontName": "AdineKirnberg-Script",
        "fontLabel": "AdineKirnberg-Script",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font22.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/AGENCYB.ttf",
        "fontName": "AgencyFB-Bold",
        "fontLabel": "AgencyFB-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/AGENCYB.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/AGENCYR.ttf",
        "fontName": "AgencyFB-Reg",
        "fontLabel": "AgencyFB-Reg",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/AGENCYR.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/font38.ttf",
        "fontName": "AlphaEcho",
        "fontLabel": "AlphaEcho",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font38.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/American Typewriter Condensed.ttf",
        "fontName": "AmericanTypewriter-Condensed",
        "fontLabel": "AmericanTypewriter-Condensed",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/American Typewriter Condensed.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Andersans.ttf",
        "fontName": "Andersans",
        "fontLabel": "Andersans",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Andersans.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/anjelika_rose.ttf",
        "fontName": "AnjelikaRose",
        "fontLabel": "AnjelikaRose",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/anjelika_rose.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/style17.ttf",
        "fontName": "Aspire-DemiBold",
        "fontLabel": "Aspire-DemiBold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/style17.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Avenir LT Std  Medium.ttf",
        "fontName": "AvenirLTStd-Medium",
        "fontLabel": "AvenirLTStd-Medium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Avenir LT Std  Medium.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Avenir LT Std  Medium.ttf",
        "fontName": "AvenirLTStd-Black",
        "fontLabel": "AvenirLTStd-Black",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Avenir LT Std  Medium.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Avenir LT Std Roman.ttf",
        "fontName": "AvenirLTStd-Roman",
        "fontLabel": "AvenirLTStd-Roman",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Avenir LT Std Roman.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/style10.ttf",
        "fontName": "BacktoBlackDemo",
        "fontLabel": "BacktoBlackDemo",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/style10.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Baskerville MT Std Semibold.ttf",
        "fontName": "BaskervilleMTStd-SemiBd",
        "fontLabel": "BaskervilleMTStd-SemiBd",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Baskerville MT Std Semibold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/BASKVILL.ttf",
        "fontName": "BaskOldFace",
        "fontLabel": "BaskOldFace",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/BASKVILL.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/BeachType.ttf",
        "fontName": "BeachTypeMedium",
        "fontLabel": "BeachTypeMedium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/BeachType.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Bell Gothic Std Black.ttf",
        "fontName": "BellGothicStd-Black",
        "fontLabel": "BellGothicStd-Black",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Bell Gothic Std Black.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Bell Gothic Std Light.ttf",
        "fontName": "BellGothicStd-Bold",
        "fontLabel": "BellGothicStd-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Bell Gothic Std Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/BELL.ttf",
        "fontName": "BellMT",
        "fontLabel": "BellMT",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/BELL.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/font14.ttf",
        "fontName": "BlackJackRegular",
        "fontLabel": "BlackJackRegular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font14.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Blackout.ttf",
        "fontName": "Blackout",
        "fontLabel": "Blackout",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Blackout.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/font14.ttf",
        "fontName": "BlackChancery",
        "fontLabel": "BlackChancery",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font14.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Blanch Condensed Inline.ttf",
        "fontName": "Blanch-CondensedInline",
        "fontLabel": "Blanch-CondensedInline",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Blanch Condensed Inline.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Britanic.ttf",
        "fontName": "BritannicBold",
        "fontLabel": "BritannicBold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Britanic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/font20.ttf",
        "fontName": "BrockScript",
        "fontLabel": "BrockScript",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font20.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/cac_champagne.ttf",
        "fontName": "CACChampagne",
        "fontLabel": "CACChampagne",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/cac_champagne.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/CALIFR.ttf",
        "fontName": "CalifornianFB-Reg",
        "fontLabel": "CalifornianFB-Reg",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/CALIFR.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Chivo-Light.ttf",
        "fontName": "Chivo-Light",
        "fontLabel": "Chivo-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Chivo-Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/CoronetLTStd-Bold.ttf",
        "fontName": "CoronetLTStd-Bold",
        "fontLabel": "CoronetLTStd-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/CoronetLTStd-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/daunpenh.ttf",
        "fontName": "DaunPenh",
        "fontLabel": "DaunPenh",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/daunpenh.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Desiderata Normal.ttf",
        "fontName": "Desiderata-Normal",
        "fontLabel": "Desiderata-Normal",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Desiderata Normal.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Exo-Bold.otf",
        "fontName": "Exo-Bold",
        "fontLabel": "Exo-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Exo-Bold.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Exo-Light.otf",
        "fontName": "Exo-Light",
        "fontLabel": "Exo-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Exo-Light.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Exo-Regular.otf",
        "fontName": "Exo-Regular",
        "fontLabel": "Exo-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Exo-Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Filxgirl.ttf",
        "fontName": "FiolexGirls-Regular",
        "fontLabel": "FiolexGirls-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Filxgirl.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/FromWhereYouAre.ttf",
        "fontName": "FromWhereYouAre",
        "fontLabel": "FromWhereYouAre",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/FromWhereYouAre.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/GrandHotel-Regular_0.otf",
        "fontName": "GrandHotel-Regular",
        "fontLabel": "GrandHotel-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/GrandHotel-Regular_0.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Hagin Caps Medium.ttf",
        "fontName": "HaginCapsMedium",
        "fontLabel": "HaginCapsMedium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Hagin Caps Medium.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Hagin Caps Thin.ttf",
        "fontName": "HaginCapsThin",
        "fontLabel": "HaginCapsThin",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Hagin Caps Thin.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Lovelo Line Bold.ttf",
        "fontName": "LoveloLineBold",
        "fontLabel": "LoveloLineBold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Lovelo Line Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Lovelo Line Light.ttf",
        "fontName": "LoveloLineLight",
        "fontLabel": "LoveloLineLight",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Lovelo Line Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/LFAX.ttf",
        "fontName": "LucidaFax",
        "fontLabel": "LucidaFax",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/LFAX.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/LFAXI.ttf",
        "fontName": "LucidaFax-Italic",
        "fontLabel": "LucidaFax-Italic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/LFAXI.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/ufonts.com_lydian-cursive-bt.ttf",
        "fontName": "LydianCursiveBT-Regular",
        "fontLabel": "LydianCursiveBT-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/ufonts.com_lydian-cursive-bt.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Medusa Gothic.otf",
        "fontName": "MedusaGothic",
        "fontLabel": "MedusaGothic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Medusa Gothic.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/MinionPro-Regular.otf",
        "fontName": "MinionPro-Regular",
        "fontLabel": "MinionPro-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/MinionPro-Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Mtcorsva.ttf",
        "fontName": "MonotypeCorsiva",
        "fontLabel": "MonotypeCorsiva",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Mtcorsva.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Montserrat-ExtraLight.otf",
        "fontName": "Montserrat-ExtraLight",
        "fontLabel": "Montserrat-ExtraLight",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Montserrat-ExtraLight.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Montserrat-Light.otf",
        "fontName": "Montserrat-Light",
        "fontLabel": "Montserrat-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Montserrat-Light.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Montserrat-Medium.otf",
        "fontName": "Montserrat-Medium",
        "fontLabel": "Montserrat-Medium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Montserrat-Medium.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Montserrat-Regular.otf",
        "fontName": "Montserrat-Regular",
        "fontLabel": "Montserrat-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Montserrat-Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Offerings Regular.otf",
        "fontName": "Offerings",
        "fontLabel": "Offerings",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Offerings Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Regular.ttf",
        "fontName": "OpenSans",
        "fontLabel": "OpenSans",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Regular.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Bold.ttf",
        "fontName": "OpenSans-Bold",
        "fontLabel": "OpenSans-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-BoldItalic.ttf",
        "fontName": "OpenSans-BoldItalic",
        "fontLabel": "OpenSans-BoldItalic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-BoldItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-ExtraBold.ttf",
        "fontName": "OpenSans-Extrabold",
        "fontLabel": "OpenSans-Extrabold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-ExtraBold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-ExtraBoldItalic.ttf",
        "fontName": "OpenSans-ExtraboldItalic",
        "fontLabel": "OpenSans-ExtraboldItalic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-ExtraBoldItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Italic.ttf",
        "fontName": "OpenSans-Italic",
        "fontLabel": "OpenSans-Italic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Italic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Light.ttf",
        "fontName": "OpenSans-Light",
        "fontLabel": "OpenSans-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Semibold.ttf",
        "fontName": "OpenSans-Semibold",
        "fontLabel": "OpenSans-Semibold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Semibold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-SemiboldItalic.ttf",
        "fontName": "OpenSans-SemiboldItalic",
        "fontLabel": "OpenSans-SemiboldItalic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-SemiboldItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-LightItalic.ttf",
        "fontName": "OpenSansLight-Italic",
        "fontLabel": "OpenSansLight-Italic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-LightItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Ostrich Sans Black.ttf",
        "fontName": "OstrichSans-Black",
        "fontLabel": "OstrichSans-Black",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Ostrich Sans Black.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Ostrich Sans.ttf",
        "fontName": "OstrichSans-Bold",
        "fontLabel": "OstrichSans-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Ostrich Sans.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Overlock SC.ttf",
        "fontName": "OverlockSC-Regular",
        "fontLabel": "OverlockSC-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Overlock SC.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/PER_____.ttf",
        "fontName": "Perpetua",
        "fontLabel": "Perpetua",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/PER_____.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/PrestigeEliteStd-Bd.otf",
        "fontName": "PrestigeEliteStd-Bd",
        "fontLabel": "PrestigeEliteStd-Bd",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/PrestigeEliteStd-Bd.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Bold.ttf",
        "fontName": "Roboto-Bold",
        "fontLabel": "Roboto-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Light.ttf",
        "fontName": "Roboto-Light",
        "fontLabel": "Roboto-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-LightItalic.ttf",
        "fontName": "Roboto-LightItalic",
        "fontLabel": "Roboto-LightItalic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-LightItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Medium.ttf",
        "fontName": "Roboto-Medium",
        "fontLabel": "Roboto-Medium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Medium.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Regular.ttf",
        "fontName": "Roboto-Regular",
        "fontLabel": "Roboto-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Thin.ttf",
        "fontName": "Roboto-Thin",
        "fontLabel": "Roboto-Thin",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Thin.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Rockwell.ttf",
        "fontName": "Rockwell",
        "fontLabel": "Rockwell",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Rockwell.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Rocc.ttf",
        "fontName": "Rockwell-Condensed",
        "fontLabel": "Rockwell-Condensed",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Rocc.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/SCRIPTBL.ttf",
        "fontName": "ScriptMTBold",
        "fontLabel": "ScriptMTBold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/SCRIPTBL.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Shonar.ttf",
        "fontName": "ShonarBangla",
        "fontLabel": "ShonarBangla",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Shonar.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Shonar-Bold.ttf",
        "fontName": "ShonarBangla-Bold",
        "fontLabel": "ShonarBangla-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Shonar-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/TrajanPro3-Bold.otf",
        "fontName": "TrajanPro3-Bold",
        "fontLabel": "TrajanPro3-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/TrajanPro3-Bold.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/TrajanPro3-Regular.otf",
        "fontName": "TrajanPro3-Regular",
        "fontLabel": "TrajanPro3-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/TrajanPro3-Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/VAGRoundedStd-Bold.ttf",
        "fontName": "VAGRoundedStd-Bold",
        "fontLabel": "VAGRoundedStd-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/VAGRoundedStd-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/VAGRoundedStd-Light.ttf",
        "fontName": "VAGRoundedStd-Light",
        "fontLabel": "VAGRoundedStd-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/VAGRoundedStd-Light.ttf",
        "catalogType": "Misc"
    }
]

export const colorList = ["#0054BB", "#3583E3", "#9FCAFF", "#FF0000", "#FF5A5A", "#FB8A8A", "#FFBDBD", "#FF9600", "#FFAF3D", "#FFBE61", "#FFD190", "#FFDE00", "#FFEA5F", "#FFF38D", "#FFF8C1", "#356335", "#369800", "#83CE5A", "#BEEDA5", "#B11D75", "#E8136F", "#FF69AA", "#FF9FC9", "#44B7FD", "#71CAFF", "#B2E2FF", "#C7EAFF", "#96D500", "#B4EB30", "#CFF27A", "#E1F8A8", "#18DBCB", "#53E6DA", "#90F1E9", "#BDF4EF", "#8B5D5D", "#AA7070", "#C19191", "#F0E9E9", "#84c1ff", "#add6ff", "#d6eaff", "#eaf4ff", "#2e003e", "#3d2352", "#3d1e6d", "#8874a3", "#8d5524", "#c68642", "#e0ac69", "#f1c27d", "#e6b0aa", "#145a32", "#616a6b", "#707b7c", "#d4ac0d", "#f4d03f", "#fae5d3", "#e9f7ef", "#2c3e50", "#935116", "#7f8c8d", "#f2f4f4", "#5f6a6a", "#fcf3cf", "#1abc9c", "#f0f3f4", "#73c6b6", "#2c3e50", "#45b39d", "#e67e22", "#7f8c8d", "#d35400", "#aab7b8", "#a04000", "#d2b4de", "#633974", "#cacfd2", "#784212", "#85929e", "#f8f9f9", "#f6ddcc", "#d68910", "#e74c3c", "#d5dbdb", "#f4f6f7", "#f5b041", "#eaeded", "#a9dfbf", "#797d7f", "#e59866", "#2ecc71", "#0e6655", "#2e4053", "#e5e8e8", "#e8f6f3", "#1abc9c", "#273746", "#d4e6f1", "#d5f5e3", "#c39bd3", "#229954", "#515a5a", "#148f77", "#16a085", "#1d8348", "#1a5276", "#99a3a4", "#a9cce3", "#ba4a00", "#d1f2eb", "#7b7d7d", "#f39c12", "#fdebd0", "#edbb99", "#f9e79f", "#7e5109", "#5b2c6f", "#512e5f", "#52be80", "#8e44ad", "#6e2c00", "#1b4f72", "#fef9e7", "#d7bde2", "#154360", "#1f618d", "#2e86c1", "#fdedec", "#76d7c4", "#138d75", "#a3e4d7", "#ebf5fb", "#bdc3c7", "#f1948a", "#1c2833", "#e8f8f5", "#76448a", "#d6eaf8", "#fdfefe", "#2980b9", "#abebc6", "#fdf2e9", "#c0392b", "#d98880", "#f4f6f6", "#d7dbdd", "#839192", "#d6dbdf", "#fadbd8", "#5dade2", "#4a235a", "#bdc3c7", "#d4efdf", "#a6acaf", "#b2babb", "#f39c12", "#af601a", "#bfc9ca", "#2874a6", "#3498db", "#b9770e", "#7d6608", "#58d68d", "#7b241c", "#3498db", "#943126", "#fef5e7", "#626567", "#808b96", "#95a5a6", "#c0392b", "#eaecee", "#f7f9f9", "#f5eef8", "#e74c3c", "#a93226", "#82e0aa", "#b7950b", "#e5e7e9", "#2471a3", "#aed6f1", "#641e16", "#f0b27a", "#d35400", "#2980b9", "#e8daef", "#239b56", "#bb8fce", "#196f3d", "#212f3c", "#909497", "#884ea0", "#9a7d0a", "#fad7a0", "#7fb3d5", "#f1c40f", "#af7ac5", "#1b2631", "#9b59b6", "#a569bd", "#186a3b", "#9b59b6", "#f4ecf7", "#27ae60", "#17a589", "#34495e", "#aeb6bf", "#5499c7", "#78281f", "#fbeee6", "#117864", "#d5d8dc", "#cb4335", "#f2d7d5", "#fbfcfc", "#4d5656", "#34495e", "#f5cba7", "#d0d3d4", "#95a5a6", "#27ae60", "#7dcea0", "#ecf0f1", "#5d6d7e", "#566573", "#a2d9ce", "#283747", "#16a085", "#eaf2f8", "#cd6155", "#717d7e", "#ebedef", "#21618c", "#ebdef0", "#48c9b0", "#2ecc71", "#0e6251", "#f5b7b1", "#9c640c", "#eb984e", "#8e44ad", "#979a9a", "#f1c40f", "#b3b6b7", "#dc7633", "#ec7063", "#0b5345", "#7d3c98", "#212f3d", "#85c1e9", "#b03a2e", "#28b463", "#6c3483", "#117a65", "#17202a", "#f7dc6f", "#ecf0f1", "#922b21", "#f8c471", "#424949", "#ccd1d1", "#abb2b9", "#f2f3f4", "#d0ece7", "#ca6f1e", "#873600", "#f9ebea", "#1e8449", "#eafaf1"];

export const defaultBannerSet = [
    {
        "text_json": [
            {
                "xPos": 138.27,
                "yPos": 10,
                "width": 90.7,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.5375918946064515,
                "scaleY": 1.5375918946064515,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 128.98,
                "yPos": 110,
                "width": 166.04,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -261,
                "yPos": -75,
                "width": 800,
                "height": 800,
                "scaleX": 0.5,
                "scaleY": 0.5,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 152,
                "yPos": 188,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "medium-rectangle",
        "height": 250,
        "width": 300
    },
    {
        "text_json": [
            {
                "xPos": 148.21,
                "yPos": 25,
                "width": 105.28,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.4208798166256813,
                "scaleY": 1.4208798166256813,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 151,
                "yPos": 118,
                "width": 150,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -301,
                "yPos": -86,
                "width": 800,
                "height": 800,
                "scaleX": 0.56,
                "scaleY": 0.56,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 167,
                "yPos": 203,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "large-rectangle",
        "height": 280,
        "width": 336
    },
    {
        "text_json": [
            {
                "xPos": 134.07,
                "yPos": 10,
                "width": 84.68,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.226342697287849,
                "scaleY": 1.226342697287849,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 267,
                "yPos": 30,
                "width": 200.02,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -176,
                "yPos": -106,
                "width": 800,
                "height": 800,
                "scaleX": 0.36,
                "scaleY": 0.36,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 534,
                "yPos": 25,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "leaderboard",
        "height": 90,
        "width": 728
    },
    {
        "text_json": [
            {
                "xPos": 18.56,
                "yPos": 4,
                "width": 103.19,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.7449122493370282,
                "scaleY": 0.7449122493370282,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 100.45,
                "yPos": 3.62,
                "width": 162.42,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.7929308872992413,
                "scaleY": 0.7929308872992413,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -464,
                "yPos": -100,
                "width": 800,
                "height": 800,
                "scaleX": 0.56,
                "scaleY": 0.56,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 249,
                "yPos": 11,
                "angle": 0,
                "width": 59.43026877661358,
                "height": 24.559999999999995,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 12.007204645139414,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "mobile",
        "height": 50,
        "width": 320
    },
    {
        "text_json": [
            {
                "xPos": 6.92,
                "yPos": 20.73,
                "width": 86.11,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.0464161994221373,
                "scaleY": 1.0464161994221373,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 92.04,
                "yPos": 7.77,
                "width": 115.28,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.1139757913703239,
                "scaleY": 1.1139757913703239,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -431,
                "yPos": -72,
                "width": 800,
                "height": 800,
                "scaleX": 0.5,
                "scaleY": 0.5,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 233,
                "yPos": 33,
                "angle": 0,
                "width": 75.6509416479027,
                "height": 26.97224884674291,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 15.348436384919557,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "large-mobile",
        "height": 100,
        "width": 320
    },
    {
        "text_json": [
            {
                "xPos": 12.45,
                "yPos": 192,
                "width": 136.11,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.9623811755078369,
                "scaleY": 1.9623811755078369,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 33.98,
                "yPos": 330.25,
                "width": 130.32,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.7594558685810457,
                "scaleY": 1.7594558685810457,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -205,
                "yPos": -457,
                "width": 800,
                "height": 800,
                "scaleX": 0.84,
                "scaleY": 0.84,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 79,
                "yPos": 498,
                "angle": 0,
                "width": 142.27190388241516,
                "height": 43.457599731355906,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 25.398053603897644,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "half-page",
        "height": 600,
        "width": 300
    },
    {
        "text_json": [
            {
                "xPos": 5.07,
                "yPos": 191,
                "width": 91.73,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.5464630311700693,
                "scaleY": 1.5464630311700693,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 6.69,
                "yPos": 346.74,
                "width": 123.7,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.1837368347673283,
                "scaleY": 1.1837368347673283,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -165,
                "yPos": -261,
                "width": 800,
                "height": 800,
                "scaleX": 0.57,
                "scaleY": 0.57,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 16,
                "yPos": 506,
                "angle": 0,
                "width": 121.55686892294204,
                "height": 37.13009814373502,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 22.220060636196216,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "wide-skyscrapper",
        "height": 600,
        "width": 160
    },
    {
        "text_json": [
            {
                "xPos": 7.59,
                "yPos": 120,
                "width": 87.07,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.1580299789523376,
                "scaleY": 1.1580299789523376,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 11.34,
                "yPos": 322.08,
                "width": 96.98,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.023844421715362,
                "scaleY": 1.023844421715362,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -169,
                "yPos": -315,
                "width": 800,
                "height": 800,
                "scaleX": 0.56,
                "scaleY": 0.56,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 7,
                "yPos": 513,
                "angle": 0,
                "width": 107.4880655367301,
                "height": 38.18366368474174,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "skyscrapper",
        "height": 600,
        "width": 120
    },
    {
        "text_json": [
            {
                "xPos": 122.81,
                "yPos": 6,
                "width": 84.38,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 94,
                "yPos": 84,
                "width": 150,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -379,
                "yPos": -188,
                "width": 800,
                "height": 800,
                "scaleX": 0.61,
                "scaleY": 0.61,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 109,
                "yPos": 167,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "square",
        "height": 250,
        "width": 250
    },
    {
        "text_json": [
            {
                "xPos": 69.97,
                "yPos": 9.38,
                "width": 93.84,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.1470235057258953,
                "scaleY": 1.1470235057258953,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 62.86,
                "yPos": 86,
                "width": 126.27,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -383,
                "yPos": -135,
                "width": 800,
                "height": 800,
                "scaleX": 0.58,
                "scaleY": 0.58,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 72,
                "yPos": 155,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "small-square",
        "height": 200,
        "width": 200
    },
    {
        "text_json": [
            {
                "xPos": 76.2,
                "yPos": 3.97,
                "width": 83.33,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.9303990794063015,
                "scaleY": 0.9303990794063015,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 165,
                "yPos": 1,
                "width": 150,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -176,
                "yPos": -104,
                "width": 800,
                "height": 800,
                "scaleX": 0.32,
                "scaleY": 0.32,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 348,
                "yPos": 10,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "main-banner",
        "height": 60,
        "width": 468
    },
    {
        "text_json": [
            {
                "xPos": 45.51,
                "yPos": 372,
                "width": 84.46,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.521678362100674,
                "scaleY": 2.521678362100674,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 31.96,
                "yPos": 579.12,
                "width": 133.81,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.7290623973833597,
                "scaleY": 1.7290623973833597,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -77,
                "yPos": -77,
                "width": 800,
                "height": 800,
                "scaleX": 0.57,
                "scaleY": 0.57,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 66,
                "yPos": 883,
                "angle": 0,
                "width": 174.9095035252536,
                "height": 48.89607259509473,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 27.71473529757591,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "portrait",
        "height": 1050,
        "width": 300
    },
    {
        "text_json": [
            {
                "xPos": 260.46,
                "yPos": 37.35,
                "width": 88.91,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.0399442918858144,
                "scaleY": 3.0399442918858144,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 545.44,
                "yPos": 40.42,
                "width": 109.08,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.981412140571967,
                "scaleY": 1.981412140571967,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -242,
                "yPos": -133,
                "width": 800,
                "height": 800,
                "scaleX": 0.65,
                "scaleY": 0.65,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 805,
                "yPos": 88,
                "angle": 0,
                "width": 139.14464509995992,
                "height": 54.44662007058136,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 25.05402304529735,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "billboard",
        "height": 250,
        "width": 970
    },
    {
        "text_json": [
            {
                "xPos": 277.34,
                "yPos": 2,
                "width": 86.47,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.4261361603144627,
                "scaleY": 1.4261361603144627,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 445.99,
                "yPos": 16.06,
                "width": 180.26,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.5725076313453266,
                "scaleY": 1.5725076313453266,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -192,
                "yPos": -192,
                "width": 800,
                "height": 800,
                "scaleX": 0.59,
                "scaleY": 0.59,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 833,
                "yPos": 25,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "large-leaderboard",
        "height": 90,
        "width": 970
    },
    {
        "text_json": [
            {
                "xPos": 1.84,
                "yPos": 7,
                "width": 84.46,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.8088767329862797,
                "scaleY": 0.8088767329862797,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 71.83,
                "yPos": 3.4,
                "width": 104.69,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.6559883112595859,
                "scaleY": 0.6559883112595859,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -147,
                "yPos": 71,
                "width": 800,
                "height": 800,
                "scaleX": 0.22,
                "scaleY": 0.22,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 165,
                "yPos": 9,
                "angle": 0,
                "width": 56.41179316193939,
                "height": 39.81839603318927,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 12.343172855819269,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "half-banner",
        "height": 60,
        "width": 234
    },
    {
        "text_json": [
            {
                "xPos": 21.59,
                "yPos": 68,
                "width": 85.73,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.9192652648256074,
                "scaleY": 0.9192652648256074,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 12.7,
                "yPos": 128.38,
                "width": 119.81,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.8410207163481499,
                "scaleY": 0.8410207163481499,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -204,
                "yPos": -290,
                "width": 800,
                "height": 800,
                "scaleX": 0.47,
                "scaleY": 0.47,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 6,
                "yPos": 196,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "vertical-banner",
        "height": 240,
        "width": 120
    },
    {
        "text_json": [
            {
                "xPos": 95.44,
                "yPos": 9,
                "width": 99.42,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.715421141591159,
                "scaleY": 0.715421141591159,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 15.35,
                "yPos": 65.24,
                "width": 185.13,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.8720022387104951,
                "scaleY": 0.8720022387104951,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -190,
                "yPos": -202,
                "width": 800,
                "height": 800,
                "scaleX": 0.38,
                "scaleY": 0.38,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 105,
                "yPos": 111,
                "angle": 0,
                "width": 59.27391302987732,
                "height": 24.039877818432156,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 11.193898229188122,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "small-rectangle",
        "height": 150,
        "width": 180
    },
    {
        "text_json": [
            {
                "xPos": 201.88,
                "yPos": 79.41,
                "width": 83.51,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.016815839840625,
                "scaleY": 3.016815839840625,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 478.04,
                "yPos": 92.99,
                "width": 97.33,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.758622150602171,
                "scaleY": 1.758622150602171,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -247,
                "yPos": -56,
                "width": 800,
                "height": 800,
                "scaleX": 0.55,
                "scaleY": 0.55,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 694,
                "yPos": 141,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "facebook-cover",
        "height": 315,
        "width": 851
    },
    {
        "text_json": [
            {
                "xPos": 694.27,
                "yPos": 62,
                "width": 96.61,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.010567092988136,
                "scaleY": 4.010567092988136,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 655.27,
                "yPos": 393.99,
                "width": 223.2,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.2143654512805253,
                "scaleY": 2.2143654512805253,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -122,
                "yPos": -93,
                "width": 800,
                "height": 800,
                "scaleX": 0.9,
                "scaleY": 0.9,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 782,
                "yPos": 627,
                "angle": 0,
                "width": 234.4912627170775,
                "height": 79.23644198604492,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 41.83303397961226,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "facebook-post",
        "height": 900,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 722.83,
                "yPos": 82,
                "width": 100.12,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.1594587399599803,
                "scaleY": 3.1594587399599803,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 659.43,
                "yPos": 290.85,
                "width": 223.99,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.0096126532007164,
                "scaleY": 2.0096126532007164,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -552,
                "yPos": -270,
                "width": 800,
                "height": 800,
                "scaleX": 1.38,
                "scaleY": 1.38,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 803,
                "yPos": 447,
                "angle": 0,
                "width": 162.4178228166757,
                "height": 57.85010653924912,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 29.049702964488343,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "facebook-ad",
        "height": 628,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 740.22,
                "yPos": 30,
                "width": 108.16,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.4554119697475603,
                "scaleY": 2.4554119697475603,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 643.67,
                "yPos": 220.61,
                "width": 241.99,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.916397276968467,
                "scaleY": 1.916397276968467,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -128,
                "yPos": -128,
                "width": 800,
                "height": 800,
                "scaleX": 0.88,
                "scaleY": 0.88,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 783,
                "yPos": 336,
                "angle": 0,
                "width": 155.99261911388317,
                "height": 51.03577091720273,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 30.33949773001315,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "page-like-ad",
        "height": 444,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 295,
                "yPos": 66,
                "width": 83.25,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.0538779894419417,
                "scaleY": 3.053877989441942,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 253,
                "yPos": 286,
                "width": 150,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.217028709776545,
                "scaleY": 2.217028709776545,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -675,
                "yPos": -173,
                "width": 800,
                "height": 800,
                "scaleX": 1.17,
                "scaleY": 1.17,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 314,
                "yPos": 469,
                "angle": 0,
                "width": 197.99492359421467,
                "height": 58.54769594090961,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 32.06617237515115,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "click-to-website-ad",
        "height": 600,
        "width": 600
    },
    {
        "text_json": [
            {
                "xPos": 951.79,
                "yPos": 24,
                "width": 96.02,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.691347292119479,
                "scaleY": 2.691347292119479,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 832.27,
                "yPos": 228,
                "width": 315.99,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.6292731652604682,
                "scaleY": 1.6292731652604682,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -177,
                "yPos": -173,
                "width": 800,
                "height": 800,
                "scaleX": 1.08,
                "scaleY": 1.08,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 981,
                "yPos": 354,
                "angle": 0,
                "width": 182.19037472920124,
                "height": 71.80962527079876,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 35.37984843832356,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "twitter-cover",
        "height": 500,
        "width": 1500
    },
    {
        "text_json": [
            {
                "xPos": 617.65,
                "yPos": 48,
                "width": 88.05,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.506582523344693,
                "scaleY": 2.506582523344693,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 496.74,
                "yPos": 239.54,
                "width": 233.98,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.9726989751422013,
                "scaleY": 1.9726989751422013,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -362,
                "yPos": -194,
                "width": 800,
                "height": 800,
                "scaleX": 1.02,
                "scaleY": 1.02,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 628,
                "yPos": 364,
                "angle": 0,
                "width": 198.84962247644114,
                "height": 76.15262627107371,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 35.51580659569828,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "twitter-post",
        "height": 512,
        "width": 1024
    },
    {
        "text_json": [
            {
                "xPos": 1277.83,
                "yPos": 123,
                "width": 98.14,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 5.709546866962352,
                "scaleY": 5.709546866962352,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 1164.54,
                "yPos": 589.71,
                "width": 324.02,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.4426905976727045,
                "scaleY": 2.4426905976727045,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -535,
                "yPos": -253,
                "width": 800,
                "height": 800,
                "scaleX": 1.89,
                "scaleY": 1.89,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1427,
                "yPos": 812,
                "angle": 0,
                "width": 267.1591478329651,
                "height": 99.37269225123052,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 55.980015587025676,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "youtube-channel-cover",
        "height": 1040,
        "width": 2560
    },
    {
        "text_json": [
            {
                "xPos": 825.77,
                "yPos": 79,
                "width": 98,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.780268781069203,
                "scaleY": 3.780268781069203,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 792.97,
                "yPos": 355.28,
                "width": 213.98,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.9864567506718407,
                "scaleY": 1.9864567506718407,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -220,
                "yPos": -325,
                "width": 800,
                "height": 800,
                "scaleX": 1.27,
                "scaleY": 1.27,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 905,
                "yPos": 514,
                "angle": 0,
                "width": 219.3146042282888,
                "height": 71.48901409888539,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 34.9947616132127,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "youtube-video-thumbnail",
        "height": 720,
        "width": 1280
    },
    {
        "text_json": [
            {
                "xPos": 548.67,
                "yPos": 90.27,
                "width": 94.2,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.878464621258283,
                "scaleY": 4.878464621258283,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 593.74,
                "yPos": 415.1,
                "width": 117.7,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.315379195538983,
                "scaleY": 3.315379195538983,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -516,
                "yPos": -1,
                "width": 800,
                "height": 800,
                "scaleX": 1.3,
                "scaleY": 1.3,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 689,
                "yPos": 806,
                "angle": 0,
                "width": 199.39620774919814,
                "height": 58.189151945422495,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 34.57041032626137,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "instagram-post",
        "height": 1080,
        "width": 1080
    },
    {
        "text_json": [
            {
                "xPos": 210.54,
                "yPos": 41.14,
                "width": 83.34,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.872448573298046,
                "scaleY": 1.872448573298046,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 212.01,
                "yPos": 176.19,
                "width": 109.9,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.4154918208899998,
                "scaleY": 1.4154918208899998,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -452,
                "yPos": -131,
                "width": 800,
                "height": 800,
                "scaleX": 0.81,
                "scaleY": 0.81,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 211,
                "yPos": 308,
                "angle": 0,
                "width": 147.50927157775436,
                "height": 47.04323765362056,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "profile-picture",
        "height": 400,
        "width": 400
    },
    {
        "text_json": [
            {
                "xPos": 17,
                "yPos": 572,
                "width": 171.38,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.2502755361130906,
                "scaleY": 3.2502755361130906,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 84,
                "yPos": 759,
                "width": 213.97,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.073633444791672,
                "scaleY": 2.073633444791672,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -185,
                "yPos": -386,
                "width": 800,
                "height": 800,
                "scaleX": 1.13,
                "scaleY": 1.13,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 193,
                "yPos": 966,
                "angle": 0,
                "width": 235.09870823976306,
                "height": 70.88501062731733,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 33.01958211778158,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "pinterest-post",
        "height": 1200,
        "width": 600
    },
    {
        "text_json": [
            {
                "xPos": 580.33,
                "yPos": 88.56,
                "width": 86.01,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.390236007471399,
                "scaleY": 4.390236007471399,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 1006.89,
                "yPos": 119.38,
                "width": 100.99,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.4242371357093724,
                "scaleY": 2.4242371357093724,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -171,
                "yPos": -169,
                "width": 800,
                "height": 800,
                "scaleX": 0.95,
                "scaleY": 0.95,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1321,
                "yPos": 171,
                "angle": 0,
                "width": 208.81620370099003,
                "height": 73.88757806142708,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 35.14408951404844,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "linkedin-cover",
        "height": 396,
        "width": 1584
    },
    {
        "text_json": [
            {
                "xPos": 175.29,
                "yPos": 639.38,
                "width": 103.67,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 7.111615519153207,
                "scaleY": 7.111615519153207,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 172.47,
                "yPos": 1170.78,
                "width": 270.14,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.8105502528179716,
                "scaleY": 2.8105502528179716,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -68,
                "yPos": -602,
                "width": 800,
                "height": 800,
                "scaleX": 1.53,
                "scaleY": 1.53,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 360,
                "yPos": 1528,
                "angle": 0,
                "width": 357.4304971150111,
                "height": 114.90893917842739,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 45.529576059408626,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "story",
        "height": 1920,
        "width": 1080
    },
    {
        "text_json": [
            {
                "xPos": 1048.52,
                "yPos": 87.31,
                "width": 94,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 5.720845482405148,
                "scaleY": 5.720845482405147,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 897.55,
                "yPos": 476.7,
                "width": 218.93,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.7188873193536285,
                "scaleY": 3.7188873193536285,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -297,
                "yPos": -316,
                "width": 800,
                "height": 800,
                "scaleX": 1.37,
                "scaleY": 1.37,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1159,
                "yPos": 795,
                "angle": 0,
                "width": 308.12647987046955,
                "height": 71.1726947783868,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 44.54443185179423,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "hd-slideshow",
        "height": 1080,
        "width": 1920
    },
    {
        "text_json": [
            {
                "xPos": 435.97,
                "yPos": 44.18,
                "width": 100.09,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.781305175406774,
                "scaleY": 4.781305175406774,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 512.99,
                "yPos": 375.25,
                "width": 178.59,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.9879038517515089,
                "scaleY": 1.9879038517515089,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -573,
                "yPos": -132,
                "width": 800,
                "height": 800,
                "scaleX": 1.22,
                "scaleY": 1.22,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 549,
                "yPos": 546,
                "angle": 0,
                "width": 280.96272951517636,
                "height": 68.34734124920949,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 38.33968441765626,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "slideshow",
        "height": 720,
        "width": 960
    },
    {
        "text_json": [
            {
                "xPos": 319.54,
                "yPos": 63.51,
                "width": 84.09,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.233420593296771,
                "scaleY": 3.233420593296771,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 670.99,
                "yPos": 37.09,
                "width": 91.28,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.330146313699932,
                "scaleY": 2.330146313699932,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -344,
                "yPos": -185,
                "width": 800,
                "height": 800,
                "scaleX": 0.85,
                "scaleY": 0.85,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 917,
                "yPos": 107,
                "angle": 0,
                "width": 250.41207461815236,
                "height": 84.22252964727359,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 39.68980464391364,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "esty-cover",
        "height": 300,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 509.08,
                "yPos": 87,
                "width": 87.5,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 5.8263961922113845,
                "scaleY": 5.8263961922113845,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 1200.15,
                "yPos": 144.38,
                "width": 138.16,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.095392413165596,
                "scaleY": 4.095392413165596,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -205,
                "yPos": -86,
                "width": 800,
                "height": 800,
                "scaleX": 0.82,
                "scaleY": 0.82,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1951,
                "yPos": 197,
                "angle": 0,
                "width": 314.80038547861346,
                "height": 100.39633950429443,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 43.58612726145193,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "soundcloud-cover",
        "height": 520,
        "width": 2480
    },
    {
        "text_json": [
            {
                "xPos": 1028.31,
                "yPos": 107.1,
                "width": 94.11,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 6.884851454058049,
                "scaleY": 6.884851454058049,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 1067.01,
                "yPos": 587.49,
                "width": 194.95,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.985360030536697,
                "scaleY": 2.985360030536697,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -723,
                "yPos": -480,
                "width": 800,
                "height": 800,
                "scaleX": 2.14,
                "scaleY": 2.14,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1196,
                "yPos": 813,
                "angle": 0,
                "width": 360.39672271069946,
                "height": 94.73190558687654,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 39.34741061757433,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "twitch-video-player-cover",
        "height": 1080,
        "width": 1920
    },
    {
        "text_json": [
            {
                "xPos": 223.6,
                "yPos": 118,
                "width": 84.14,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.21685478218172,
                "scaleY": 4.21685478218172,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 591.01,
                "yPos": 131.83,
                "width": 104.62,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.906562271635121,
                "scaleY": 2.906562271635121,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -451,
                "yPos": -109,
                "width": 800,
                "height": 800,
                "scaleX": 0.86,
                "scaleY": 0.86,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 938,
                "yPos": 197,
                "angle": 0,
                "width": 236.30757912387162,
                "height": 66.36682964902064,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 35.561074402058665,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "twitch-channel-cover",
        "height": 480,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 381.61,
                "yPos": 86,
                "width": 86.12,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.44472507925584,
                "scaleY": 4.44472507925584,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 352.01,
                "yPos": 430.65,
                "width": 197.25,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.073100218942354,
                "scaleY": 2.073100218942354,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -538,
                "yPos": -366,
                "width": 800,
                "height": 800,
                "scaleX": 1.18,
                "scaleY": 1.18,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 435,
                "yPos": 600,
                "angle": 0,
                "width": 259.25005379938636,
                "height": 74.55865848601108,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 40.22465435236745,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "logo",
        "height": 800,
        "width": 800
    },
    {
        "text_json": [
            {
                "xPos": 1034.41,
                "yPos": 140.93,
                "width": 86.1,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 6.574405980622999,
                "scaleY": 6.574405980622999,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 950.45,
                "yPos": 584.7,
                "width": 187.75,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.931690009898369,
                "scaleY": 3.931690009898369,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -468,
                "yPos": -286,
                "width": 800,
                "height": 800,
                "scaleX": 1.54,
                "scaleY": 1.54,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1170,
                "yPos": 841,
                "angle": 0,
                "width": 292.3413095759341,
                "height": 95.44849038655843,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 39.77253492463601,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "presentation",
        "height": 1080,
        "width": 1920
    },
    {
        "text_json": [
            {
                "xPos": 821.39,
                "yPos": 415.7,
                "width": 85.56,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 6.749125192477389,
                "scaleY": 6.749125192477389,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 851.01,
                "yPos": 943,
                "width": 147.37,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.6191405312232927,
                "scaleY": 3.6191405312232927,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -817,
                "yPos": -518,
                "width": 800,
                "height": 800,
                "scaleX": 2.04,
                "scaleY": 2.04,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 995,
                "yPos": 1334,
                "angle": 0,
                "width": 247.41801768145686,
                "height": 74.89640655205693,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 32.01036045749686,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "album-cover",
        "height": 1600,
        "width": 1600
    },
    {
        "text_json": [
            {
                "xPos": 514.03,
                "yPos": 1051.64,
                "width": 84.07,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 7.8872323442048025,
                "scaleY": 7.8872323442048025,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 485.01,
                "yPos": 1668.51,
                "width": 192.26,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.7823870238243855,
                "scaleY": 3.7823870238243855,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -278,
                "yPos": -1185,
                "width": 800,
                "height": 800,
                "scaleX": 2.79,
                "scaleY": 2.79,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 628,
                "yPos": 2034,
                "angle": 0,
                "width": 402.8172370086051,
                "height": 152.93833169152416,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 59.452062677515116,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "book-cover",
        "height": 2400,
        "width": 1600
    }
];

//   fabric_button js class

// `button list properties : [ 
//         text, buttonFill, buttonStrokeColor, buttonStrokeWidth, width, buttonRx, buttonRy,
//         fill, fontSize, stroke, strokeWidth, fontName, fontSrc, textAlign, isBold, isItalic,
//         isUnderLine, isStrikeThrough, isOverLine, opacity, charSpacing, lineHeight,
//         shadow: { color, blur, offsetX, offsetY, opacity }
// ]`

//   fabric_group_button js class

// `button list properties : [ 
//         text, buttonFill, buttonStrokeColor, buttonStrokeWidth, buttonRx, buttonRy, width, top, left, height,
//         color, fontSize, stroke, strokeWidth, fontName, fontSrc, textAlign, fontWeight, fontStyle,
//         underline, linethrough, overline, textOpacity, charSpacing, lineHeight,
//         shadow: { color, blur, offsetX, offsetY, opacity }, textShadow: { color, blur, offsetX, offsetY, opacity }       
// ]`

export const textButtonList = [
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#e59613",
                    "offset": 0
                },
                {
                    "color": "#ea441c",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 793
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/1.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#13d98e",
                    "offset": 0
                },
                {
                    "color": "#0775d7",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 798
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/2.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 20,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 24.99999999999999,
                "x2": 200,
                "y2": 25
            },
            "colorStops": [
                {
                    "color": "#ed714b",
                    "offset": 0
                },
                {
                    "color": "#e33556",
                    "offset": 1
                }
            ],
            "gradientAngle": 0,
            "id": 8
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/3.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 22,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 19.99999999999999,
                "x2": 150,
                "y2": 20
            },
            "colorStops": [
                {
                    "color": "#e94641",
                    "offset": 0
                },
                {
                    "color": "#b61fea",
                    "offset": 1
                }
            ],
            "gradientAngle": 0,
            "id": 2
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/4.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#fcd323",
                    "offset": 0
                },
                {
                    "color": "#ee961b",
                    "offset": 0.99
                }
            ],
            "gradientAngle": 1,
            "id": 427
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/5.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 20,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 19.99999999999999,
                "x2": 150,
                "y2": 20
            },
            "colorStops": [
                {
                    "color": "#4cbdff",
                    "offset": 0
                },
                {
                    "color": "#7d40ff",
                    "offset": 0.3
                },
                {
                    "color": "#c60dca",
                    "offset": 0.99
                }
            ],
            "gradientAngle": 0,
            "id": 26
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/6.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 19.99999999999999,
                "x2": 150,
                "y2": 20
            },
            "colorStops": [
                {
                    "color": "#15cca0",
                    "offset": 0
                },
                {
                    "color": "#0d9044",
                    "offset": 1
                }
            ],
            "gradientAngle": 0,
            "id": 7
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/7.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#ee961b",
                    "offset": 0
                },
                {
                    "color": "#de2e79",
                    "offset": 0.6
                },
                {
                    "color": "#af12c1",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 505
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/8.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#30cc23",
                    "offset": 0
                },
                {
                    "color": "#1fc56f",
                    "offset": 0.47
                },
                {
                    "color": "#10c1b9",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 734
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/9.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 19.99999999999999,
                "x2": 150,
                "y2": 20
            },
            "colorStops": [
                {
                    "color": "#7531ea",
                    "offset": 0
                },
                {
                    "color": "#b011c3",
                    "offset": 0.26
                },
                {
                    "color": "#de2e76",
                    "offset": 0.55
                },
                {
                    "color": "#f1d43a",
                    "offset": 0.99
                }
            ],
            "gradientAngle": 0,
            "id": 57
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/10.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#ec511b",
                    "offset": 0
                },
                {
                    "color": "#e01d47",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 519
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/11.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#ec6569",
                    "offset": 0
                },
                {
                    "color": "#dd3779",
                    "offset": 0.35
                },
                {
                    "color": "#c731ae",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 754
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/12.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 59.374287469865656,
                "y1": 0,
                "x2": 90.62571253013436,
                "y2": 40
            },
            "colorStops": [
                {
                    "color": "#806de1",
                    "offset": 0
                },
                {
                    "color": "#6828e1",
                    "offset": 0.99
                }
            ],
            "gradientAngle": 308,
            "id": 325
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/13.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#37cce4",
                    "offset": 0
                },
                {
                    "color": "#246de0",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 524
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/14.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#b90db9",
                    "offset": 0
                },
                {
                    "color": "#8c1efb",
                    "offset": 0.43
                },
                {
                    "color": "#4ec0ff",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 781
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/15.png'
    },
];

export const iconButtonList = [
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/1.svg",
        "previewImage": "assets/Buttons/iconButton_1.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/2.svg",
        "previewImage": "assets/Buttons/iconButton_2.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/4.svg",
        "previewImage": "assets/Buttons/iconButton_4.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/5.svg",
        "previewImage": "assets/Buttons/iconButton_5.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/6.svg",
        "previewImage": "assets/Buttons/iconButton_6.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/7.svg",
        "previewImage": "assets/Buttons/iconButton_7.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/8.svg",
        "previewImage": "assets/Buttons/iconButton_8.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/10.svg",
        "previewImage": "assets/Buttons/iconButton_10.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/12.svg",
        "previewImage": "assets/Buttons/iconButton_12.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/19.svg",
        "previewImage": "assets/Buttons/iconButton_19.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/20.svg",
        "previewImage": "assets/Buttons/iconButton_20.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/21.svg",
        "previewImage": "assets/Buttons/iconButton_21.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/22.svg",
        "previewImage": "assets/Buttons/iconButton_22.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/23.svg",
        "previewImage": "assets/Buttons/iconButton_23.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/24.svg",
        "previewImage": "assets/Buttons/iconButton_24.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/25.svg",
        "previewImage": "assets/Buttons/iconButton_25.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/28.svg",
        "previewImage": "assets/Buttons/iconButton_28.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/37.svg",
        "previewImage": "assets/Buttons/iconButton_37.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/41.svg",
        "previewImage": "assets/Buttons/iconButton_41.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/43.svg",
        "previewImage": "assets/Buttons/iconButton_43.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/51.svg",
        "previewImage": "assets/Buttons/iconButton_51.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/53.svg",
        "previewImage": "assets/Buttons/iconButton_53.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/55.svg",
        "previewImage": "assets/Buttons/iconButton_55.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/57.svg",
        "previewImage": "assets/Buttons/iconButton_57.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/60.svg",
        "previewImage": "assets/Buttons/iconButton_60.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/71.svg",
        "previewImage": "assets/Buttons/iconButton_71.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/81.svg",
        "previewImage": "assets/Buttons/iconButton_81.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/86.svg",
        "previewImage": "assets/Buttons/iconButton_86.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/89.svg",
        "previewImage": "assets/Buttons/iconButton_89.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/98.svg",
        "previewImage": "assets/Buttons/iconButton_98.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/99.svg",
        "previewImage": "assets/Buttons/iconButton_99.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/108.svg",
        "previewImage": "assets/Buttons/iconButton_108.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/109.svg",
        "previewImage": "assets/Buttons/iconButton_109.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/120.svg",
        "previewImage": "assets/Buttons/iconButton_120.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/132.svg",
        "previewImage": "assets/Buttons/iconButton_132.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/138.svg",
        "previewImage": "assets/Buttons/iconButton_138.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/139.svg",
        "previewImage": "assets/Buttons/iconButton_139.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/141.svg",
        "previewImage": "assets/Buttons/iconButton_141.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/144.svg",
        "previewImage": "assets/Buttons/iconButton_144.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/151.svg",
        "previewImage": "assets/Buttons/iconButton_151.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/164.svg",
        "previewImage": "assets/Buttons/iconButton_164.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/174.svg",
        "previewImage": "assets/Buttons/iconButton_174.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/177.svg",
        "previewImage": "assets/Buttons/iconButton_177.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/178.svg",
        "previewImage": "assets/Buttons/iconButton_178.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/186.svg",
        "previewImage": "assets/Buttons/iconButton_186.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/191.svg",
        "previewImage": "assets/Buttons/iconButton_191.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/193.svg",
        "previewImage": "assets/Buttons/iconButton_193.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/197.svg",
        "previewImage": "assets/Buttons/iconButton_197.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/199.svg",
        "previewImage": "assets/Buttons/iconButton_199.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/204.svg",
        "previewImage": "assets/Buttons/iconButton_204.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/211.svg",
        "previewImage": "assets/Buttons/iconButton_211.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    }
];

/* export const buttonList = [
    {
        type: "textButton",
        text: "Click Me",
        buttonFill: "#0ABCFF",
        width: 110,
        color: '#ffffff',
        fontSize: 20,
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonFill: "#00F2FF",
        width: 110,
        color: '#ffffff',
        fontSize: 20,
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonStrokeColor: "#0ABCFF",
        buttonStrokeWidth: 2,
        width: 110,
        color: '#0ABCFF',
        fontSize: 20,
        fontName: 'Montserrat-Regular',
        fontSrc: 'assets/fonts/Montserrat-Regular.otf'
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonFill: "#0EDC75",
        width: 110,
        color: '#ffffff',
        fontSize: 20,
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonFill: "#BEEC4D",
        width: 110,
        color: '#ffffff',
        fontSize: 20,
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonStrokeColor: "#04D26B",
        buttonStrokeWidth: 2,
        width: 110,
        color: '#04D26B',
        fontSize: 20,
        fontName: 'Montserrat-Regular',
        fontSrc: 'assets/fonts/Montserrat-Regular.otf'
    },
    {
        type: "iconButton",
        src: "assets/icons/left.svg",
        buttonFill: "#0ABCFF",
        width: 100,
        height: 100,
        color: '#ffffff',
        iconSize: 20
    },
    {
        type: "iconButton",
        src: "assets/icons/svg49.svg",
        buttonFill: "#00F2FF",
        width: 100,
        height: 100,
        iconSize: 20,
        paddingOffset: 5
    },
    {
        type: "iconButton",
        src: "assets/icons/svg53.svg",
        buttonFill: "#DA5044",
        buttonRx: 50,
        buttonRy: 50,
        width: 100,
        height: 100,
        iconSize: 60,
        paddingOffset: 5
    },
    {
        type: "iconButton",
        src: "assets/icons/add-color.svg",
        buttonFill: "#DA5044",
        buttonRx: 50,
        buttonRy: 50,
        width: 100,
        height: 100,
        iconSize: 40,
        paddingOffset: 5
    },
] */