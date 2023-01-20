let scores = [
  { name: "Andrew", score: 2, class: "andrew" },
  { name: "Andy", score: 3, class: "andy" },
  { name: "Matt S", score: 1, class: "matts" },
  { name: "Rich", score: 2, class: "rich" },
  { name: "Tino", score: 2, class: "tino" },
  { name: "Dylan", score: 4, class: "dylan" },
  { name: "Hannah", score: 2, class: "hannah" },
  { name: "Mario", score: 2, class: "mario" },
];

function output() {
  let output = "";
  let plural;
  console.log("test");
  scores.sort((a, b) => b.score - a.score);
  for (let i = 0; i < scores.length; i++) {
    if (scores[i].score == 1) {
      plural = "";
    } else {
      plural = "s";
    }
    output +=
      "<div class='scores__score " +
      scores[i].class +
      "'><h2>" +
      scores[i].name +
      "</h2><h3>" +
      scores[i].score +
      " point" +
      plural +
      "</h3></div>";
  }

  document.write(output);
}
