<template>
  <div>
    <!-- 拖拽上传区域 -->
    <div class="drag-upload-zone"
         :class="{ 'is-drag-over': isDragOver }"
         :style="{
        width: typeof width === 'number' ? width + 'px' : width,
        height: typeof height === 'number' ? height + 'px' : height,
      }"
         @dragenter.prevent
         @dragover.prevent
         @dragleave.prevent="isDragOver = false"
         @drop.prevent="handleDrop"
         @click="triggerFileSelect">
      <div class="drag-content">
        <div v-if="!previewUrl && !url">+</div>
        <img v-else
             :src="previewUrl || url"
             alt="预览图片"
             class="preview-img" />
      </div>
    </div>

    <!-- 隐藏的文件选择器 -->
    <input ref="fileInput"
           type="file"
           accept="image/*"
           @change="handleFileSelect"
           style="display: none" />

    <!-- 提示信息（可选） -->
    <!-- <div v-if="selectedFile" class="file-info">
      <p><strong>已选择文件：</strong>{{ selectedFile.name }}</p>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 定义 props：width 和 height，可以是 Number 或 String
const props = defineProps({
  width: {
    type: [String, Number], // 支持 "300px" 或 300（数字）
    default: '100px', // 默认宽度
  },
  height: {
    type: [String, Number], // 支持 "200px" 或 200
    default: '100px', // 默认高度
  },
  url: {
    type: [String],
    default: '', // 默认高度
  },
})
// 响应式数据
const isDragOver = ref(false)
const previewUrl = ref('')
const selectedFile = ref(null)
const fileInput = ref(null)

// 定义自定义事件（Vue 3 Composition API 写法）
const emit = defineEmits(['file-selected']) // 定义一个叫 file-selected 的事件

// 方法：点击上传区域，触发文件选择
const triggerFileSelect = () => {
  fileInput.value?.click()
}

// 方法：处理通过点击选择的文件
const handleFileSelect = (event) => {
  const files = event.target.files
  if (files && files.length > 0) {
    const file = files[0]
    handleFile(file)
  }
}

// 方法：处理拖放的文件
const handleDrop = (event) => {
  isDragOver.value = false
  const files = event.dataTransfer.files
  if (files && files.length > 0) {
    const file = files[0]
    handleFile(file)
  }
}

// 方法：统一处理文件（预览 + emit 事件）
const handleFile = (file) => {
  // 1. 只允许图片
  if (!file.type.startsWith('image/')) {
    alert('请选择图片文件（如 JPG、PNG）')
    return
  }

  // 2. （可选）限制文件大小，比如 5MB
  // if (file.size > 5 * 1024 * 1024) {
  //   alert('图片大小不能超过 5MB')
  //   return
  // }

  // 3. 保存当前文件
  selectedFile.value = file

  // 4. 生成预览 URL
  previewUrl.value = URL.createObjectURL(file)

  console.log('file', previewUrl)

  // 5. 通过 emit 向父组件发送文件对象
  emit('file-selected', { file: file, previewUrl: previewUrl.value }) // 重点：触发自定义事件，并传入 file
}
</script>

<style scoped>
.drag-upload-zone {
  border: 2px dashed #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fafafa;
  margin: 0 auto;
}
.drag-upload-zone:hover {
  border-color: #007bff;
}
.drag-upload-zone.is-drag-over {
  border-color: #007bff;
  background-color: #e3f2fd;
}
.drag-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #666;
  font-size: 16px;
}
.drag-content em {
  color: #007bff;
  font-style: normal;
}
.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.file-info {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
  text-align: center;
}
</style>
