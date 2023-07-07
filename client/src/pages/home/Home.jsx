import SwiperComponent from "../../components/Swiper/SwiperComponent";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import ShopByCollection from "../../components/shopByCollection/ShopByCollection";
import DiscountBanner from "../../components/discountBanner/DiscountBanner";
import Opinions from "../../components/opinions/Opinions";
import Hero from "../../components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className=" md:m-auto md:w-10/12">
        <SwiperComponent />
        <NewArrivals />
        <ShopByCollection />
        <DiscountBanner />
        <Opinions />
      </div>
    </div>
  );
}
