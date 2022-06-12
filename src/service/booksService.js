import router from "@/router";
import axios from "axios";
import { ref } from "vue"

const booksService = () => {
    const books = ref([]);
    const book = ref('');
    const error = ref(null);

    const getBooks = async() => {
        let response = await axios.get('http://localhost:8080/api/books');
        books.value = response.data;
    }
    const getBook = async(id) => {
        let response = await axios.get('http://localhost:8080/api/books/'+id);
        book.value = response.data;
    }
    const addBook = async(newBook) => {
        await axios.post('http://localhost:8080/api/books/', newBook);
        await router.push({ name: 'home'})
    }
    const updateBook = async(id) => {
        await axios.put('http://localhost:8080/api/books/' + id, book.value);
        await router.push({ name: 'home'})
    }
    const destroyBook = async(id) => {
        await axios.delete('http://localhost:8080/api/books/'+id);
         await router.push({ name: "home"})

    }

    return {
        book, 
        books,
        getBook,
        getBooks,
        addBook,
        updateBook,
        destroyBook,
        error
    }

}
export default booksService