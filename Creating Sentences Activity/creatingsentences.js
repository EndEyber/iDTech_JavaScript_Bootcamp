let words = ['This', 'is', 'JavaScript', 'Bootcamp!']
let sentence = []
function createSentence (array) {
    for (let i = 0; i < array.length; i++){
         sentence += array[i] + " "
    }
    return sentence
} 
console.log(createSentence(words))