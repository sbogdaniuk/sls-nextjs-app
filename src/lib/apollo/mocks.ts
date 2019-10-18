import * as faker from 'faker'

faker.seed(4321)
const generateUser = (d: any, i: number) => {
  const name = faker.name
  return {
    id: String(i + 1),
    name: name.firstName(),
  }
}

const users = new Array(20)
  .fill(0)
  .map(generateUser)

export const mocks = {
  Query: () => ({
    users: () => users,
    user: (root: any, { id } = {} as { id: string }) => {
      const user = users.find(d => d.id === id)
      if (user) return user
      throw new Error('Not Found')
    }
  }),
}
