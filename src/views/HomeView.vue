<template>
<main>

<div v-if="books.length"></div>
<div v-else>Loading...</div>
 <div class="posts" v-for="book in books" :key="book.id">
  <h1> {{ book.title }} </h1>
  <h3> <i> {{ book.author }} </i></h3>
  <img :src="book.image_url" alt="{{book.title}}">
  <div>
    <router-link :to="{ name: 'singleBook', params: {id: book.id} }">See a Book</router-link>
  </div>
 </div>
 </main>
</template>

<script>
// @ is an alias to /src

import booksService from '@/service/booksService'
import { onMounted } from '@vue/runtime-core';

export default {
  name: 'HomeView',
  components: {
  },
  setup(){
    const{books, getBooks} = booksService();
    onMounted(getBooks());

    return {
      books
    }
  }
}
</script>
<style>
img {
  max-width: 100%;
  height: 300px;
}
main {
  display: flex;
  justify-content: center;
    max-width: 100%;
    flex-wrap: wrap;

}
.posts {
  padding: 2rem;

}
button {
  padding: 8px 15px;
  border-radius: 5px;
  background: red;
  color: aliceblue;
  cursor: pointer;
}
</style>
