// import SVG from './../util/snap.svg'

class User {

    constructor(name,age) {

        this.name = name || ''
        this.age = age || ''
    }

    eat() {

        console.log('eat方法');

    }

}

module.exports = User