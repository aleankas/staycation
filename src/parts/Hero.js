import React from "react";
import ImgHero from "assets/images/img-hero.jpg";
import ImgHeroFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/icons/ic_cities.svg";
import IconTraveller from "assets/icons/ic_traveller.svg";
import IconTreasure from "assets/icons/ic_treasure.svg";
import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 490 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p class="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with your family.
            Time to make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          ></Button>

          <div className="row mt-5">
            <div className="col-auto">
              <img
                height="36"
                width="36"
                src={IconTraveller}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 classNAme="mt-3">
                {props.data.travelers}{" "}
                <span class="text-gray-500 font-weight-light">Travelers</span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                height="36"
                width="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 classNAme="mt-3">
                {props.data.cities}{" "}
                <span class="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                height="36"
                width="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 classNAme="mt-3">
                {props.data.treasures}{" "}
                <span class="text-gray-500 font-weight-light">Treasure</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
