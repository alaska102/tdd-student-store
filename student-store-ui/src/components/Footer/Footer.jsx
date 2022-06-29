import * as React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <p className="footer-title">Categories</p>
          <div className="f-body">
            <p className="footer-text">
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
        <div className="footer-col">
          <p className="footer-title">Company</p>
          <div className="f-body">
            <p className="footer-text">
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
        <div className="footer-col">
          <p className="footer-title">Support</p>
          <div className="f-body">
            <p className="footer-text">
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
        <div className="footer-col">
          <p className="footer-title">Account</p>
          <div className="f-body">
            <p className="footer-text">
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
        <div className="footer-col">
          <p className="footer-title">Socials</p>
          <div className="f-body">
            <p className="footer-text">
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
        <div className="footer-col">
          <p className="footer-title">Our App</p>
          <div className="footer-img">
            <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt="Apple App Store Logo"/>
            <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" alt="Google Play Store Logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}