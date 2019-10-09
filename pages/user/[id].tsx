import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { withApollo } from '../../lib'

interface User {
  id: string
  name: string
}

interface UserProps {
  user: User | null
}

const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`

const User: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const payload = useQuery<UserProps>(USER, {
    variables: { id },
  })
  const { data, error: { graphQLErrors = [] } = {} } = payload
  const [error] = graphQLErrors
  const { user } = data || {}
  return (
    <div>
      <h1>User: {id}</h1>
      {user && <div>{user.name}</div>}
      {error && <div>{error.message}</div>}
    </div>
  )
}

export default withApollo(User)
