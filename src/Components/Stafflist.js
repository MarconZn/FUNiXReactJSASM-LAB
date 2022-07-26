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
import { Control, LocalForm, Errors } from "react-redux-form";

function StaffList(props) {
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
    name: true,
    doB: false,
    salaryScale: true,
    startDate: false,
    department: true,
    annualLeave: true,
    overTime: true,
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

    if (!touched.doB || doB === "") errors.doB = "Yêu cầu nhập thông tin";
    if (!touched.startDate || startDate === "")
      errors.startDate = "Yêu cầu nhập thông tin";
    if (!touched.overTime) errors.overTime = "Yêu cầu nhập thông tin";
    return errors;
  }

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => !val || val.length >= len;
  const isNumber = (val) => !val || !isNaN(Number(val));

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

  const HandleSubmit = (event) => {
    const newStaffAdd = {
      name: event.name,
      doB: newStaff.doB,
      startDate: newStaff.startDate,
      department: { name: event.department },
      salaryScale: newStaff.salaryScale,
      annualLeave: newStaff.annualLeave,
      overTime: newStaff.overTime,
      image: newStaff.image,
    };

    props.onAdd({ newStaffAdd });
  };

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
          <LocalForm onSubmit={(value) => HandleSubmit(value)}>
            <Row className="control-group mb-2">
              <Label htmlFor="name" md={4}>
                Tên
              </Label>
              <Col md={8}>
                <Control.text
                  model=".name"
                  className="form-control"
                  id="name"
                  name="name"
                  validators={{
                    required,
                    maxLength: maxLength(30),
                    minLength: minLength(3),
                  }}
                  onChange={(HandleInput, HandleBlur)}
                  onBlur={HandleBlur}
                />
                <Errors
                  model=".name"
                  className="text-danger"
                  messages={{
                    required: "Yêu cầu điền thông tin",
                    maxLength: "Tên không được quá 30 ký tự",
                    minLength: "Tên phải nhiều hơn 3 ký tự",
                  }}
                />
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
                <Control.select
                  model=".department"
                  className="form-control"
                  id="name"
                  name="name"
                  validators={{
                    required,
                  }}
                  onChange={(HandleInput, HandleBlur)}
                  onBlur={HandleBlur}
                >
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </Control.select>
                <Errors
                  model=".department"
                  className="text-danger"
                  messages={{
                    required: "Yêu cầu chọn phòng ban",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group mb-2">
              <Label htmlFor="salaryScale" md={4}>
                Lương
              </Label>
              <Col md={8}>
                <Control.text
                  model=".salaryScale"
                  className="form-control"
                  id="name"
                  name="name"
                  validators={{
                    required,
                    isNumber,
                  }}
                  onChange={(HandleInput, HandleBlur)}
                  onBlur={HandleBlur}
                />
                <Errors
                  model=".salaryScale"
                  className="text-danger"
                  messages={{
                    required: "Yêu cầu điền thông tin",
                    isNumber: "Thông tin phải nhập số",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group mb-2">
              <Label htmlFor="annualLeave" md={4}>
                Số ngày nghỉ còn lại
              </Label>
              <Col md={8}>
                <Control.text
                  model=".annualLeave"
                  className="form-control"
                  id="name"
                  name="name"
                  validators={{
                    required,
                    isNumber,
                  }}
                  onChange={(HandleInput, HandleBlur)}
                  onBlur={HandleBlur}
                />
                <Errors
                  model=".annualLeave"
                  className="text-danger"
                  messages={{
                    required: "Yêu cầu điền thông tin",
                    isNumber: "Thông tin phải nhập số",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group mb-3">
              <Label htmlFor="overTime" md={4}>
                Số ngày đã làm thêm
              </Label>
              <Col md={8}>
                <Control.text
                  model=".overTime"
                  className="form-control"
                  id="name"
                  name="name"
                  validators={{
                    required,
                    isNumber,
                  }}
                  onChange={HandleInput}
                  onBlur={HandleBlur}
                />
                <Errors
                  model=".overTime"
                  className="text-danger"
                  messages={{
                    required: "Yêu cầu điền thông tin",
                    isNumber: "Thông tin phải nhập số",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group">
              <Col md={12} align={"right"}>
                <Button type="submit" color="success" disabled={checkValid}>
                  Thêm
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
      <div className="row">{staffList}</div>
    </div>
  );
}

export default StaffList;
