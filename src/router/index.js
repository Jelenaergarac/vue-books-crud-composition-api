import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddBook from '../components/AddBook.vue'
import EditBook from '../components/EditBook.vue'
import SingleBook from '../views/SingleBook.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books/:id',
    name: 'singleBook',
    component: SingleBook,
    props: true
  },
{
  path: '/add-book',
  name: 'addBook',
  component: AddBook
},
{
  path:'/edit/:id',
  name:'editBook',
  component: EditBook,
  props: true
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
