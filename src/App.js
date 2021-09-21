import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './StaffListComponent';
import { STAFFS } from './staffs';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <br />
        <StaffList staffs={this.state.staffs} />
        <br/>
        <p className="container">Bấm vào tên nhân viên để xem thông tin</p>
      </div>
    );
  }
}

export default App;