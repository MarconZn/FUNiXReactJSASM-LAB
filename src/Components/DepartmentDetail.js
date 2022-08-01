import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import dateFormat, { masks } from "dateformat";

function DepartmentDetail(props) {
  const params = useParams();
  const DepartmentDetail = props.Department.find(
    (detail) => detail.name === params.phongbanId
  );
  const StaffDetail = props.StaffDetail.filter(
    (detail) => detail.departmentId === DepartmentDetail.id
  );

  const StaffDepartment = StaffDetail.map((staff) => {
    return (
      <div className="text-center" key="staff.id">
        <div className="col-12 mt-4">
          <Link to={`/nhanvien/${staff.id}`}>
            {<img src={staff.image} alt={staff.name} />}
            <p className="row bg-light m-1 h6">{staff.name}</p>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/bophan">Phòng ban</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{DepartmentDetail.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">{StaffDepartment}</div>
    </div>
  );
}

export default DepartmentDetail;
