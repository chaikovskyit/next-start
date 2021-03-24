import Router from 'next/router'
import MainLayout from '../../components/MainLayout'

const Posts = () => {

  const linkClickHandler = () => {
    Router.push('/')
  }

  return(
    <MainLayout title={'Posts Page'}>
      <h1>Posts page</h1>
      <button onClick={linkClickHandler}>go back to home</button>
    </MainLayout>
  )
}

export default Posts