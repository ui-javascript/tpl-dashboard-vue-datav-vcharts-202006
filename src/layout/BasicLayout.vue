<template>
  <div>
    <dv-full-screen-container>
      <transition name="fade-transform" mode="out-in">
        <router-view/>
      </transition>
    </dv-full-screen-container>
  </div>
</template>
