<template>
  <div class="card">
    <h2>技术栈</h2>
    <div class="tag-group">
      <span v-for="skill in skills" :key="skill" class="tag">{{ skill }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skills: { type: Array, required: true }
})
</script>

<style scoped>
.card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid white;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.card:hover { transform: translateY(-5px); }
h2 {
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  color: var(--primary);
  margin-top: 0;
}
h2::before {
  content: "";
  display: inline-block;
  width: 4px; height: 1.25rem;
  background: var(--primary);
  margin-right: 12px;
  border-radius: 2px;
}
.tag-group { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  background: #dbeafe;
  color: #1e40af;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}
</style>