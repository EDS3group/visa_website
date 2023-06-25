<template>
  <div class="container-xl">
    <a-steps v-model:current="current" @change="test" type="navigation">
      <a-step title="Step 1" description="This is a description." />
      <a-step title="Step 2" description="This is a description." />
      <a-step title="Step 3" description="This is a description." />
    </a-steps>
    <div class="steps-content">
      <div v-if="steps[current].content == 'First-content'">
        {{ steps[current].content }}
      </div>
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Next
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px;" @click="prev">
        Previous
      </a-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'
const current = ref(0)

const next = () => {
  current.value++
}
const prev = () => {
  current.value--
}
// const test = (test) => console.log(test)
const steps = [
  {
    title: 'First',
    content: 'First-content',
    icon: '<UserOutlined />',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
]
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}

[data-theme='dark'] .steps-content {
  background-color: #2f2f2f;
  border: 1px dashed #404040;
}
</style>
