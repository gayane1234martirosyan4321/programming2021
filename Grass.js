let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature {
    

    mult() {
        var empty = getRandomArrayElement(this.chooseCell(0))//randomը չեմ փոխել p5 գրադարանը չկա
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}