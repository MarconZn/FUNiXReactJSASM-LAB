import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import dateFormat, { masks } from "dateformat";

function RenderStaffDetail(detail) {
  return (
    <div className="row m-3">
      <img
        className="col-xl-3 col-md-4 col-sm-12"
        src={detail.image}
        alt="detail.name"
      />
      <div className="col-xl-9 col-md-8 col-sm-12">
        <p className="h3">Họ và tên: {detail.name}</p>
        <p>Ngày sinh: {dateFormat(detail.doB, "dd/mm/yyyy")}</p>
        <p>Ngày sinh: {dateFormat(detail.startDate, "dd/mm/yyyy")}</p>
        <p>Phòng ban: {detail.department.name}</p>
        <p>Số ngày nghỉ còn lại: {detail.annualLeave}</p>
        <p>Số ngày đã làm thêm: {detail.overTime}</p>
      </div>
    </div>
  );
}

function StaffDetail(props) {
  const params = useParams();
  const staffDetail = props.StaffDetail.find(
    (detail) => detail.id === Number(params.nhanvienId)
  );

  const detail = RenderStaffDetail(staffDetail);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{staffDetail.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>{detail}</div>
    </div>
  );
}

export default StaffDetail;
