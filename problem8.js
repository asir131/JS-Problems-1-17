function createBookList(title, author, quantity) {
    var bookList = {
        title: title,
        author: author,
        quantity: quantity,
        addCopies: function (title,quantity) {
            this.quantity += quantity;
        },
        sellBooks: function(title,quantity){
            this.quantity-=quantity;
        },
        getDetails: function () {
            return `${this.title} by ${this.author}, number of copies available ${this.quantity}`;
        }
    };

    return bookList;
}
var Book1 = createBookList('Bohubrihi', 'Humayun Ahmed', 10);
Book1.addCopies('Bohubrihi',10);
Book1.sellBooks('Bohubrihi',5);
console.log(Book1.getDetails());

var Book2 = createBookList('Bohubrihi2', 'Humayun Ahmed', 5);
Book2.addCopies('Bohubrihi2',100);
Book2.sellBooks('Bohubrihi2',5);
console.log(Book2.getDetails());
