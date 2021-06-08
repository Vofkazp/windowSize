let div = document.createElement("div");
let w = document.documentElement.clientWidth;
let h = document.documentElement.clientHeight;

div.style = "position: fixed; top: 0; right: 0; padding: 5px 10px; font: 15px/25px Arial; color: white; background: rgba(255, 0, 0, 0.75);";
div.innerHTML = "Ширина: " + w + "px; Высота: " + h + "px;";
document.body.append(div);

window.addEventListener('resize', () => {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    div.innerHTML = "Ширина: " + w + "px; Высота: " + h + "px;";
});