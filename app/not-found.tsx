import Link from 'next/link'
 
export default async function NotFound() {
  return (
    <div className='bg-black-100 h-screen flex flex-col justify-center items-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}