import Link from 'next/link'
import MainLayout from '../components/MainLayout'

const ErrorPage = () => {
  return (
    <MainLayout>
      <div className='error'>
        <h1>Error 404</h1>
        <p>Please back to <Link href='/'><a>safety</a></Link></p>
      </div>
    </MainLayout>
  )
}

export default ErrorPage