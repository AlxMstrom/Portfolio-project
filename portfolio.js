const greetings = ['Good morning', 'Good day', 'Great evening', 'Good night'];
const mood = ['wonderfull', 'awfull', 'awsome', 'bad'];
const duty = ['dishes', 'luandring', 'hardwork', 'exercise'];

const randomize = arr => {

    return Math.floor(Math.random() * arr.length);
    
}

console.log(`${greetings[randomize(greetings)]} I hope that you get a ${mood[randomize(mood)]} time!. Dont forget about the ${duty[randomize(duty)]}!`);






/* [greetings] i hope that you get a [mood] time!. Dont forget about the [duty]*/