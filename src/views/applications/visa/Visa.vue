<template>
  <div class="container-xl">
    <a-steps v-model:current="current" @change="changeSteps" type="navigation">
      <a-step title="Step 1" description="This is a description." />
      <a-step
        title="Step 2"
        :disabled="!first_step"
        description="This is a description."
      />
      <a-step
        title="Step 3"
        :disabled="!second_step"
        description="This is a description."
      />
      {{ second_step }}
    </a-steps>
    <div class="steps-content">
      <div v-if="steps[current].content == 'First-content'">
        <step1 v-model:current="current" :steps="steps" />
      </div>
      <div v-if="steps[current].content == 'Second-content'">
        <step2 v-model:current="current" />
      </div>
      <div v-if="steps[current].content == 'Last-content'">
        <step3 />
      </div>
    </div>
  </div>
</template>
<script setup>
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'
import { ref, watchEffect, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

// const first_step = ref()
// const second_step = ref()
const store = useStore()
const route = useRoute()
const router = useRouter()
// import { message } from 'ant-design-vue'
const current = ref(0)

watchEffect(() => (current.value = route.query.step - 1))

function changeSteps(e) {
  router.push({ query: { step: e + 1 } })
}

const first_step = computed(() => store.getters.visa_first_step)
const second_step = computed(() => store.getters.visa_second_step)

const steps = [
  {
    title: 'First',
    content: 'First-content',
    icon: 'UserOutlined',
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
  padding: 20px;
  /* padding-top: 80px; */
}

.steps-action {
  margin-top: 24px;
}

[data-theme='dark'] .steps-content {
  background-color: #2f2f2f;
  border: 1px dashed #404040;
}
</style>
