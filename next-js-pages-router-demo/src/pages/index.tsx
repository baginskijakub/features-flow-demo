const BUTTON_LINK_STYLES = 'px-4 py-3 w-[500px] bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-500 transition'

export default async function Home() {
  return (
      <main className='flex h-screen w-screen flex-col justify-center items-center gap-4'>
        <a href='/server-side' className={BUTTON_LINK_STYLES}>Server-side</a>
        <a href='/client-side' className={BUTTON_LINK_STYLES}>Client-side</a>
        <a href='/server-side-to-client-side' className={BUTTON_LINK_STYLES}>Fetch server-side, use client-side</a>
      </main>
  )
}
