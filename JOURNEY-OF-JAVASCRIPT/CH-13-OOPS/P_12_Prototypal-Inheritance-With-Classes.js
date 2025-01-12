// Define the TicketBooking class with a method to book a ticket
class TicketBooking {
    bookTicket() {
        console.log("Ticket Booked!");
    }
}

// Define the Movie class that extends TicketBooking, inheriting its methods
class Movie extends TicketBooking {
    movieInfo() {
        console.log("Movie Info");
    }
}

// Create an instance of the Movie class
let DDLJ = new Movie();

// Call the inherited method from TicketBooking
DDLJ.bookTicket(); // Output: Ticket Booked!

// Call the method defined in the Movie class
DDLJ.movieInfo(); // Output: Movie Info

// Log the prototype chain
console.log(DDLJ.__proto__); // Movie.prototype
console.log(DDLJ.__proto__.__proto__); // TicketBooking.prototype
console.log(DDLJ.__proto__.__proto__.__proto__); // Object.prototype