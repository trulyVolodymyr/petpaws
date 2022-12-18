<template>
  <div class="the-select">
    <el-select
      v-model="selectModel"
      :multiple="multiple"
      collapse-tags
      :style="styleWidth"
      :placeholder="placeholder"
      clearable
    >
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import { useBreedsStore } from '@/store'
const { allBreedsSelect, limit } = useBreedsStore()

const selectModel = ref<string[]>([])

onUpdated(() => {
  if (props.search) {
    allBreedsSelect.splice(0, allBreedsSelect.length)
    selectModel.value.forEach(el => {
      if (allBreedsSelect.includes(el)) {
        return false
      } else {
        return allBreedsSelect.push(el)
      }
    })
  }
  if (props.limit) {
    limit.splice(0, limit.length)
    limit.push(...selectModel.value)
  }
})

const styleWidth = computed(() => {
  return `width: ${props.width}`
})

const props = defineProps<{
  options: string[]
  search?: boolean
  limit?: boolean
  width?: string
  placeholder?: string
  multiple?: boolean
}>()
</script>

<style lang="scss">
.the-select > .el-select .el-input{
  @apply h-[40px]
}

.el-select:hover{
  box-shadow: 0 0 0 2px #FBE0DC;
  border-radius: 10px;
}

.el-select .el-input.is-focus .el-input__wrapper{
  box-shadow: 0 0 0 2px rgba(251, 224, 220, 1)!important;
}

.el-select__popper{
  border-radius: 10px;
}

.el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
 background-color: transparent;
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.selected{
 color: #FF868E;
 background-color: transparent;
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.selected.hover{
  background-color: transparent;
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after{
  background-color: #FF868E;
}

.the-select  .el-select .el-input{
  outline: none;
}

.the-select .el-input__wrapper{

  box-shadow: 0 0 0 2px #ffffff;
  background-color: #F8F8F7;
  &:hover{
   box-shadow: 0 0 0 2px #FBE0DC;
  }
  &:focus-visible{
   outline: none;
  }

 @apply rounded-[10px]
}

.el-input__wrapper.is-focus{
box-shadow: 0 0 0 2px #FF868E;
}

.el-select__tags .el-tag:last-child{
  color: #8C8C8C;
  font-size: 14px;
  max-width: 120px;
  background-color: #Fff;
}

.el-select__tags .el-tag--info{
  color: #8C8C8C;

  font-size: 14px;
  background-color: #fff;
}

.el-select-dropdown__list{
  width: 226px;
}

.el-select {
  --el-select-border-color-hover: inherit;
  --el-select-disabled-border:  inherit;
  --el-select-font-size: inherit;
  --el-select-close-hover-color:  inherit;
  --el-select-input-color:  inherit;
  --el-select-multiple-input-color: inherit;
  --el-select-input-focus-border-color:  inherit;
  --el-select-input-font-size:  inherit;
}

.el-select-dropdown__item.selected{
  color: #FF868E;
}
</style>
