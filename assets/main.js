let coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random())

    },
    toString: function () {

        if (this.state === 0) {
            return 'heads'
        } else {
            return 'Tails'

        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = "assets/images/heads.jpeg"
        } else {
            image.src = "assets/images/Tails.jpeg"

        }
        return image;
    }
};
const body = document.querySelector('body')

function display20Flips() {
    for (index = 0; index < 20; index++) {
        coin.flip()
        let headsOrTails = document.createElement('div')
        body.append(headsOrTails)
        headsOrTails.append(coin.toString())

    }





} 

function display20Images() {
    for (index = 0; index < 20; index++) {
        coin.flip()
        let side = document.createElement('div')
        body.append(side)
        side.append(coin.toHTML())

    }

}