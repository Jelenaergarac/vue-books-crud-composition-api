<template>
  <h1>Add a Book</h1>
  <form @submit.prevent="handleSubmit">
    <label>Title: </label>
    <input type="text" name="title" id="title" v-model="form.title">
    <label>Author: </label>
    <input type="text" name="author" id="author" v-model="form.author">
    <label>Description: </label>
    <input type="text" name="description" id="description" v-model="form.description">
    <label>Genre: </label>
    <input type="text" name="genre" id="genre" v-model="form.genre">
    <label>Image: </label>
    <input type="url" name="image_url" id="image_url" v-model="form.image_url">
    <button type="submit">Submit</button>
    </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import booksService from '@/service/booksService';
export default {
  setup(){
    const {addBook} = booksService();
    const form = reactive({
      'title':'',
      'author':'',
      'description':'',
      'genre':'',
      'image_url':''
    });
    const handleSubmit = async() => {
      await addBook({...form});
    }

    return {
      form,
      handleSubmit
    }
  }

}
</script>

<style>

</style>