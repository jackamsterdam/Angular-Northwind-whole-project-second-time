// class Kitten {
    
//     public name: string;
//     private age: number;
//     protected color: string;

//     public constructor(name: string, age: number, color: string) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }

//     public display(): void {
//         console.log("Name: " + this.name);
//         console.log("Age: " + this.age);
//         console.log("Color: " + this.color);
//     }

// }

// Same as above: 
class Kitten {
    
    // Constructor Assignment: 
    public constructor(public name: string, private age: number, protected color: string) { }

    public display(): void {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Color: " + this.color);
    }

}

export default Kitten;