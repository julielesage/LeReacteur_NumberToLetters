const NumberToLetters = num => {
  const unit = [
    "zero",
    "un",
    "deux",
    "trois",
    "quatre",
    "cinq",
    "six",
    "sept",
    "huit",
    "neuf",
    "dix",
    "onze",
    "douze",
    "treize",
    "quatorze",
    "quinze",
    "seize",
    "dix-sept",
    "dix-huit",
    "dix-neuf"
  ];
  const dizaine = [
    "dix",
    "vingt",
    "trente",
    "quarante",
    "cinquante",
    "soixante",
    "quatre-vingt"
  ];

  const plus = ["cent", "mille"];
  const Snum = String(num);
  let result = "";
  let SnumLen = Snum.length;
  let numSwap = num;
  let numSwapUnit = num;

  if (num < 0 || num > 9999 || isNaN(num) || num % 1 !== 0)
    return "Paramètre invalide";

  if (num < 20) {
    SnumLen = 0;
    return unit[num];
  }

  if (SnumLen === 4) {
    numSwap = Math.floor(num / 1000);
    if (numSwap === 1) result += "mille";
    else if (numSwap > 1) result += unit[numSwap] + " mille";
    numSwap = num % 1000;
    if (numSwap === 0) return result;
    else if (numSwap < 10) {
      SnumLen -= 3;
      result += " ";
    } else if (numSwap < 100) {
      SnumLen -= 2;
      result += " ";
    } else {
      SnumLen -= 1;
      result += " ";
    }
  }

  if (SnumLen === 3) {
    numSwap = Math.floor(numSwap / 100);
    if (numSwap === 1) result += " cent";
    else if (numSwap > 1) result += unit[numSwap] + " cent";
    numSwap = num % 100;
    if (numSwap === 0) return result;
    else if (numSwap < 10) {
      SnumLen -= 2;
      result += " ";
    } else {
      SnumLen -= 1;
      result += " ";
    }
  }
  if (SnumLen === 1) result += unit[numSwap];

  if (SnumLen === 2) {
    numSwap = Math.floor(numSwap / 10);
    numSwapUnit = num % 10;
    if (numSwapUnit === 0) return (result += dizaine[numSwap - 1]);
    else if (numSwap === 8)
      result += dizaine[numSwap - 2] + "-" + unit[numSwapUnit];
    else if (numSwap !== 7 && numSwap !== 9 && numSwapUnit !== 1)
      result += dizaine[numSwap - 1] + "-" + unit[numSwapUnit];
    else if (numSwap !== 7 && numSwap !== 9 && numSwapUnit === 1)
      result += dizaine[numSwap - 1] + "-et-un";
    else if (numSwap === 7 && numSwapUnit === 1)
      return (result += "soixante-et-onze");
    else if (numSwap === 7)
      result += dizaine[numSwap - 2] + "-" + unit[numSwapUnit + 10];
    else if (numSwap === 9)
      result += dizaine[numSwap - 3] + "-" + unit[numSwapUnit + 10];
    SnumLen -= 1;
  }

  return result;
};

console.log(NumberToLetters(1009));
