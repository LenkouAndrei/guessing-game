class GuessingGame {
    constructor() {
    	this.max = null;
    	this.min = null;
    	this.mid = null;
    }

    setRange(min, max) {
    	this.max = max;
    	this.min = min;
    }

    guess() {
    	this.mid = Math.ceil(this.min + ((this.max - this.min)/2));
    	return this.mid;
    }

    lower() {
    	this.max = (this.mid);
    }

    greater() {
    	this.min = (this.mid);
    }
}

module.exports = GuessingGame;
