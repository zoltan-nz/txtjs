var canvas;
var stage;

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);

  stage = new createjs.Stage(canvas);

  var text;
  text = new txt.CharacterText({
    text: "First poiretone",
    font: "poiretone",
    align: txt.Align.TOP_LEFT,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 0,
    accessibilityPriority: 0,
    accessibilityText: "<h1>First poiretone</h1>",
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Second poiretone",
    font: "poiretone",
    align: txt.Align.TOP_CENTER,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 0,
    accessibilityPriority: 1,
    accessibilityText: "<h2>Second poiretone</h2>",
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Third poiretone",
    font: "poiretone",
    align: txt.Align.TOP_RIGHT,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 0,
    accessibilityPriority: 2,
    accessibilityText: "<h3>Third poiretone</h3>",
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "ANOTHER 1 poiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_LEFT,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 410,
    accessibilityPriority: 0,
    accessibilityText: "<h1>ANOTHER 1 poiretone</h1>",
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "low 5 poiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_CENTER,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 410,
    accessibilityPriority: 5,
    accessibilityText: "<p>low 5 poiretone</p>",
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "poiretone default",
    font: "poiretone",
    align: txt.Align.MIDDLE_RIGHT,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "low 3 poiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_LEFT,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 820,
    accessibilityPriority: 3,
    accessibilityText: "<p>low 3 poiretone</p>",
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "another default poiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_CENTER,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "bottom 7 poiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_RIGHT,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 820,
    accessibilityPriority: 7,
    accessibilityText: "<p>bottom 7 poiretone</p>",
    debug: true
  });

  stage.addChild(text);

  stage.update();
}
