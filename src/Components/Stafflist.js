import React from "react";
import { Link } from "react-router-dom";

function StaffList(props) {
  const staffList = props.staffs.map((staff) => {
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
      <div className="row">{staffList}</div>
    </div>
  );
}

export default StaffList;
