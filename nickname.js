createNickname = function() {
  // Adjective array
  var adjectives = [
    "Foreboding",
    "Illuminating",
    "Inciting",
    "Contagious",
    "Chilling",
    "Sir",
    "Progressive",
    "Ecstatic",
    "Forgiving",
    "Loving",
    "Flamboyant",
    "Prestigious",
    "Prosperous",
    "Eccentric",
    "Rambunctious",
    "Round",
    "Dank",
    "Sleepy",
    "Aggravating",
    "Mediocre",
    "Satisfying",
    "Lighthearted",
    "Inspiring",
    "Positive",
    "Encouraging",
    "Fortuitous",
    "Enduring",
    "Ignorant",
    "Hilarious",
    "Outspoken",
    "Visionary",
  ]

  // Noun array
  var nouns = [
    "Town",
    "Cat",
    "Spice",
    "Playstation",
    "Mango",
    "Batman",
    "Meow",
    "Jerky",
    "Toaster",
    "Darpa Nanny Chief",
    "Crayon",
    "Chair",
    "Pear",
    "Sunflower",
    "Dictator",
    "Queen",
    "San Francisco",
    "Doctor",
    "Morgan Freeman",
    "Arnold Schwarzenegger",
    "Lightbulb",
    "Turkey",
    "Turtle",
    "Firefly",
    "Bill Gates",
    "Square",
    "Crocodile",
    "Grapefruit",
    "Juice",
    "Stairs",
    "Memes"
    ]

  // Generate a Random nickname
  var n = nouns.length

  var z = Math.floor(n * Math.random())
  var adjective = adjectives[z]

  var x = Math.floor(n * Math.random())
  var noun = nouns[x]

  var nickname = adjective + " " + noun
  
  // Update the text element
  var divText = "Friend - from this day forth, you shall be known as: "
  
  document.getElementById("nameBlurb").innerHTML = divText;
  document.getElementById("nickname").innerHTML = nickname.bold();
  
  // Choose a random color for the nickname
  var colors = [
    "crimson",
    "darkred",
    "midnightblue",
    "green",
    "rebeccapurple",
    "sienna"
  ]
  var colorIndex = Math.floor(colors.length * Math.random())
  document.getElementById("nickname").style.color = colors[colorIndex];
}

