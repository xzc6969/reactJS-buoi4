import React, { Component } from "react";
import { connect } from "react-redux";

class ChiTiet extends Component {
  renderContent = () =>{
    return this.props.list.map((element, idx)=>{
      return (
        <tr key={idx}>
                <td>
                  <textarea id="seatDisplay" defaultValue={element.soGhe} />
                </td>
                <td>
                  <textarea id="priceDisplay" defaultValue={element.gia} />
                </td>
                <td>
                  <textarea className="remove" id="RemoveDisplay" defaultValue={"Hủy"} />
                </td>
              </tr>  
      )
    })
  }
  totalPrice=()=>{
    return this.props.list.reduce((sum,element)=>{
      return sum+element.gia;
  },0)
}
  render() {
    return (
      <div>
        <div
          className="displayerBoxes txt-center"
          style={{ overflowX: "auto" }}
        >
          <h2 className="list">Danh sách ghế đã đặt</h2>
          <table className="Displaytable w3ls-table" width="100%">
            <tbody>
              <tr>
                <th>Seat</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
              {this.renderContent()}
              <tr>
                <td>Tổng tiền</td>
                <td>{this.totalPrice()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list:state.datGheReducer.updateList,
  }
};

export default connect(mapStateToProps)(ChiTiet);
