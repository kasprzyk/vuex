export const namespaced = true

export const state = {
  notifications: []
}
let nextId = 1
export const mutuations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++
    })
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id != notificationToRemove.id
    )
  }
}
