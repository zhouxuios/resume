<template>
  <div class="container">
    <div class="download-btn no-print" @click="download">pdf下载</div>
    <header>
      <h1>CHRIS ZHOU</h1>
      <div class="subtitle">全栈开发工程师 · 自动化运维专家</div>
      <p>📧 contact@domain.com | 🔗 github.com/yourname</p>
    </header>

    <SkillCard :skills="mySkills" />
    
    <ProjectCard 
      sectionTitle="自动化运维实践" 
      :projects="myProjects" 
    />

    <footer class="no-print">
      <p><span class="status-dot pulse"></span> 系统状态: 已通过 GitHub Actions 自动部署</p>
      <p>© 2026 Chris Zhou. Powered by Nginx & GitHub Pages</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SkillCard from './components/SkillCard.vue'
import ProjectCard from './components/ProjectCard.vue'

const mySkills = ref(['Java', 'GitHub Actions', 'Nginx', 'Shell', 'Vue.js', 'Docker'])
const myProjects = ref([
  { title: '多云容灾部署系统', desc: '基于 GitHub Actions 实现阿里云与 GitHub Pages 双向同步。' },
  { title: 'Shell 自动化工具箱', desc: '自研 Linux 环境初始化脚本。' }
])
const download = () => {
  window.print()
}
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

.container { max-width: 900px; margin: 0 auto;}
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

/* 呼吸灯效果保持在全局 */
.status-dot {
  display: inline-block;
  width: 8px; height: 8px;
  background: var(--success);
  border-radius: 50%;
  position: relative;
}
.pulse::after {
  content: ""; position: absolute;
  width: 100%; height: 100%;
  background: var(--success);
  border-radius: 50%;
  animation: ripple 2s infinite;
}
@keyframes ripple {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(3); opacity: 0; }
}
.container .download-btn {
  position: fixed;
  top: 20px; right: 20px;
  background: var(--primary);
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
}
</style>