import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import { STAFFS, DEPARTMENTS } from "../Shared/staffs";
import StaffList from "./Stafflist";
import StaffDetail from "./StaffDetail";
import Department from "./Department";
import Salary from "./Salary";

function Main() {
  const [staff, setStaff] = useState({
    staff: STAFFS,
    department: DEPARTMENTS,
  });

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/nhanvien" />} />
        <Route
          path="/nhanvien"
          exact
          element={<StaffList staffs={staff.staff} />}
        />
        <Route
          path="/nhanvien/:nhanvienId"
          element={<StaffDetail StaffDetail={staff.staff} />}
        />
        <Route
          path="/bophan"
          element={<Department dept={staff.department} />}
        />
        <Route path="/luong" element={<Salary salary={staff.staff} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
