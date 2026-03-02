function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Car.prototype.displayInfo = function() {
    console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
};

Car.prototype.drive = function() {
    console.log("Drive started.");
};

const tesla = new Car("Tesla", "Model 3", 2023);
const bmw = new Car("BMW", "M5", 2022);

tesla.displayInfo();
tesla.drive();
bmw.displayInfo();
bmw.drive();


class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        console.log(`Student ${this.name} (${this.age} years old) is studying. Current grade: ${this.grade}`);
    }
}

const student1 = new Student("Oleksandr", 19, "A");
const student2 = new Student("Maria", 20, "B+");

student1.study();
student2.study();


class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const myCircle = new Circle("Blue", 5);
const myRect = new Rectangle("Red", 10, 4);

console.log(`Circle - Color: ${myCircle.color}, Area: ${myCircle.calculateArea().toFixed(2)}`);
console.log(`Rectangle - Color: ${myRect.color}, Area: ${myRect.calculateArea()}`);


class Button {
    constructor(text, border, color, background) {
        this.text = text;
        this.border = border;
        this.color = color;
        this.background = background;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        const btn = document.createElement('button');
        btn.innerText = this.text;
        btn.classList.add('generated-btn');
        btn.style.border = this.border;
        btn.style.color = this.color;
        btn.style.backgroundColor = this.background;

        btn.addEventListener('click', () => {
            console.log(`Кнопка [${this.text}] натиснута. Колір кнопки – [${this.background}]`);
        });

        container.appendChild(btn);
        this.element = btn;
    }
}

class RoundedButton extends Button {
    constructor(text, border, color, background, borderRadius) {
        super(text, border, color, background);
        this.borderRadius = borderRadius;
    }

    render(containerId) {
        super.render(containerId);
        this.element.style.borderRadius = this.borderRadius;
        this.dropShadow();
    }

    dropShadow() {
        this.element.addEventListener('mouseenter', () => {
            this.element.style.boxShadow = "0 8px 15px rgba(255, 255, 255, 0.3)";
        });
        this.element.addEventListener('mouseleave', () => {
            this.element.style.boxShadow = "none";
        });
    }
}

const btn1 = new Button("Confirm", "1px solid white", "white", "#3b82f6");
const btn2 = new Button("Cancel", "1px solid #f87171", "#f87171", "transparent");
const btn3 = new Button("Submit", "none", "white", "#10b981");

btn1.render('button-container');
btn2.render('button-container');
btn3.render('button-container');

const rBtn1 = new RoundedButton("Explore", "none", "white", "#8b5cf6", "30px");
const rBtn2 = new RoundedButton("Start", "none", "white", "#f59e0b", "12px");
const rBtn3 = new RoundedButton("Glass", "1px solid rgba(255,255,255,0.2)", "white", "rgba(255,255,255,0.1)", "50px");

rBtn1.render('button-container');
rBtn2.render('button-container');
rBtn3.render('button-container');
