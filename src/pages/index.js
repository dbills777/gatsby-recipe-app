import React from "react"
import Layout from "../components/Layout"
import {ExampleButton} from '../example/button'

export default function Home() {
  return (
    <Layout>
      <h1>Hello from index.js</h1>
      <ExampleButton>ClickMe</ExampleButton>
    </Layout>
  )
}
