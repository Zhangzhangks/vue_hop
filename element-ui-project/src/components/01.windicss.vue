<template>
    <div>
      <!-- windicss的简单实用 -->
    <button class="windicss">按钮</button>
      <!-- <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row> -->
  
    </div>
  </template>
  <style lang="css" scoped>
    .windicss{ 
      /* 抽离出来 */
        @apply bg-purple-500  text-cyan-400 py-4 rounded-3xl
        
    }
  </style>