import { SwiperSection } from "./layouts/SwiperSection";
import { About } from "./layouts/About";
import Menu from "./layouts/Menu/Menu";
import { PhotoGallery } from "./layouts/PhotoGallery";
import { VideoSection } from "./layouts/VideoSection";
import { galleryItems } from "./constants/galleryItems";
import { Contacts } from "./layouts/Contacts";
import { Reservation } from "./layouts/Reservation";
import { AppFooter } from "./components/AppFooter";
import About1 from "images/about1.jpg";
import About2 from "images/about2.jpg";
import { menuItems } from "./constants/menuItems";

import "@/styles/global.scss";

function App() {
  return (
    <>
      <SwiperSection />
      <About picture={About1} />
      <About picture={About2} reverse={true} />
      <Menu items={menuItems} />
      <PhotoGallery images={galleryItems} />
      <VideoSection />
      <Contacts />
      <Reservation />
      <AppFooter />
    </>
  );
}

export default App;
