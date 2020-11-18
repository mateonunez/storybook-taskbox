import { action } from '@storybook/addon-actions'
import Task from './Task'

export default {
  title: 'Task',

  excludeStories: /.*Data$/
}

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

export const taskData = {
  id: 1,
  title: 'Test Task',
  state: 'TASK_INBOX',
  updated_at: new Date(2020, 4, 19, 3, 33)
}

const taskTemplate = `<task :task="task" @archive-task="onArchiveTask" @pin-task="onPinTask" />`

// default task state
export const Default = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => taskData
    }
  },
  methods: actionsData
})

// pinned task state
export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: 'TASK_PINNED'
      })
    }
  },
  methods: actionsData
})

// archived task state
export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: 'TASK_ARCHIVED'
      })
    }
  },
  methods: actionsData
})
