import { Todo } from "type"
import { v1 as uuid } from "uuid"

const TODO_ACTIONS = {
  CREATE_TODO: "CREATE_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  SELECT_TODO: "SELECT_TODO",
}

interface CreateActionType {
  type: typeof TODO_ACTIONS.CREATE_TODO
  payload: Todo
}

export function createTodoActionCreator(data: { desc: string }): CreateActionType {
  return {
    type: TODO_ACTIONS.CREATE_TODO,
    payload: {
      desc: data.desc,
      id: uuid(),
      isComplete: false,
    },
  }
}

interface EditActionType {
  type: typeof TODO_ACTIONS.EDIT_TODO
  payload: {
    desc: string
    id: string
  }
}

export function editTodoActionCreator(data: { desc: string; id: string }): EditActionType {
  return {
    type: TODO_ACTIONS.EDIT_TODO,
    payload: {
      desc: data.desc,
      id: data.id,
    },
  }
}

interface DeleteActionType {
  type: typeof TODO_ACTIONS.DELETE_TODO
  payload: { id: string }
}

export function deleteTodoActionCreator(data: { id: string }): DeleteActionType {
  return {
    type: TODO_ACTIONS.DELETE_TODO,
    payload: {
      id: data.id,
    },
  }
}

interface ToggleActionType {
  type: typeof TODO_ACTIONS.TOGGLE_TODO
  payload: {
    id: string
    isComplete: boolean
  }
}

export function toggleTodoActionCreator(data: { id: string; isComplete: boolean }): ToggleActionType {
  return {
    type: TODO_ACTIONS.TOGGLE_TODO,
    payload: {
      id: data.id,
      isComplete: data.isComplete,
    },
  }
}

interface SelectActionType {
  type: typeof TODO_ACTIONS.SELECT_TODO
  payload: { id: string }
}

export function selectTodoActionCreator(data: { id: string }): SelectActionType {
  return {
    type: TODO_ACTIONS.SELECT_TODO,
    payload: {
      id: data.id,
    },
  }
}
