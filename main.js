let color = 'blue';
switch (color) {
    case 'blue':
        console.log('the color is blue');
        break;
    case 'red':
        console.log('the color is red');
        break;

    default:
        console.log('the coloor dosnt match any');
        break;
}

function Persone(name, email, DoB){
    this.DoB = DoB;
    this.email = email;
    this.name = name;

    this.display = function()
    {
        return `Name: ${this.name}\nEmail: ${this.email} \nDate of Birth: ${this.DoB}`;
    };

}
let Persone1 = new Persone('Habib', 'habib@gmail.com', '15-03-1990');
let Persone2 = new Persone('Hady', 'hady@gmail.com', '1-06-1995');

console.log(Persone2.email)
console.log(Persone1.display());
console.log(Persone2.display());