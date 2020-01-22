var canvas;
var stage;

var PIXEL_RATIO = (function() {
  var ctx = document.createElement("canvas").getContext("2d"),
    dpr = window.devicePixelRatio || 1,
    bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;
  return dpr / bsr;
})();

createHiDPICanvas = function(w, h, ratio) {
  if (!ratio) {
    ratio = PIXEL_RATIO;
  }
  var can = document.createElement("canvas");
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
};

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);

  stage.addChild(
    new txt.Text({
      text:
        "LARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER",
      font: "comfortaa",
      style: [
        { size: 1 },
        { size: 2 },
        { size: 4 },
        { size: 6, font: "dancingscript" },
        { size: 8, font: "dancingscript" },
        { size: 10, font: "dancingscript" },
        { size: 12, font: "dancingscript" },
        { size: 14, font: "dancingscript" },
        { size: 16 },
        { size: 18 },
        { size: 20 },
        { size: 22 },
        { size: 24 },
        { size: 26 },
        { size: 28 },
        { size: 30 },
        { size: 32 },
        { size: 34 },
        { size: 36 },
        { size: 38 },
        { size: 40 },
        { size: 42 },
        { size: 44 },
        { size: 46 },
        { size: 48 },
        { size: 50 },
        { size: 52 },
        { size: 54 },
        { size: 56 },
        { size: 58 },
        { size: 60 },
        { size: 62 },
        { size: 64 },
        { size: 66 },
        { size: 68 },
        { size: 70 },
        { size: 72 },
        { size: 77 },
        { size: 76 },
        { size: 78 },
        { size: 80 },
        { size: 82 },
        { size: 84 },
        { size: 86, font: "dancingscript" },
        { size: 88, font: "dancingscript" },
        { size: 90, font: "dancingscript" },
        { size: 92, font: "dancingscript" },
        { size: 94 },
        { size: 96 },
        { size: 98 },
        { size: 100 },
        { size: 102 },
        { size: 104 },
        { size: 106 },
        { size: 108 },
        { size: 110 },
        { size: 112 },
        { size: 114 },
        { size: 116, font: "dancingscript" },
        { size: 118, font: "dancingscript" },
        { size: 120, font: "dancingscript" },
        { size: 122, font: "dancingscript" },
        { size: 124, font: "dancingscript" },
        { size: 126 },
        { size: 128 },
        { size: 130 },
        { size: 132, font: "lobster" },
        { size: 134, font: "lobster" },
        { size: 148, font: "lobster" },
        { size: 140, font: "lobster" },
        { size: 142, font: "lobster" },
        { size: 144, font: "lobster" },
        { size: 146, font: "lobster" },
        { size: 148 },
        { size: 150, font: "lobster" },
        { size: 152 },
        { size: 154 },
        { size: 156, font: "dancingscript" },
        { size: 158, font: "dancingscript" },
        { size: 160, font: "dancingscript" },
        { size: 162 },
        { size: 164 },
        { size: 166 },
        { size: 168 },
        { size: 170 },
        { size: 172 },
        { size: 174 },
        { size: 176 },
        { size: 178 },
        { size: 180 },
        { size: 182 },
        { size: 184 },
        { size: 186 },
        { size: 188 }
      ],
      width: 1800,
      align: txt.Align.TOP_LEFT,
      size: 150,
      x: 10,
      y: 10
    })
  );

  stage.update();
}
