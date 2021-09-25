// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor( radius ) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        return this.radius = diameter / 2
    }

    get circumference() {
        return pi * (this.radius * 2)
    }

    set circumference(circumference) {
        return this.radius = circumference / (pi * 2)
    }

    get area() {
        return pi * (this.radius ** 2)
    }

    set area(area) {
        return this.radius = Math.sqrt( area / pi )
    }
}