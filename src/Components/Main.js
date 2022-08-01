import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import StaffList from "./Stafflist";
import StaffDetail from "./StaffDetail";
import Department from "./Department";
import Salary from "./Salary";
import { StaffSliceActions } from "../Redux/Store";
import { useSelector, useDispatch } from "react-redux";
import DepartmentDetail from "./DepartmentDetail";
import { API } from "../Shared/API";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    return async () => {
      const getData = async () => {
        const response = await fetch(`${API}staffs`);
        if (!response.ok) {
          throw new Error("Fetch dữ liệu thất bại");
        }
        const data = await response.json();
        return data;
      };
      try {
        const StaffData = await getData();
        dispatch(StaffSliceActions.inputStaff(StaffData));
      } catch (error) {
        console.log("Fetch dữ liệu thất bại");
      }
    };
  }, []);

  useEffect(() => {
    return async () => {
      const loadData = async () => {
        const response = await fetch(`${API}departments`);
        if (!response.ok) {
          throw new Error("Fetch dữ liệu thất bại");
        }
        const data = await response.json();
        return data;
      };
      try {
        const Department = await loadData();
        dispatch(StaffSliceActions.inputDepartment(Department));
      } catch (error) {
        console.log("Fetch dữ liệu thất bại");
      }
    };
  }, []);

  function AddStaffHandle(event) {
    const newStaff = { id: staff.staff.length, ...event.newStaffAdd };
    dispatch(StaffSliceActions.addStaff(newStaff));
    fetch(`${API}staffs`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newStaff),
    }).then((res) => {
      if (res.ok) {
        alert("Thêm nhân viên thành công");
      }
    });
  }

  function DeleteStaffHandle(event) {
    if (window.confirm("Delete?")) {
      dispatch(StaffSliceActions.deleteStaff(event.StaffDeleteId));
      fetch(`${API}staffs/${event.StaffDeleteId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      }).then((res) => {
        if (res.ok) {
          alert("Xoa thanh cong");
        }
      });
    }
  }

  const STAFFS = useSelector((state) => state.staff);
  const DEPARTMENT = useSelector((state) => state.department);

  const staff = {
    staff: STAFFS,
    department: DEPARTMENT,
  };

  function UpdateStaff(event) {
    dispatch(StaffSliceActions.inputStaff(event));
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/nhanvien" />} />
        <Route
          path="/nhanvien"
          exact
          element={
            <StaffList
              onAdd={AddStaffHandle}
              staffs={staff.staff}
              Department={staff.department}
              onDelete={DeleteStaffHandle}
            />
          }
        />
        <Route
          path="/nhanvien/:nhanvienId"
          element={
            <StaffDetail
              StaffDetail={staff.staff}
              Department={staff.department}
              onUpdateStaff={UpdateStaff}
            />
          }
        />
        <Route
          path="/bophan"
          element={<Department dept={staff.department} staff={staff.staff} />}
        />
        <Route
          path="/bophan/:phongbanId"
          element={
            <DepartmentDetail
              StaffDetail={staff.staff}
              Department={staff.department}
            />
          }
        />
        <Route path="/luong" element={<Salary salaryStaff={staff.staff} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
