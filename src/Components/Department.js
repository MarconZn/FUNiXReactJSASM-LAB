import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderDept(props) {
  return (
    <Card>
      <CardTitle className="m-2 font-weight-bold text-uppercase h5">
        {props.dept.name}
      </CardTitle>
      <CardBody>
        <CardText>Số lượng nhân viên: {props.dept.numberOfStaff}</CardText>
      </CardBody>
    </Card>
  );
}

function Department(props) {
  const departments = props.dept.map((dept) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mt-2 mb-2" key={dept.id}>
        <RenderDept dept={dept} />
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
          <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row shadow m-3">{departments}</div>
    </div>
  );
}

export default Department;
