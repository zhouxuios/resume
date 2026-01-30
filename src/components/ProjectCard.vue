<template>
  <div class="card">
    <h2>{{ sectionTitle }}</h2>
    <div v-for="proj in projects" :key="proj.title" class="project-item">
      <div class="project-title">{{ proj.title }}</div>
      <div class="project-desc">{{ proj.desc }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sectionTitle: String,
  projects: Array
})
</script>

<style scoped>
/* 复用 card 基础样式 */
.card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid white;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
h2 {
  font-size: 1.25rem;
  color: var(--primary);
  margin-top: 0;
  display: flex;
  align-items: center;
}
h2::before {
  content: "";
  display: inline-block;
  width: 4px; height: 1.25rem;
  background: var(--primary);
  margin-right: 12px;
  border-radius: 2px;
}
.project-item { margin-bottom: 20px; text-align: left; }
.project-item:last-child { margin-bottom: 0; }
.project-title { font-weight: 600; color: #0f172a; margin-bottom: 4px; }
.project-desc { font-size: 0.95rem; color: var(--text-sub); line-height: 1.5; }
</style>