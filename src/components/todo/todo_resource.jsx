import webserver from '../../main/webserver'

export const getAll = (user) => (
  webserver.get(`/users/${user}/tasks`).then(response => response.data.data)
)

export const find = (user, task) => (
  webserver.get(`/users/${user}/tasks/${task}`).then(response => response.data.data)
)
