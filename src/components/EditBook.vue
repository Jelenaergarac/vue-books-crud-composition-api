<template>
  <h1>Edit a book</h1>
   <form @submit.prevent="handleSubmit">
    <label>Title: </label>
    <input type="text" name="title" id="title" v-model="book.title">
    <label>Author: </label>
    <input type="text" name="author" id="author" v-model="book.author">
    <label>Description: </label>
    <input type="text" name="description" id="description" v-model="book.description">
    <label>Genre: </label>
    <input type="text" name="genre" id="genre" v-model="book.genre">
    <label>Image: </label>
    <input type="url" name="image_url" id="image_url" v-model="book.image_url">
    <button type="submit">Submit</button>
    </form>
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
    const{book, updateBook, getBook} = booksService();
    onMounted(getBook(props.id));

    const handleSubmit = async() => {
      await updateBook(props.id);
    }
    return {
      book, handleSubmit
    }
  }

}
</script>

<style>

</style>