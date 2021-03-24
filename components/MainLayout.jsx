import Head from 'next/head'
import Link from 'next/link'

const MainLayout = ({ children, title = 'Next app' }) => {
  return(
    <>
      <Head>
        <title>{title} | Next</title>
        <meta name='keywords' content='next,javascript,nextjs,react'/>
        <meta name='description' content='this is pet project nextjs'/>
        <meta charSet='utf-8'/>
      </Head>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/posts'><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: blue;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 60px;
        }
        nav a {
          text-decoration: none;
          color: white;
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}
      </style>
    </>
  )
}

export default MainLayout