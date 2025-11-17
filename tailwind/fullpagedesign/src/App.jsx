import { useState } from 'react'

function App() {
const [sidebar , SetSidebar] = useState(true); 
  return (
    <>
      <div className='grid grid-cols-12 h-screen'>
        <div className='col-span-3 bg-red-200'>
          <Sidebar sidebar={sidebar} SetSidebar={SetSidebar}></Sidebar>
        </div>
        <div className='col-span-2 bg-green-200'>why</div>
        <div className='col-span-4 bg-blue-200'>chal</div>
        <div className='col-span-3 bg-yellow-300'>teri</div>
      </div>
    </>
  )
}
function Sidebar({sidebar , SetSidebar})
{
  return<>
    {sidebar ? 
    <div>
      <button className='w-full pl-24'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</button>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>  
    </div>:
    <div>
      <button></button>
    </div>}
  </>
}
export default App
