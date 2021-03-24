import Link from 'next/link'
import MainLayout from '../components/MainLayout'



const Index = () => {
  return (
    <MainLayout title={'Home Page'}>
      <h1>Hello Next.JS</h1>
      <p><Link href={'/about'}><a><strong>About</strong></a></Link></p>
      <p><Link href={'/posts'}><a><strong>Posts</strong> </a></Link></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora minus quibusdam, provident nisi, facere quae maiores, vero aliquid excepturi eveniet. Porro voluptas totam molestias. Sint, dolorem a! Delectus, distinctio.</p>
    </MainLayout>
  )
}

export default Index
