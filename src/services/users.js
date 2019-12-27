import client from 'providers/fetchClient'

export const fetchAll = () => client.get('/users')
export const fetchUser = id => client.get(`/users/${id}`)
export const edit = (id, user) => client.put(`/users/${id}`, user)
export const removeById = id => client.delete(`/users/${id}`)
