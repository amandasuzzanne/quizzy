import './Home.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
// import Navbar from './components/navbar';
import Main from './components/main';

function Home(){
    return (
      <div className="home-container">
        <Main/>
        <About/>
        <Contact/>
        <Footer/>
        

        
      </div>
    );
}

export default Home;