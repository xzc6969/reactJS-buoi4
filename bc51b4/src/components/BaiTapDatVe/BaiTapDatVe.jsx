import React, { Component } from "react";
import "./style.css";

import ChiTiet from "./ChiTiet";
import DanhSachGhe from "./DanhSachGhe";

export default class BaiTapDatVe extends Component {
  render() {
    return (
      <body>
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            <DanhSachGhe />

            <ChiTiet />
          </div>
        </div>
        <div className="copy-wthree">
          <p>
            © 2018 Movie Seat Selection . All Rights Reserved | Design by
            <a href="http://w3layouts.com/" target="_blank">
              W3layouts
            </a>
          </p>
        </div>
      </body>
    );
  }
}
