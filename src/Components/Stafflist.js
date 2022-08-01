import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  FormFeedback,
  Form,
  Button,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

function StaffList(props) {
  const StaffDepartment = props.Department;
  const [newStaff, setNewStaff] = useState({
    name: "",
    doB: "",
    salaryScale: "1",
    department: "Sale",
    annualLeave: "0",
    overTime: "0",
    startDate: "",
    image: "/assets/images/alberto.png",
  });

  const [touched, setTouched] = useState({
    name: false,
    doB: false,
    salaryScale: false,
    startDate: false,
    department: false,
    annualLeave: false,
    overTime: false,
  });

  const [show, setShow] = useState(false);

  const modalToggle = () => setShow(!show);

  const [search, setSearch] = useState({ name: "" });

  function HandleBlur(event) {
    event.preventDefault();
    setNewStaff();
  }

  const staffList = props.staffs
    .filter((name) => {
      if (search.name === "") return name;
      else if (name.name.toLowerCase().includes(search.name.toLowerCase()))
        return name;
    })
    .map((staff) => {
      return (
        <div className="text-center" key={staff.id}>
          <div className="col-12 mt-4">
            <Link to={`/nhanvien/${staff.id}`}>
              {<img src={staff.image} alt={staff.name} />}
              <p className="row bg-light m-1 h6">{staff.name}</p>
            </Link>
          </div>
          <button
            className="btn btn-danger m-1"
            key="staff.id"
            a-key={staff.id}
            onClick={HandleDelete}
          >
            Xóa nhân viên
          </button>
        </div>
      );
    });

  const searchEvent = (event) => {
    event.preventDefault();
    const a = event.target.nameS.value;
    setSearch({ name: a });
    event.target.nameS.value = "";
  };

  function HandleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    event.preventDefault();
    setNewStaff((e) => ({
      ...e,
      [name]: value,
    }));
    setTouched((e) => ({
      ...e,
      [name]: value === "" ? false : true,
    }));
  }

  function HandleBlur(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    event.preventDefault();
    setTouched((e) => ({
      ...e,
      [name]: value === "" ? false : true,
    }));
  }

  function Validate(
    name,
    doB,
    startDate,
    department,
    salaryScale,
    annualLeave,
    overTime
  ) {
    const errors = {
      name: "",
      doB: "",
      salaryScale: "",
      department: "",
      annualLeave: "",
      overTime: "",
      startDate: "",
    };
    if (!touched.name) errors.name = "Yêu cầu điền thông tin";
    else if (name.length < 3) errors.name = "Tên phải dài hơn 3 ký tự";
    else if (name.length > 50) errors.name = "Tên không được quá 50 ký tự";
    if (!touched.doB || doB === "") errors.doB = "Yêu cầu nhập thông tin";
    if (!touched.startDate || startDate === "")
      errors.startDate = "Yêu cầu nhập thông tin";
    if (!touched.department || department === "")
      errors.department = "Yêu cầu nhập thông tin";
    if (!touched.salaryScale || salaryScale === "")
      errors.salaryScale = "Yêu cầu nhập thông tin";
    if (!touched.annualLeave || annualLeave === "")
      errors.annualLeave = "Yêu cầu nhập thông tin";
    if (!touched.overTime || overTime === "")
      errors.overTime = "Yêu cầu nhập thông tin";
    return errors;
  }

  const errors = Validate(
    newStaff.name,
    newStaff.doB,
    newStaff.startDate,
    newStaff.department,
    newStaff.salaryScale,
    newStaff.annualLeave,
    newStaff.overTime
  );

  let checkValid =
    (touched.name &&
      touched.doB &&
      touched.startDate &&
      touched.department &&
      touched.salaryScale &&
      touched.annualLeave &&
      touched.overTime) === true
      ? false
      : true;

  function HandleSubmit(event) {
    event.preventDefault();
    const Department = StaffDepartment.find(
      (department) => department.name === newStaff.department
    );
    const newStaffAdd = {
      name: newStaff.name,
      doB: newStaff.doB,
      startDate: newStaff.startDate,
      departmentId: Department.id,
      salaryScale: newStaff.salaryScale,
      annualLeave: newStaff.annualLeave,
      overTime: newStaff.overTime,
      image: newStaff.image,
    };

    props.onAdd({ newStaffAdd });
    // window.alert("Thêm nhân viên thành công");
    modalToggle();
  }

  function HandleDelete(event) {
    const StaffDeleteId = event.target.getAttribute("a-key");
    props.onDelete({ StaffDeleteId });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="mt-3">Nhân viên</h2>
        </div>
        <div className="col-lg-1">
          <button onClick={modalToggle} className="mt-3 btn btn-dark">
            <span className="fa fa-plus fa-lg"></span>
          </button>
        </div>
        <form onSubmit={searchEvent} className="col-lg-4 row form-group">
          <div>
            <input
              id="nameSearch"
              type="text"
              name="nameS"
              className="mt-3 form-control"
              placeholder="Tìm nhân viên theo tên..."
            />
          </div>
          <div>
            <button className="btn btn-success mt-3 ml-2" type="submit">
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
      <div className="col-12">
        <hr />
      </div>
      <Modal isOpen={show} toggle={modalToggle}>
        <ModalHeader closebutton toggle={modalToggle}>
          Thêm nhân viên
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={HandleSubmit}>
            <Row className="control-group mb-2">
              <Label htmlFor="name" md={4}>
                Tên
              </Label>
              <Col md={8}>
                <Input
                  type="text"
                  className="form-control mb-2"
                  id="name"
                  name="name"
                  value={newStaff.name}
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
                  onBlur={HandleBlur}
                  onChange={HandleInput}
                />
                <FormFeedback>{errors.name}</FormFeedback>
              </Col>
            </Row>
            <Row className="control-group mb-2">
              <Label htmlFor="doB" md={4}>
                Ngày sinh
              </Label>
              <Col md={8}>
                <Input
                  type="date"
                  id="doB"
                  name="doB"
                  className="mb-2"
                  onChange={HandleInput}
                  onBlur={HandleBlur}
                  valid={errors.doB === ""}
                  invalid={errors.doB !== ""}
                />
                <FormFeedback>{errors.doB}</FormFeedback>
              </Col>
            </Row>
            <Row className="control-group mb-2">
              <Label htmlFor="doW" md={4}>
                Ngày vào công ty
              </Label>
              <Col md={8}>
                <Input
                  type="date"
                  id="doW"
                  name="startDate"
                  className="mb-2"
                  onChange={HandleInput}
                  onBlur={HandleBlur}
                  valid={errors.startDate === ""}
                  invalid={errors.startDate !== ""}
                />
                <FormFeedback>{errors.startDate}</FormFeedback>
              </Col>
            </Row>
            <Row className="control-group mb-2">
              <Label htmlFor="department" md={4}>
                Phòng ban
              </Label>
              <Col md={8}>
                <Input
                  type="select"
                  id="department"
                  name="department"
                  className="form-control mb-2"
                  value={newStaff.department}
                  onChange={HandleInput}
                  onBlur={HandleBlur}
                  valid={errors.department === ""}
                  invalid={errors.department !== ""}
                >
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </Input>
                <FormFeedback>{errors.department}</FormFeedback>
              </Col>
            </Row>
            <Row className="control-group mb-2">
              <Label htmlFor="salaryScale" md={4}>
                Lương
              </Label>
              <Col md={8}>
                <Input
                  type="number"
                  className="form-control mb-2"
                  id="salaryScale"
                  name="salaryScale"
                  value={newStaff.salaryScale}
                  onChange={HandleInput}
                  onBlur={HandleBlur}
                  valid={errors.salaryScale === ""}
                  invalid={errors.salaryScale !== ""}
                />
                <FormFeedback>{errors.salaryScale}</FormFeedback>
              </Col>
            </Row>
            <Row className="control-group mb-2">
              <Label htmlFor="annualLeave" md={4}>
                Số ngày nghỉ còn lại
              </Label>
              <Col md={8}>
                <Input
                  type="number"
                  className="form-control mb-2"
                  id="annualLeave"
                  name="annualLeave"
                  value={newStaff.annualLeave}
                  onChange={HandleInput}
                  onBlur={HandleBlur}
                  valid={errors.annualLeave === ""}
                  invalid={errors.annualLeave !== ""}
                />
                <FormFeedback>{errors.annualLeave}</FormFeedback>
              </Col>
            </Row>
            <Row className="control-group mb-3">
              <Label htmlFor="overTime" md={4}>
                Số ngày đã làm thêm
              </Label>
              <Col md={8}>
                <Input
                  type="number"
                  className="form-control mb-3"
                  id="overTime"
                  name="overTime"
                  value={newStaff.overTime}
                  onChange={HandleInput}
                  onBlur={HandleBlur}
                  valid={errors.overTime === ""}
                  invalid={errors.overTime !== ""}
                />
                <FormFeedback>{errors.overTime}</FormFeedback>
              </Col>
            </Row>
            <Row className="control-group">
              <Col md={12} align={"right"}>
                <Button type="submit" color="success" disabled={checkValid}>
                  Thêm
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      <div className="row">{staffList}</div>
    </div>
  );
}

export default StaffList;
