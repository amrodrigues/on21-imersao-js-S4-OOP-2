const Autor = require('./Author.js') 

class Book extends Autor{
 #nome;
 #isbn;
 #price;
 #qty;
    constructor(nome,isbn, name, price, qty)
   {
    super(name)
    this.#nome =nome;
    this.#isbn = isbn;
    this.#price = price;
    this.#qty=qty; 
   }

    get nome(){return this.#nome;}
    set nome(nome){return this.#nome =nome;}
    get isbn(){return this.#isbn}
    set isbn(isbn){return this.#isbn=isbn;}
    get price(){return this.#price}
    set price(price) {return this.#price=price}
    get qty(){return this.#qty}
    set qty(qty) {return this.#qty=qty}

    
    getNome(){return `O Nome do Livro é ${this.#nome}`}
    getISBN(){return `O nr da inscrição é ${this.#isbn}`}
    getPrice(){return `O valor do livro é ${this.#price}`}
    getQty(){return `A quantidade do livro é ${this.#qty}`}

    setNome(nome){
        this.#nome = nome;
        return `O Nome do Livro é ${this.#nome}`}

    setISBN(isbn){
        this.#isbn = isbn;
        return `O nr da inscrição é ${this.#isbn}`}

    setPrice(price){
        this.#price = price;
        return `O valor do livro é ${this.#price}`}

    setQty(qty){
        this.#qty = qty;
        return `A quantidade do livro é ${this.#qty}`}

    LivroAutor(){
        return `O nome do autor do livro é ${this.name}`}
    
        
}

const Livro = new Book('Harry Potter - Ordem da Fênix','123145', 'Hollinks', 35, 3)