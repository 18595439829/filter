<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/my">My</router-link> |
      <router-link to="/canvas">Canvas</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  text-align: center;
}
</style>
