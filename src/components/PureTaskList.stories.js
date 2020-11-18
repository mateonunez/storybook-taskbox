import PureTaskList from './PureTaskList'
import { taskData, actionsData } from './Task.stories'

const paddedList = () => ({
  template: `<div style="padding: 3rem;"><story /></div>`
})

export default {
  title: 'TaskList',
  excludeStories: /.*Data$/,
  decorators: [paddedList]
}

export const defaultTaskData = [
  { ...taskData, id: 1, title: 'Task 1' },
  { ...taskData, id: 2, title: 'Task 2' },
  { ...taskData, id: 3, title: 'Task 3' },
  { ...taskData, id: 4, title: 'Task 4' },
  { ...taskData, id: 5, title: 'Task 5' },
  { ...taskData, id: 6, title: 'Task 6' },
  { ...taskData, id: 7, title: 'Task 7' },
  { ...taskData, id: 8, title: 'Task 8' }
]

export const withPinnedTaskData = [
  ...defaultTaskData.slice(0, 7),
  { id: 8, title: 'Task 8 (PINNED)', state: 'TASK_PINNED' }
]

export const Default = () => ({
  components: { PureTaskList },
  template: `<pure-task-list :tasks="tasks" @archive-task="onArchiveTask" @pin-task="onPinTask"/>`,
  props: {
    tasks: {
      default: () => defaultTaskData
    }
  },
  methods: actionsData
})

export const WithPinnedTasks = () => ({
  components: { PureTaskList },
  template: `<pure-task-list :tasks="tasks" @archive-task="onArchiveTask" @pin-task="onPinTask"/>`,
  props: {
    tasks: {
      default: () => withPinnedTaskData
    }
  },
  methods: actionsData
})

export const Loading = () => ({
  components: { PureTaskList },
  template: `<pure-task-list loading @archive-task="onArchiveTask" @pin-task="onPinTask"/>`,
  methods: actionsData
})

export const Empty = () => ({
  components: { PureTaskList },
  template: `<pure-task-list @archive-task="onArchiveTask" @pin-task="onPinTask"/>`,
  methods: actionsData
})
