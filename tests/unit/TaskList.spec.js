import Vue from 'vue'
import PureTaskList from '../../src/components/PureTaskList'
import { withPinnedTaskData } from '../../src/components/PureTaskList.stories'

it('renders pinned tasks at the start of the list', () => {
  const Constructor = Vue.extend(PureTaskList)
  const vm = new Constructor({
    propsData: {
      tasks: withPinnedTaskData
    }
  }).$mount()

  const firstTaskPinned = vm.$el.querySelector(
    '.list-item:nth-child(1).TASK_PINNED'
  )

  expect(firstTaskPinned).not.toBe(null)
})
