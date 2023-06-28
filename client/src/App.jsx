import SwiperComponent from "./components/Swiper/SwiperComponent";
import Hero from "./components/hero/Hero";
import NavBar from "./components/nav/Navbar";

function App() {
  return (
    <>
      <div className=" md:m-auto md:w-10/12">
        <NavBar />
      </div>
      <Hero />
      <div className=" md:m-auto md:w-10/12">
        <SwiperComponent />
      </div>
    </>
  );
}

export default App;
