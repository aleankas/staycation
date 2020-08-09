import React from "react";
import ImgHero from "assets/images/img-hero.png";
import ImgHeroFrame from "assets/images/img-hero-frame.png";
import IconCities from "assets/icons/ic_cities.svg";
import IconTraveller from "assets/icons/ic_traveller.svg";
import IconTreasure from "assets/icons/ic_treasure.svg";
import Button from "elements/Button";
import FormatNumber from "utils/formatNumber";

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
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-5">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            class="mb-3 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with your family.
            Time to make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                height="36"
                width="36"
                src={IconTraveller}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {FormatNumber(props.data.travelers)}{" "}
                <span class="text-gray-500 font-weight-light">Travelers</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                height="36"
                width="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {FormatNumber(props.data.cities)}{" "}
                <span class="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                height="36"
                width="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3">
                {FormatNumber(props.data.treasures)}{" "}
                <span class="text-gray-500 font-weight-light">Treasure</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 pl-2">
          <div style={{ width: 350, height: 310 }}>
            <img
              src={ImgHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-20px 0 0 -20px", zIndex: 1 }}
            />
            <img
              src={ImgHeroFrame}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
