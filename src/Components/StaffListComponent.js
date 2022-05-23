import { STAFFS } from "../Shared/staffs";
import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import dateFormat, { masks } from "dateformat";

class Staff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      selectedStaff: null,
    };
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaff(staff) {
    if (staff !== null) {
      return (
        <div key={staff.id} className="col-12 col-md-5 col-xl-4 mt-3">
          <Card className="text-white bg-info mb-3">
            <CardHeader
              className="font-weight-bold pl-2"
              style={{ fontSize: "20px" }}
            >
              THÔNG TIN NHÂN VIÊN
            </CardHeader>
            <CardBody>
              <p className="font-weight-bold">Họ và tên: {staff.name}</p>
              <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
              <p>Ngày sinh: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
              <p>Phòng ban: {staff.department.name}</p>
              <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
              <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return (
        <div className="col-12 col-md-5 col-xl-3 m-2 p-1">
          Bấm vào tên nhân viên để xem thông tin.
        </div>
      );
    }
  }

  render() {
    const staff = this.state.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-5 col-xl-4 mt-3">
          <Card
            className="bg-light mb-3"
            onClick={() => this.onStaffSelect(staff)}
          >
            {staff.name}
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{staff}</div>
        <div className="row">{this.renderStaff(this.state.selectedStaff)}</div>
      </div>
    );
  }
}

export default Staff;
