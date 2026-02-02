<template>
  <div class="container">
    <header>
      <h1>CHRIS ZHOU</h1>
      <div class="subtitle">{{job}}开发工程师 · 自动化运维专家</div>
      <p>📧 contact@domain.com | 🔗 github.com/yourname</p>
    </header>

    <SkillCard :skills="mySkills" />
    
    <ProjectCard 
      sectionTitle="自动化运维实践" 
      :projects="myProjects" 
    />

    <footer>
      <p><span class="status-dot pulse"></span> 系统状态: 已通过 GitHub Actions 自动部署</p>
      <p>© 2026 Chris Zhou. Powered by Nginx & GitHub Pages</p>
    </footer>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue'
import SkillCard from './components/SkillCard.vue'
import ProjectCard from './components/ProjectCard.vue'

const mySkills = ref(['Java', 'GitHub Actions', 'Nginx', 'Shell', 'Vue.js', 'Docker'])
const myProjects = ref([
  { title: '多云容灾部署系统', desc: '基于 GitHub Actions 实现阿里云与 GitHub Pages 双向同步。' },
  { title: 'Shell 自动化工具箱', desc: '自研 Linux 环境初始化脚本。' }
])
const typeMap = {
  full: '全栈',
  backend: '后端',
  fronted: '前端'
}

// 创建一个响应式变量
const currentPath = ref(window.location.pathname)

// 计算 job
const job = computed(() => {
  if (currentPath.value.includes('/full')) return typeMap.full
  if (currentPath.value.includes('/backend')) return typeMap.backend
  if (currentPath.value.includes('/fronted')) return typeMap.fronted
  return typeMap.full
})
</script>

<style>
/* 这里放全局变量和基础布局 */
:root {
  --primary: #2563eb;
  --text-main: #1e293b;
  --text-sub: #64748b;
  --card-bg: rgba(255, 255, 255, 0.8);
  --success: #10b981;
}

body {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: var(--text-main);
  margin: 0;
  padding: 40px 20px;
  min-height: 100vh;
}

.container { max-width: 900px; margin: 0 auto; }
header { text-align: center; margin-bottom: 50px; }
h1 {
  font-size: 2.5rem;
  background: linear-gradient(to right, #1e293b, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}
.subtitle { color: var(--text-sub); margin-top: 10px; }
footer { margin-top: 50px; text-align: center; font-size: 0.85rem; color: var(--text-sub); }

/* 状态圆点基础样式 */
.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--success);
  border-radius: 50%;
  position: relative;
  vertical-align: middle; /* 确保小圆点和文字中线对齐 */
}

/* 呼吸灯效果校准 */
.pulse::after {
  content: "";
  position: absolute;
  /* 关键修复：将扩散层拉回到中心 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 先位移再缩放 */
  
  width: 100%;
  height: 100%;
  background: var(--success);
  border-radius: 50%;
  animation: ripple 2s infinite;
}

@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(1); /* 保持居中缩放 */
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>