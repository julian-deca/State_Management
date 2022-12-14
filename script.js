import Player from "./player.js";
import ImputHandler from "./input.js";
import { drawStatusText } from "./utils.js";

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height);
  const input = new ImputHandler();
  let lastTime = 0;
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx, deltaTime);
    player.update(input.lastKey);
    drawStatusText(ctx, input, player);
    requestAnimationFrame(animate);
  }
  animate(0);
});
