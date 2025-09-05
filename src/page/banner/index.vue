<template>
  <div class="container">
    <div style="position: absolute; top: 10px; left: 10px; display: flex; align-items: center; justify-content: center; width: 60px; height: 60px;"
         @click="router.back()">
      <van-icon name="arrow-left" />
      <span style="margin-left: 4px;">返回</span>
    </div>
    <div class="top-container">
      <div class="banner-box"
           id="banner-box"
           ref="banner">
        <img :src="selectedTemplate.bgImg"
             alt=""
             class="bg" />
        <div class="item-container">
          <div class="item">
            <img :src="data1.avatar"
                 alt=""
                 class="avatar" />
            <span class="name"
                  :style="'background:' + selectedTemplate.nameBgColor">{{ data1.name }}</span>
            <div class="zhanji"
                 :style="'background:' + selectedTemplate.zhanJiBgColor">
              {{ formatZj(data1.zhanJi , data1.zhanJiText)[0] }}<span class="percent-text">{{ formatZj(data1.zhanJi , data1.zhanJiText)[1] }}</span>{{ formatZj(data1.zhanJi , data1.zhanJiText)[2] }}
            </div>
            <div class="zhanji1-box">
              <div v-if="data1.zhanJi1"
                   class="zhanji1"
                   ref="zhanJi11"
                   :style="'left: ' + zhanJi11Left + 'px'">
                {{ formatZj(data1.zhanJi1 , data1.zhanJi1Text)[0] }}<span class="percent-text">{{ formatZj(data1.zhanJi1 , data1.zhanJi1Text)[1] }}</span>{{ formatZj(data1.zhanJi1 , data1.zhanJi1Text)[2] }}
              </div>
              <div v-if="data1.zhanJi2"
                   class="zhanji2"
                   ref="zhanJi21"
                   :style="'left: ' + zhanJi21Left + 'px; background:' + selectedTemplate.zhanJi2BgColor + '; color:' + selectedTemplate.zhanJi2TextColor">
                {{ data1.zhanJi2 }}
              </div>
            </div>
          </div>
          <div class="item">
            <img :src="data2.avatar"
                 alt=""
                 class="avatar" />
            <span class="name"
                  :style="'background:' + selectedTemplate.nameBgColor">{{ data2.name }}</span>
            <div class="zhanji"
                 :style="'background:' + selectedTemplate.zhanJiBgColor">
              {{ formatZj(data2.zhanJi , data2.zhanJiText)[0] }}<span class="percent-text">{{ formatZj(data2.zhanJi , data2.zhanJiText)[1] }}</span>{{ formatZj(data2.zhanJi , data2.zhanJiText)[2] }}
            </div>
            <div class="zhanji1-box">
              <div v-if="data2.zhanJi1"
                   class="zhanji1"
                   ref="zhanJi12"
                   :style="'left: ' + zhanJi12Left + 'px'">
                {{ formatZj(data2.zhanJi1 , data2.zhanJi1Text)[0] }}<span class="percent-text">{{ formatZj(data2.zhanJi1 , data2.zhanJi1Text)[1] }}</span>{{ formatZj(data2.zhanJi1 , data2.zhanJi1Text)[2] }}
              </div>
              <div v-if="data2.zhanJi2"
                   class="zhanji2"
                   ref="zhanJi22"
                   :style="'left: ' + zhanJi22Left + 'px; background:' + selectedTemplate.zhanJi2BgColor + '; color:' + selectedTemplate.zhanJi2TextColor">
                {{ data2.zhanJi2 }}
              </div>
            </div>
          </div>
          <div class="item">
            <img :src="data3.avatar"
                 alt=""
                 class="avatar" />
            <span class="name"
                  :style="'background:' + selectedTemplate.nameBgColor">{{ data3.name }}</span>
            <div class="zhanji"
                 :style="'background:' + selectedTemplate.zhanJiBgColor">
              {{ formatZj(data3.zhanJi , data3.zhanJiText)[0] }}<span class="percent-text">{{ formatZj(data3.zhanJi , data3.zhanJiText)[1] }}</span>{{ formatZj(data3.zhanJi , data3.zhanJiText)[2] }}
            </div>
            <div class="zhanji1-box">
              <div v-if="data3.zhanJi1"
                   class="zhanji1"
                   ref="zhanJi13"
                   :style="'left: ' + zhanJi13Left + 'px'">
                {{ formatZj(data3.zhanJi1 , data3.zhanJi1Text)[0] }}<span class="percent-text">{{ formatZj(data3.zhanJi1 , data3.zhanJi1Text)[1] }}</span>{{ formatZj(data3.zhanJi1 , data3.zhanJi1Text)[2] }}
              </div>
              <div v-if="data3.zhanJi2"
                   class="zhanji2"
                   ref="zhanJi23"
                   :style="'left: ' + zhanJi23Left + 'px; background:' + selectedTemplate.zhanJi2BgColor + '; color:' + selectedTemplate.zhanJi2TextColor">
                {{ data3.zhanJi2 }}
              </div>
            </div>
          </div>
          <div class="item">
            <img :src="data4.avatar"
                 alt=""
                 class="avatar" />
            <span class="name"
                  :style="'background:' + selectedTemplate.nameBgColor">{{ data4.name }}</span>
            <div class="zhanji"
                 :style="'background:' + selectedTemplate.zhanJiBgColor">
              {{ formatZj(data4.zhanJi , data4.zhanJiText)[0] }}<span class="percent-text">{{ formatZj(data4.zhanJi , data4.zhanJiText)[1] }}</span>{{ formatZj(data4.zhanJi , data4.zhanJiText)[2] }}
            </div>
            <div class="zhanji1-box"
                 style="left: 24px">
              <div v-if="data4.zhanJi1"
                   class="zhanji1"
                   ref="zhanJi14"
                   :style="'left: ' + zhanJi14Left + 'px'">
                {{ formatZj(data4.zhanJi1 , data4.zhanJi1Text)[0] }}<span class="percent-text">{{ formatZj(data4.zhanJi1 , data4.zhanJi1Text)[1] }}</span>{{ formatZj(data4.zhanJi1 , data4.zhanJi1Text)[2] }}
              </div>
              <div v-if="data4.zhanJi2"
                   class="zhanji2"
                   ref="zhanJi24"
                   :style="'left: ' + zhanJi24Left + 'px; background:' + selectedTemplate.zhanJi2BgColor + '; color:' + selectedTemplate.zhanJi2TextColor">
                {{ data4.zhanJi2 }}
              </div>
            </div>
          </div>
        </div>
        <canvas id="myCanvas"
                width="84"
                height="84"
                class="canvas"></canvas>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-left: 10px;">
        <van-field v-model="type"
                   label="标签"
                   maxlength="4"
                   placeholder="请输入"
                   label-align="top"
                   required="true"
                   style="width: 120px;" />
        <van-button type="primary"
                    @click="showTemplate = true"
                    style="margin-top: 10px;">选择模板</van-button>
      </div>

    </div>

    <div class="edit-container">
      <van-cell-group inset
                      style="flex: 1">
        <div class="avatar-title">头像</div>
        <DragUpload :url="data1.avatar"
                    @file-selected=" (file) => {  data1.avatar = file.previewUrl }" />
        <van-field v-model="data1.name"
                   label="名字"
                   placeholder="请输入"
                   label-align="top"
                   required="true" />

        <van-field v-model="data1.zhanJi"
                   label="底部战绩"
                   placeholder="请输入"
                   label-align="top"
                   required="true" />
        <van-field v-model="data1.zhanJiText"
                   label="底部战绩带颜色的"
                   placeholder="请输入"
                   label-align="top" />
        <van-field v-model="data1.zhanJi1"
                   label="顶部战绩"
                   placeholder="请输入"
                   label-align="top" />

        <van-field v-model="data1.zhanJi1Text"
                   label="顶部战绩带颜色的"
                   placeholder="请输入"
                   label-align="top" />
        <van-field v-model="data1.zhanJi2"
                   label="顶部描述"
                   placeholder="请输入"
                   label-align="top" />
      </van-cell-group>
      <van-cell-group inset
                      style="flex: 1">
        <div class="avatar-title">头像</div>
        <DragUpload :url="data2.avatar"
                    @file-selected=" (file) => {  data2.avatar = file.previewUrl }" />
        <van-field v-model="data2.name"
                   label="名字"
                   placeholder="请输入"
                   label-align="top"
                   required="true" />

        <van-field v-model="data2.zhanJi"
                   label="底部战绩"
                   placeholder="请输入"
                   label-align="top"
                   required="true" />
        <van-field v-model="data2.zhanJiText"
                   label="底部战绩带颜色的"
                   placeholder="请输入"
                   label-align="top" />
        <van-field v-model="data2.zhanJi1"
                   label="顶部战绩"
                   placeholder="请输入"
                   label-align="top" />

        <van-field v-model="data2.zhanJi1Text"
                   label="顶部战绩带颜色的"
                   placeholder="请输入"
                   label-align="top" />
        <van-field v-model="data2.zhanJi2"
                   label="顶部描述"
                   placeholder="请输入"
                   label-align="top" />
      </van-cell-group>
      <van-cell-group inset
                      style="flex: 1">
        <div class="avatar-title">头像</div>
        <DragUpload :url="data3.avatar"
                    @file-selected=" (file) => {  data3.avatar = file.previewUrl }" />
        <van-field v-model="data3.name"
                   label="名字"
                   placeholder="请输入"
                   label-align="top"
                   required="true" />

        <van-field v-model="data3.zhanJi"
                   label="底部战绩"
                   placeholder="请输入"
                   label-align="top"
                   required="true" />
        <van-field v-model="data3.zhanJiText"
                   label="底部战绩带颜色的"
                   placeholder="请输入"
                   label-align="top" />
        <van-field v-model="data3.zhanJi1"
                   label="顶部战绩"
                   placeholder="请输入"
                   label-align="top" />

        <van-field v-model="data3.zhanJi1Text"
                   label="顶部战绩带颜色的"
                   placeholder="请输入"
                   label-align="top" />
        <van-field v-model="data3.zhanJi2"
                   label="顶部描述"
                   placeholder="请输入"
                   label-align="top" />
      </van-cell-group>
      <van-cell-group inset
                      style="flex: 1">
        <div class="avatar-title">头像</div>
        <DragUpload :url="data4.avatar"
                    @file-selected=" (file) => {  data4.avatar = file.previewUrl }" />
        <van-field v-model="data4.name"
                   label="名字"
                   placeholder="请输入"
                   label-align="top"
                   required="true" />

        <van-field v-model="data4.zhanJi"
                   label="底部战绩"
                   placeholder="请输入"
                   label-align="top"
                   required="true" />
        <van-field v-model="data4.zhanJiText"
                   label="底部战绩带颜色的"
                   placeholder="请输入"
                   label-align="top" />
        <van-field v-model="data4.zhanJi1"
                   label="顶部战绩"
                   placeholder="请输入"
                   label-align="top" />

        <van-field v-model="data4.zhanJi1Text"
                   label="顶部战绩带颜色的"
                   placeholder="请输入"
                   label-align="top" />
        <van-field v-model="data4.zhanJi2"
                   label="顶部描述"
                   placeholder="请输入"
                   label-align="top" />
      </van-cell-group>
    </div>

    <van-button type="primary"
                style="margin-top: 20px;"
                @click="generateImage">保存图片</van-button>

    <van-popup v-model:show="showTemplate"
               :style="{ padding: '64px' }">
      <van-radio-group v-model="templateChecked"
                       @change="changeTemplate">
        <van-radio name="1"><img class="template-img"
               src="@/assets/images/template_1.png" /></van-radio>
        <van-radio name="2"><img class="template-img"
               src="@/assets/images/template_2.png" /></van-radio>
        <van-radio name="3"><img class="template-img"
               src="@/assets/images/template_3.png" /></van-radio>
      </van-radio-group>
    </van-popup>
  </div>
</template>

<script setup>
import { invoke } from "@tauri-apps/api/core"
import { save } from '@tauri-apps/plugin-dialog';
import { writeFile } from '@tauri-apps/plugin-fs';
import html2canvas from "html2canvas"
import DragUpload from '@/components/DragUpload.vue'
import { ref, watch, onMounted, nextTick } from 'vue';
import { itouService } from "@/utils/service.js";
import { showLoadingToast, showSuccessToast, showFailToast } from 'vant';
import { useRouter } from 'vue-router'
const router = useRouter()

const banner = ref(null)
const type = ref("今日看点")
const showTemplate = ref(false)


const zhanJi11 = ref(null)
const zhanJi12 = ref(null)
const zhanJi13 = ref(null)
const zhanJi14 = ref(null)
const zhanJi11Left = ref(0)
const zhanJi12Left = ref(0)
const zhanJi13Left = ref(0)
const zhanJi14Left = ref(0)

const zhanJi21 = ref(null)
const zhanJi22 = ref(null)
const zhanJi23 = ref(null)
const zhanJi24 = ref(null)
const zhanJi21Left = ref(0)
const zhanJi22Left = ref(0)
const zhanJi23Left = ref(0)
const zhanJi24Left = ref(0)

const templateChecked = ref('1');
const selectedTemplate = ref({
  name: '1',
  bgImg: new URL('@/assets/images/bnner_bg_1.png', import.meta.url),
  zhanJiBgColor: 'linear-gradient(90deg, #7B00AE, #FF005A);',
  nameBgColor: 'linear-gradient(90deg, rgba(62,20,105,0) 0%, #7A44B2 9%, #2F0A54 48%, rgba(122,68,178,0.87) 92%, rgba(60,21,101,0.07) 99%);',
  zhanJi2BgColor: '#5800FA',
  zhanJi2TextColor: '#FFFFFF',
})

const data1 = ref({
  avatar: '',
  name: '',
  zhanJi: '',
  zhanJiText: '',
  zhanJi1: '',
  zhanJi1Text: '',
  zhanJi2: '',
})
const data2 = ref({
  avatar: '',
  name: '',
  zhanJi: '',
  zhanJiText: '',
  zhanJi1: '',
  zhanJi1Text: '',
  zhanJi2: '',
})
const data3 = ref({
  avatar: '',
  name: '',
  zhanJi: '',
  zhanJiText: '',
  zhanJi1: '',
  zhanJi1Text: '',
  zhanJi2: '',
})
const data4 = ref({
  avatar: '',
  name: '',
  zhanJi: '',
  zhanJiText: '',
  zhanJi1: '',
  zhanJi1Text: '',
  zhanJi2: '',
})




watch(data1, (newVal) => {
  nextTick(() => {
    calcLeft(zhanJi11, zhanJi11Left, 53)
    calcLeft(zhanJi21, zhanJi21Left, 53)
  })
}, { deep: true })
watch(data2, (newVal) => {
  nextTick(() => {
    calcLeft(zhanJi12, zhanJi12Left, 53)
    calcLeft(zhanJi22, zhanJi22Left, 53)
  })
}, { deep: true })
watch(data3, (newVal) => {
  nextTick(() => {
    calcLeft(zhanJi13, zhanJi13Left, 53)
    calcLeft(zhanJi23, zhanJi23Left, 53)
  })
}, { deep: true })
watch(data4, (newVal) => {
  nextTick(() => {
    calcLeft(zhanJi14, zhanJi14Left, 78)
    calcLeft(zhanJi24, zhanJi24Left, 78)
  })
}, { deep: true })
watch(type, (newVal) => {
  nextTick(() => {
    drawType()
  })
}, { deep: true })

onMounted(() => {
  drawType()
  loadData()
})

function loadData () {
  const toast = showLoadingToast({
    message: '加载中...',
    duration: 0
  });
  itouService.get('/api/shop/projectShow?platform=koudai_mobile&_prt=https&ver=20180101000000&station_user_id=50241302&station_uuid=15197247089f7c2pakd6iek6&show_type=rcmd').then((res) => {
    toast.close()
    const list = res.list;
    if (list.length > 0) {
      data1.value = {
        avatar: list[0].user_info.avatar,
        name: list[0].user_info.nick_name,
        zhanJi: list[0].recommend_data.rcmd_stat.selected_desc_sc,
        zhanJiText: "",
        zhanJi1: list[0].recommend_data.rcmd_stat.selected_desc_fi,
        zhanJi1Text: "",
        zhanJi2: '',
      }
    }
    if (list.length > 1) {
      data2.value = {
        avatar: list[1].user_info.avatar,
        name: list[1].user_info.nick_name,
        zhanJi: list[1].recommend_data.rcmd_stat.selected_desc_sc,
        zhanJiText: "",
        zhanJi1: list[1].recommend_data.rcmd_stat.selected_desc_fi,
        zhanJi1Text: "",
        zhanJi2: '',
      }
    }
    if (list.length > 2) {
      data3.value = {
        avatar: list[2].user_info.avatar,
        name: list[2].user_info.nick_name,
        zhanJi: list[2].recommend_data.rcmd_stat.selected_desc_sc,
        zhanJiText: "",
        zhanJi1: list[2].recommend_data.rcmd_stat.selected_desc_fi,
        zhanJi1Text: "",
        zhanJi2: '',
      }
    }
    if (list.length > 3) {
      data4.value = {
        avatar: list[3].user_info.avatar,
        name: list[3].user_info.nick_name,
        zhanJi: list[3].recommend_data.rcmd_stat.selected_desc_sc,
        zhanJiText: "",
        zhanJi1: list[3].recommend_data.rcmd_stat.selected_desc_fi,
        zhanJi1Text: "",
        zhanJi2: '',
      }
    }
  })
}
function changeTemplate (name) {
  if (name == '1') {
    selectedTemplate.value = {
      name: '1',
      bgImg: new URL('@/assets/images/bnner_bg_1.png', import.meta.url),
      zhanJiBgColor: 'linear-gradient(90deg, #7B00AE, #FF005A);',
      nameBgColor: 'linear-gradient(90deg, rgba(62,20,105,0) 0%, #7A44B2 9%, #2F0A54 48%, rgba(122,68,178,0.87) 92%, rgba(60,21,101,0.07) 99%);',
      zhanJi2BgColor: '#5800FA',
      zhanJi2TextColor: '#FFFFFF',
    }
  } else if (name == '2') {
    selectedTemplate.value = {
      name: '2',
      bgImg: new URL('@/assets/images/bnner_bg_2.png', import.meta.url),
      zhanJiBgColor: 'linear-gradient(90deg, #FF0072, #FF2727);',
      nameBgColor: 'linear-gradient(90deg, rgba(97,43,28,0), rgba(162,107,91,0.91), #2A0300, #905848, rgba(97,43,28,0));',
      zhanJi2BgColor: '#FEEAAF',
      zhanJi2TextColor: '#B77F20',
    }
  } else if (name == '3') {
    selectedTemplate.value = {
      name: '3',
      bgImg: new URL('@/assets/images/bnner_bg_3.png', import.meta.url),
      zhanJiBgColor: 'linear-gradient(90deg, #FF0072, #FF2727);',
      nameBgColor: 'linear-gradient(90deg, rgba(56, 72, 105, 0), #6878a1, #141157, #8999ce, rgba(56, 72, 105, 0));',
      zhanJi2BgColor: '#3D8BFF',
      zhanJi2TextColor: '#FFFFFF',
    }
  }
  showTemplate.value = false
}
async function drawType () {
  const font = new FontFace('YouSheBiaoTiHei-Regular', `url(${new URL('../../assets/fonts/youshebiaotihei.ttf', import.meta.url).href})`, {
    style: 'normal',
    weight: '400',
  })
  font.load().then((loadedFont) => {
    // 加载成功，将字体添加到文档
    document.fonts.add(loadedFont)

    // 创建画布
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 设置背景色
    ctx.fillStyle = '#00000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#FFCB98');
    gradient.addColorStop(0.5, '#FFECDB');
    gradient.addColorStop(1, '#FFD5B6');

    // 设置字体样式
    ctx.font = '42px YouSheBiaoTiHei-Regular'
    ctx.fillStyle = gradient;

    // 定义要绘制的文本
    const text = type.value;
    const charsPerLine = 2; // 每行字符数

    // 获取文字高度
    const metrics = ctx.measureText("今日");
    const textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


    const lineHeight = textHeight * 1.2; // 行高通常是文字高度的1.2-1.5倍
    // 初始位置
    let x = 0;
    let y = lineHeight;

    // 每2个字换行绘制
    for (let i = 0; i < text.length; i += charsPerLine) {
      // 获取当前行的2个字符
      const currentLine = text.substr(i, charsPerLine);

      // 绘制当前行
      ctx.fillText(currentLine, x, y);

      // 移动到下一行
      y += lineHeight;
    }
  }).catch((err) => {
    console.error('字体加载失败：', err)
  })

}
async function generateImage () {

  if (data1.value.avatar == '' || data2.value.avatar == '' || data3.value.avatar == '' || data4.value.avatar == ''
    || data1.value.name == '' || data2.value.name == '' || data3.value.name == '' || data4.value.name == ''
    || data1.value.zhanJi == '' || data2.value.zhanJi == '' || data3.value.zhanJi == '' || data4.value.zhanJi == '') {

    showFailToast({
      message: '请完善信息'
    })
    return
  }

  // 1. 调用 Tauri 的 dialog.save()，弹出保存文件对话框，让用户自己选择路径
  const savePath = await save({
    filters: [{
      name: '图片',
      extensions: ['png', 'jpg', 'jpeg', 'webp'],
    }],
  })

  if (!savePath) {
    // 用户取消了保存
    console.log('用户取消了保存')
    return
  }


  const element = document.getElementById('banner-box') // 要转成图片的 DOM 元素
  // 直接保存为文件
  try {
    // 使用 html2canvas 将该 DOM 转为 canvas
    const canvas = await html2canvas(element, {
      backgroundColor: '#FFFFFF', // 可设置
      scale: 1, // 可提高清晰度（可选）
      useCORS: true, // 允许加载跨域图片（前提是图片服务器允许）
    })

    // // 将 canvas 转为图片 blob 或 dataURL
    const imageData = canvas.toDataURL('image/png') // 也可以是 'image/jpeg'

    const base64Data = imageData.split(',')[1]
    console.log(base64Data)
    const binaryString = atob(base64Data)
    const bytes = new Uint8Array(binaryString.length)
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i)
    }
    console.log(bytes)
    console.log(savePath)
    await writeFile(savePath, bytes)
    console.log("1111")
    // 2. 调用后端命令，传递图片 base64 数据 + 保存路径
    // await invoke('save_base64_image', {
    //   imageData,
    //   savePath
    // })

    showSuccessToast({
      message: '保存成功'
    })
    // // 创建一个 <a> 元素，触发下载
    // const link = document.createElement('a')
    // link.href = imageData
    // link.download = 'html-generated-image.png' // 下载的文件名
    // link.click() // 触发下载
  } catch (error) {
    console.log(error);
    
    showFailToast({
      message: error.message
    })
  }
}
function formatZj (s, s1) {
  const idx = s.indexOf(s1)
  if (idx === -1) {
    return [s, '', '']
  }
  const before = s.slice(0, idx)
  const match = s1
  const after = s.slice(idx + s1.length)
  return [before, match, after]
}

//计算Left
function calcLeft (zhanJi1Element, zhanJi1Left, defaultLeft) {
  if (zhanJi1Element.value) {
    const l = 160 - zhanJi1Element.value.offsetWidth
    zhanJi1Left.value = l < defaultLeft ? l : defaultLeft
    console.log(zhanJi1Element.value, zhanJi1Element.value.offsetWidth, l)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/fonts.css';
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  .top-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0 20px 0;
    width: 100%;
  }
  .banner-box {
    display: flex;
    align-items: center;
    position: relative;
    width: 750px;
    height: 130px;
    .banner-content {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    .canvas {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100px;
      height: 100px;
      margin-left: 14px;
    }
    .type {
      margin-left: 12px;
      font-family: 'YouSheBiaoTiHei Regular';
      font-weight: 400;
      color: #fff;
      line-height: 45px;
      font-size: 48px;
      background: linear-gradient(129deg, #ffcb98 0%, #ffecdb 37.2802734375%, #ffd5b6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      z-index: 1;
    }
    .item-container {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin-left: 100px;
      overflow: hidden;
    }

    .item {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
      .avatar {
        margin-top: 4px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #e5c072;
      }
      .name {
        margin-top: -12px;
        width: 132px;
        height: 24px;
        background: linear-gradient(90deg, rgba(56, 72, 105, 0), #6878a1, #141157, #8999ce, rgba(56, 72, 105, 0));
        font-family: PingFang-SC-Medium;
        text-align: center;
        color: #ddd5e8;
        font-size: 17px;
        line-height: 24px;
        white-space: nowrap;
      }

      .zhanji {
        margin-top: 5px;
        padding: 0 8px;
        min-width: 120px;
        height: 28px;
        background: linear-gradient(90deg, #ff0072, #ff2727);
        border-radius: 14px;
        text-align: center;
        font-family: 'PingFang-Heavy';
        font-weight: 600;
        font-size: 20px;
        color: #ffffff;
        line-height: 26px;
        white-space: nowrap;
      }
      .percent-text {
        color: #fcfd00;
        font-size: 22px;
        line-height: 26px;
      }
      .zhanji1-box {
        position: absolute;
        width: 160px;
        height: 60px;
        top: 4px;
        left: 52px;
      }

      .zhanji1 {
        position: absolute;
        top: 0;
        padding: 0 6px;
        height: 28px;
        background: #fc002f;
        border-radius: 14px 14px 14px 0px;
        border: 1px solid #eadbef;
        text-align: center;
        font-family: 'PingFang-Heavy';
        font-weight: 600;
        font-size: 20px;
        color: #ffffff;
        line-height: 28px;
        white-space: nowrap;
      }

      .zhanji2 {
        position: absolute;
        top: 34px;
        padding: 0 6px;
        height: 22px;
        background: #3d8bff;
        border-radius: 12px 10px 10px 0px;
        text-align: center;
        font-family: PingFang-SC-Medium;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        color: #ffffff;
        white-space: nowrap;
      }
    }
    .item:nth-child(n + 2) {
      margin-left: -30px;
    }
  }

  .edit-container {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    .avatar-title {
      padding: 10px 16px;
      font-size: 14px;
      color: rgb(201, 89, 89);
    }
    .avatar-title:before {
      margin-right: 2px;
      color: #ff2727;
      content: '*';
    }
  }

  .bottom-container {
    display: flex;
    align-items: center;
    padding: 16px;
    width: 100%;
  }

  .template-img {
    width: 375px;
  }
}
::v-deep(.van-field__label--top) {
  color: rgb(201, 89, 89);
}
</style>
