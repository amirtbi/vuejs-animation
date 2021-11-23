<template>
  <div class="card-container">
    
    <slot name="content"></slot>
  </div>
</template>


<style scoped>
div.card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    width: 350px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    /* max-width: 250px; */
    cursor: pointer;
    transition: box-shadow 0.5s ease-in-out;
    backface-visibility: hidden;
    margin-left: 1.5rem;
  }
  div.card-container:hover {
    
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 1);
  }
 
</style>
