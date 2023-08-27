import React, { Component } from "react";
import Ghe from "./Ghe";
import { connect } from "react-redux";
class DanhSachGhe extends Component {
  renderContent = () => {
    return this.props.danhSachGhe.map((element) => {
      if (element.hang === "") return;
      return (
        <tr key={element.hang}>
          <td>{element.hang}</td>
          {this.renderHang(element.danhSachGhe)}
        </tr>
      );
    });
  };
  renderHang = (data) => {
    return data.map((element) => {
      return <Ghe element={element} key={data.soGhe} />;
    });
  };
  render() {
    return (
      <div>
        <ul className="seat_w3ls">
          <li className="smallBox greenBox">Selected Seat</li>
          <li className="smallBox redBox">Reserved Seat</li>
          <li className="smallBox emptyBox">Empty Seat</li>
        </ul>
        <div className="seatStructure txt-center" style={{ overflowX: "auto" }}>
          <p id="notification" />
          <table id="seatsBlock">
            <tbody>
              <tr>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
              </tr>
              {this.renderContent()}
            </tbody>
          </table>
          <div className="screen">
            <h2 className="wthree">Screen this way</h2>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.datGheReducer.listChair,
  };
};

export default connect(mapStateToProps)(DanhSachGhe);
