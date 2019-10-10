import { NextPage } from 'next'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'

import { withApollo } from '../lib'
import gql from 'graphql-tag'

interface Props {
  userAgent: string
}

interface User {
  id: string
  name: string
}
interface UsersProps {
  users: [User | null] | null
}

const USERS = gql`
  query Users {
    users {
      id
      name
    }
  }
`

const Home: NextPage<Props> = ({ userAgent }) => {
  const payload = useQuery<UsersProps>(USERS)
  const { data } = payload
  const { users = [] } = data || {}
  return (
    <div>
      <h1>Users 👻</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <ul>
        {(users as User[]).map(d => (
          <li key={d.id}>
            <Link href="/user/[id]" as={`/user/${d.id}`}>
              <a>
                {d.name} : {d.id}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <footer>User Agent: {userAgent}</footer>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default withApollo(Home)
