import React from "react";

function Footer(props) {
  return (
    <div className="footer bg-primary">
      <div className="container">
        <div className="row ">
          <div className="col-7">
            <h5 className="text-white mt-4">Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg"></i>
              <a href="mailto:confusion@food.net" style={{ color: "white" }}>
                confusion@food.net
              </a>
            </address>
          </div>
          <div className="col-5 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                style={{ backgroundColor: "red" }}
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus" style={{ color: "white" }}></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                style={{ backgroundColor: "#39569c" }}
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook" style={{ color: "white" }}></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                style={{ backgroundColor: "#0077B5" }}
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin" style={{ color: "white" }}></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                style={{ backgroundColor: "#1DA1F2" }}
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter" style={{ color: "white" }}></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                style={{ backgroundColor: "red" }}
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube" style={{ color: "white" }}></i>
              </a>
              <a
                className="btn btn-social-icon"
                style={{ backgroundColor: "#4285f4" }}
                href="mailto:"
              >
                <i className="fa fa-envelope-o" style={{ color: "white" }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto text-white">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
