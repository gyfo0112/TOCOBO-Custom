import { useState, useEffect } from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Follow from "./sections/Follow";
import Collection from "./sections/Collection";
import Collaboration from "./sections/Collaboration";
import Instargram from "./sections/Instagram";
import TopBanner from "./components/TopBanner";
import FixedTopBtn from "./components/FixedTopBtn";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [topBanner, setTopBanner] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsScrolled(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const upTopBanner = () => {
    setTopBanner("up");
  };

  return (
    <div
      className={`app-container ${topBanner} ${isScrolled ? "scrolled" : ""} `}
    >
      <FixedTopBtn />
      <TopBanner onClick={upTopBanner} />
      <Header />
      <main>
        <section id="hero" className="section">
          <Hero />
        </section>
        <section id="follow" className="section">
          <Follow />
        </section>
        <section id="collection" className="section">
          <Collection />
        </section>
        
        <Collaboration />
        
        <section id="instargram" className="section">
          <Instargram />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;