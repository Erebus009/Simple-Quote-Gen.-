var word = [
    'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    'The way to get started is to quit talking and begin doing. -Walt Disney',
    'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
    "Cheese is made from milk."

]






function newQoute() {
    var randomNumber = Math.floor(Math.random() * (word.length));
    document.getElementById('Display').innerHTML = word[randomNumber];
}
