import './App.css'
import {useState} from 'react'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Welcome from './Components/Welcome'
import Students from './Components/Students'
import Courses from './Components/Courses'
import Staff from './components/Staff'

function App() {

  const [activeComponent, setActiveComponent ] = useState('welcome')

  const renderComponent = () =>{
    switch(activeComponent){
      case 'staff':
        return <Staff />;
      case 'students':
        return <Students />;
      case 'courses':
        return <Courses />;
      case 'welcome':
        return <Welcome />;
      default:
        return <Welcome />;

    }

  }


  return (
    <>
      <div className= "container">
        <Banner></Banner>
        <Navbar setActiveComponent= {setActiveComponent}></Navbar>       
        <main>
          {renderComponent()}
        </main>
        <Footer></Footer>
        </div>
    </>      
  )
}

export default App

