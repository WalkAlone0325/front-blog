<script setup lang="ts">
import ToggleTheme from './ToggleTheme.vue'
</script>

<template>
  <header>
    <div>
      Blog
    </div>

    <nav>
      <router-link to="/posts" title="Blog">
        <span>Blog</span>
      </router-link>
      <router-link to="/projects" title="Projects">
        <span>Projects</span>
      </router-link>

      <a href="https://github.com/WalkAlone0325" target="_blank" title="GitHub">github</a>
      
      <toggle-theme />
    </nav>
  </header>
</template>