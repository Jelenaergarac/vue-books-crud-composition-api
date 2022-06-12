<template>
<div v-if="book">
<h1> {{ book.title }} </h1>
<small> {{ book.author }} </small>
<p> {{ book.description }} </p>
<div><span> {{ book.genre }} </span>
</div>
<img :src="book.image_url" alt="book.title">

      <div>
        <router-link :to="{ name: 'editBook',params: { id: book.id}}">
<button> Edit a Book</button>
   </router-link>
    <button @click="handleDelete(book.id)">Delete a Book</button>

</div>
</div>
<div v-else>Loading a book...</div>


</template>

<script>
import booksService from '@/service/booksService'
import { onMounted } from '@vue/runtime-core';
export default {
   props: {
        id: {
            required: true,
            type: String,
        }
    },
  setup(props){
    const { book, getBook, destroyBook} = booksService();
    onMounted(getBook(props.id))

const handleDelete = async(id) => {
  if(!window.confirm('Are you sure?')){
    return;
  }
  await destroyBook(id);
}

    return{
    book, 
    handleDelete
    }
  }

}
</script>

<style>

</style>