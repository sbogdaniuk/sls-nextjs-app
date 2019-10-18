import { NextPage } from 'next'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'

import gql from 'graphql-tag'
import { Header } from '../components'
import React from 'react'

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
      <Header />
      <h1>NextJS, AWS, GraphQL 👻</h1>
      <div>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>2019-10-16T16:51:32+03:00</p>
        <p>
          <img
            width={300}
            src="/images/cat.webp"
            alt="Cat"
          />
        </p>
      </div>
      <h3>Users 👥</h3>
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

export default Home
