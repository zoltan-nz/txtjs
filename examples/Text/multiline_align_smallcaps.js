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

  var text;
  text = new txt.Text({
    text: "Love me some poiretone",
    font: "poiretone",
    align: txt.Align.TOP_LEFT,
    characterCase: txt.Case.SMALL_CAPS,
    lineHeight: 50,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "Love me some poiretone",
    font: "poiretone",
    align: txt.Align.TOP_CENTER,
    characterCase: txt.Case.SMALL_CAPS,
    lineHeight: 50,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "Love me some poiretone",
    font: "poiretone",
    align: txt.Align.TOP_RIGHT,
    characterCase: txt.Case.SMALL_CAPS,
    lineHeight: 50,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "Love me some poiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_LEFT,
    characterCase: txt.Case.SMALL_CAPS,
    lineHeight: 50,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "Love me some poiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_CENTER,
    characterCase: txt.Case.SMALL_CAPS,
    lineHeight: 50,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "Love me some poiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_RIGHT,
    characterCase: txt.Case.SMALL_CAPS,
    lineHeight: 50,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "Love me some poiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_LEFT,
    characterCase: txt.Case.SMALL_CAPS,
    lineHeight: 50,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "Love me some poiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_CENTER,
    characterCase: txt.Case.SMALL_CAPS,
    lineHeight: 50,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "Love me some poiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_RIGHT,
    characterCase: txt.Case.SMALL_CAPS,
    lineHeight: 50,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  stage.update();
}
