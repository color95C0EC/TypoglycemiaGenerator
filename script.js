function shuffle(array) {
  // https://qiita.com/ameRese/items/1138ee922539447dca5b
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function generate() {
  const inputWords = document.getElementById("text-input").value.split("\u{0020}");
  let output = "";

  for (const word of inputWords) {
    if (output !== "") {
      output += "\u{0020}";
    }
    const chars = word.split("");
    if (word.length >= 4) {
      const firstChar = chars.shift();
      const endChar = chars.pop();
      const shuffled = shuffle(chars);
      output += `${firstChar}${shuffled.join("")}${endChar}`;
    } else {
      output += `${word}`;
    }
  }

  document.getElementById("output").value = output;
}

document.getElementById("text-input").addEventListener("input", generate);
document.getElementById("re-generate").addEventListener("click", generate);
