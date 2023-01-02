function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(60);
}

PILL_COUNT = 2000;
FRAME_COUNT = 0;
PILL_MOTION_INCREMENT = 0.01;

function drawDiagnostics() {
    noStroke();
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    let frameRate = round(getFrameRate());
    text(`${FRAME_COUNT} (${frameRate}fps)`, 5, 5)
}

function drawDot(pillIndex, offset) {
    fill(128);
    noStroke();
    circle(19, 100 + sin(FRAME_COUNT * PILL_MOTION_INCREMENT + pillIndex) * 100, 4);
}

function draw() {
    background(220);
    //drawDiagnostics();
    translate(innerWidth/2, innerHeight/2);
    for (var pillIndex = 0; pillIndex < PILL_COUNT; pillIndex++) {
        push();
        rotate((2 * PI / PILL_COUNT) * pillIndex);
        drawDot(pillIndex, 0);
        pop();
    }
    FRAME_COUNT++;
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}