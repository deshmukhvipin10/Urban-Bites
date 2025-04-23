import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Wws from './components/Wws'
import Om from './components/Om'
import Wts from './components/Wts'
import Footer from './components/Footer'

const App = () => {
  return (
    
      <div className='min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50'>
        <Navbar />
        <br />

        <main className='flex-1 w-full'>
          <div className='w-full'>
            <Banner />
          </div>
          <div className='w-full'>
            <Wws />
            <Om />
            <Wts />
          </div>
        </main>

        <div className='mt-auto'>
        <Footer />
        </div>
      </div>
    
  )
}

export default App