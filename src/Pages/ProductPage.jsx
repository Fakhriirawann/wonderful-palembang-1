import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Section2 />
      <Footer />
    </div>
  );
}

export default ProductPage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage: "url(src/assets/What_is_a_latte.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Coffee Products</h1>
            <p className="mb-5 text-2xl font-semibold">
              Premium Indonesian Coffee Beans for Global Markets
            </p>
            <button className="btn bg-amber-800 border-amber-800 text-white shadow-none">
              Request Sample <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard
          image="src\assets\productcard1.jpg"
          title="Sumatra Mandheling"
          from="Aceh, North Sumatra"
          processing="Wet-Hulledd"
          Altitude="1,200-1,500 masl"
          flavor="Earthy, Herbal, Spicy"
          available="Year-round"
        />

        <ProductCard
          image="src\assets\productcard2.jpg"
          title="Java Preanger"
          from="West Java"
          processing="Washed"
          Altitude="1,300-1,600 masl"
          flavor="Citrus, Floral, Clean"
          available="June - December"
        />

        <ProductCard
          image="src\assets\productcard3.jpg"
          title="Bali Kintamani"
          from="Bali"
          processing="Wet Process"
          Altitude="1,200-1,600 masl"
          flavor="Lemon, Caramel, Nutty"
          available="May - October"
        />
      </div>

      <div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard
          image="src\assets\productcard4.jpg"
          title="Flores Bajawa"
          from="East Nusa Tenggara"
          processing="Semi-Washed"
          Altitude="1,300-1,800 masl"
          flavor="Chocolate, Spice, Floral"
          available="June - November"
        />

        <ProductCard
          image="src\assets\productcard5.jpg"
          title="Toraja Kalosi"
          from="South Sulawesi"
          processing="Wet-Hulled"
          Altitude="1,400-1,800 masl"
          flavor="Dark Chocolate, Spicy, Earthy"
          available="Year-round"
        />

        <ProductCard
          image="src\assets\java-preanger.jpg"
          title="Java Robusta"
          from="East Java"
          processing="Dry Process"
          Altitude="600-900 masl"
          flavor="Woody, Nutty, Strong"
          available="Year-round"
        />
      </div>
    </>
  );
}

function ProductCard(props) {
  return (
    <>
      {/* Card */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={props.image}
            alt="Shoes"
            img
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{props.title}</h2>
          <p className=" ">{props.from}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Processing</span>
            <span className=" text-md">{props.processing}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Altitude</span>
            <span className=" text-md">{props.Altitude}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Flavor Notes</span>
            <span className=" text-md">{props.flavor}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Available</span>
            <span className=" text-md">{props.available}</span>
          </div>

          <div className="card-actions justify-center">
            <button className="btn bg-amber-800 text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
