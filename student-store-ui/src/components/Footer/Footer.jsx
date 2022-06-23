import * as React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="f-col">
          <p className="f-title">Categories</p>
          <div className="f-body">
            <p className="f-p">
              All Categories
              <br />
              Clothing
              <br />
              Food
              <br />
              Accessories
              <br />
              Tech
            </p>
          </div>
        </div>
        <div className="f-col">
          <p className="f-title">Company</p>
          <div className="f-body">
            <p className="f-p">
              About Us
              <br />
              Find a Store
              <br />
              Terms
              <br />
              Sitemap
              <br />
              Careers
            </p>
          </div>
        </div>
        <div className="f-col">
          <p className="f-title">Support</p>
          <div className="f-body">
            <p className="f-p">
              Contact Us
              <br />
              Money Refund
              <br />
              Order Status
              <br />
              Shipping Info
              <br />
              Open Dispute
            </p>
          </div>
        </div>
        <div className="f-col">
          <p className="f-title">Account</p>
          <div className="f-body">
            <p className="f-p">
              Login
              <br />
              Register
              <br />
              Account Setting
              <br />
              My Orders
              <br />{" "}
            </p>
          </div>
        </div>
        <div className="f-col">
          <p className="f-title">Socials</p>
          <div className="f-body">
            <p className="f-p">
              Facebook
              <br />
              Twitter
              <br />
              LinkedIn
              <br />
              Instagram
              <br />
              YouTube
            </p>
          </div>
        </div>
        <div className="f-col">
          <p className="f-title">Our App</p>
          <div className="f-images">
            <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" />
            <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}