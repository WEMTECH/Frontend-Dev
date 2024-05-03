function Staff(name, age, city, language){
    this.name = name;
    this.age = age;
    this.city = city;
    this.language = language;
    this.greet = function() {
        console.log("Welcome to our company");
    }
}

staff1 = new Staff('wisdom', 29, 'Lagos', ['English', 'Igbo']);
staff2 = new Staff('Ifeoma', 28, 'Enugu', ['french', 'english', 'igbo']);

console.log(staff2.name, staff1.greet(staff1.name));