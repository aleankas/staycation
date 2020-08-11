import React from "react";
import IconText from "parts/IconText";
import Button from "elements/Button";

export default function Footer() {
  return (
    <footer style={{ marginTop: 150, marginBottom: 50 }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline">
              Create your amazing vacatiion instantly and memorable.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy-police">
                  Privacy Police
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms-condition">
                  Terms And Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Gettin Touch</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staytication.com"
                >
                  support@staytication.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622155834075">
                  021 5583 4075
                </Button>
              </li>
              <li className="list-group-item">
                <span>Creativity Hub, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
				<div className="row" style={{marginTop: 50}}>
					<div className="col text-center copyrights">
						Copyright 2020 All right reserved | Staycation
					</div>
				</div>
      </div>
    </footer>
  );
}
