import SwiperComponent from "./components/Swiper/SwiperComponent";
import DiscountBanner from "./components/discountBanner/DiscountBanner";
import Hero from "./components/hero/Hero";
import NavBar from "./components/nav/Navbar";
import NewArrivals from "./components/newArrivals/NewArrivals";
import ShopByCollection from "./components/shopByCollection/ShopByCollection";

function App() {
  return (
    <>
      <div className=" md:m-auto md:w-10/12">
        <NavBar />
      </div>
      <Hero />
      <div className=" md:m-auto md:w-10/12">
        <SwiperComponent />
        <NewArrivals />
        <ShopByCollection />
        <DiscountBanner />
      </div>
    </>
  );
}

export default App;
