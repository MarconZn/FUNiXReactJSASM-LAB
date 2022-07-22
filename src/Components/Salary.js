import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const luongCB = 3000000;
const luongNgay = 200000;

function RenderSalary(props) {
  return (
    <Card>
      <CardTitle className="p-3 bg-white rounded m-2 font-weight-bold text-uppercase h5">
        {props.salary.name}
      </CardTitle>
      <CardBody>
        <CardText>Mã nhân viên: {props.salary.id}</CardText>
        <CardText>Hệ số lương: {props.salary.salaryScale}</CardText>
        <CardText>Số giờ làm thêm: {props.salary.overTime}</CardText>
        <CardText className="bg-light p-2 shadow font-weight-bold text-uppercase h6 text-info">
          Lương:{" "}
          {(
            props.salary.salaryScale * luongCB +
            props.salary.overTime * luongNgay
          ).toFixed(0)}
        </CardText>
      </CardBody>
    </Card>
  );
}

function Salary(props) {
  const [sortSalary, setSortSalary] = useState(false);

  const salary = props.salary
    .sort((a, b) => (sortSalary ? b.salaryScale - a.salaryScale : a.id - b.id))
    .map((ss) => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2 mb-2" key={ss.id}>
          <RenderSalary salary={ss} />
        </div>
      );
    });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <button
        className="row btn btn-danger"
        onClick={() => setSortSalary(!sortSalary)}
      >
        Sắp xếp theo hệ số lương
      </button>
      <div className="row shadow m-3">{salary}</div>
    </div>
  );
}

export default Salary;
