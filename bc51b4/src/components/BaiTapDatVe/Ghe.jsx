import React, { Component } from 'react'
import { connect } from 'react-redux';

class Ghe extends Component {
  render() {
    const {soGhe, daDat} = this.props.element;
    return (
        <td>
        <input onClick={()=>
          this.props.dispatch({
            type: "DAT_GHE",
            payload: this.props.element
          })
        } type="checkbox" className="seats" value={soGhe} disabled={daDat}/>
      </td>
    )
  }
}
export default connect()(Ghe)