function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

X_STEP = 20;

function draw() {
    background(32, 16, 0);
    stroke(128);
    translate(0, innerHeight/2);
    strokeWeight(5);


    for (let r = 0; r < 180; r += 10)
    {
        push();
        rotate(r);
        stroke(255, 255, 0);
        strokeWeight(2);
        for (let i = 0; i < innerWidth / X_STEP; i++)
        {
            if (i % 2 == 0)
            {
                fill(128, 16, 0);
                rect(i * X_STEP, sin(i) * 20, 20, 20);
            }
            else
            {
                fill(64, 16, 0);
                circle(i * X_STEP, sin(i) * 20, 20)
            }
        }
        pop();
    }

    noStroke();
    fill(128, 0, 0);
    circle(0, 0, innerHeight/3);
}

function windowResized()
{
    resizeCanvas(innerWidth, innerHeight);
}