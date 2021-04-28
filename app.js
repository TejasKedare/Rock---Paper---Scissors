var pc_rock = (document.getElementsByClassName("computer").src =
  "./img/rock.png");
var pc_paper = (document.getElementsByClassName("computer").src =
  "./img/paper.png");
var pc_scissor = (document.getElementsByClassName("computer").src =
  "./img/scissor.png");

var player_rock = (document.getElementsByClassName("player").src =
  "./img/rock.png");
var player_paper = (document.getElementsByClassName("player").src =
  "./img/paper.png");
var player_scissor = (document.getElementsByClassName("player").src =
  "./img/scissor.png");

var items = [pc_rock, pc_paper, pc_scissor];

function any() {
  var any_item = items[Math.floor(Math.random() * 3)];
  var random = document
    .getElementById("computer")
    .setAttribute("src", any_item);
  return any_item;
}

function main() {
  let rock = document
    .getElementById("rock")
    .addEventListener("click", function () {
      document.getElementById("player").setAttribute("src", player_rock);
      let any_rock = any();

      if (player_rock === any_rock) {
        document.getElementById("result").innerHTML = "its tie";
      } else if (player_paper === any_rock) {
        document.getElementById("result").innerHTML = "Computer win";
      } else {
        document.getElementById("result").innerHTML = "Player win";
      }
    });

  let paper = document
    .getElementById("paper")
    .addEventListener("click", function () {
      document.getElementById("player").setAttribute("src", player_paper);
      let any_paper = any();
      if (player_paper === any_paper) {
        document.getElementById("result").innerHTML = "its tie";
      } else if (player_scissor === any_paper) {
        document.getElementById("result").innerHTML = "Computer win";
      } else {
        document.getElementById("result").innerHTML = "Player win";
      }
    });

  let scissor = document
    .getElementById("scissor")
    .addEventListener("click", function () {
      document.getElementById("player").setAttribute("src", player_scissor);
      let any_scissor = any();
      if (player_scissor === any_scissor) {
        document.getElementById("result").innerHTML = "its tie";
        console.log("tie");
      } else if (player_rock === any_scissor) {
        document.getElementById("result").innerHTML = "Computer win";
      } else {
        document.getElementById("result").innerHTML = "Player win";
      }
    });
}

main();
