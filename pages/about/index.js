
import Router from "next/router"
import MainLayout from "../../components/MainLayout"


const About = () => {

  const linkClickHandler = () => {
    Router.push('/')
  }

  return(
    <MainLayout title={'About Page'}>
      <h1>About page</h1>

      <button onClick={linkClickHandler}>go back to Home</button>
    </MainLayout>


  )
}

export default About