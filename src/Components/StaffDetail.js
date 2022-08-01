import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import dateFormat, { masks } from "dateformat";
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

function StaffDetail(props) {
  const [show, setShow] = useState(false);

  const modalToggle = () => setShow(!show);

  const params = useParams();

  const staffDetail = props.StaffDetail.find(
    (detail) => detail.id === Number(params.nhanvienId)
  );
  const staffDepartment = props.Department.find(
    (detail) => detail.id === staffDetail.departmentId
  );

  const [curStaff, setCurStaff] = useState({
    name: staffDetail.name,
    doB: staffDetail.doB,
    salaryScale: Number(staffDetail.salaryScale),
    department: staffDepartment.name,
    annualLeave: Number(staffDetail.annualLeave),
    overTime: Number(staffDetail.overTime),
    startDate: staffDetail.startDate,
    image: "/assets/images/alberto.png",
    id: staffDetail.id,
  });

  const [touched, setTouched] = useState({
    name: true,
    doB: true,
    salaryScale: true,
    startDate: true,
    department: true,
    annualLeave: true,
    overTime: true,
  });

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
    curStaff.name,
    curStaff.doB,
    curStaff.startDate,
    curStaff.department,
    curStaff.salaryScale,
    curStaff.annualLeave,
    curStaff.overTime
  );

  function HandleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    event.preventDefault();
    setCurStaff((e) => ({
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
    const Department = props.Department.find(
      (department) => department.name === curStaff.department
    );
    const curStaffAdd = {
      name: curStaff.name,
      doB: curStaff.doB,
      startDate: curStaff.startDate,
      departmentId: Department.id,
      salaryScale: curStaff.salaryScale,
      annualLeave: curStaff.annualLeave,
      overTime: curStaff.overTime,
      image: curStaff.image,
      id: curStaff.id,
    };
    // const filterStaff = props.StaffDetail.filter(
    //   (a) => a.id !== curStaffAdd.id
    // );
    // filterStaff.push(curStaffAdd);
    // const updateStaffAdd = filterStaff.sort((a, b) => a.id - b.id);
    props.onUpdateStaff(curStaff);

    modalToggle();
  }

  function RenderStaffDetail(detail, department) {
    return (
      <div className="row m-3">
        <div className="col-xl-12 col-md-12 col-sm-12 m-2">
          <button className="btn btn-success" onClick={modalToggle}>
            Thay đổi thông tin
          </button>
        </div>
        <img
          className="col-xl-3 col-md-4 col-sm-12"
          src={detail.image}
          alt="detail.name"
        />
        <div className="col-xl-9 col-md-8 col-sm-12">
          <p className="h3">Họ và tên: {detail.name}</p>
          <p>Ngày sinh: {dateFormat(detail.doB, "dd/mm/yyyy")}</p>
          <p>Ngày sinh: {dateFormat(detail.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {department.name}</p>
          <p>Số ngày nghỉ còn lại: {detail.annualLeave}</p>
          <p>Số ngày đã làm thêm: {detail.overTime}</p>
        </div>
      </div>
    );
  }

  const detail = RenderStaffDetail(staffDetail, staffDepartment);

  function RenderStaffDetail(detail, department) {
    return (
      <div className="row m-3">
        <div className="col-xl-12 col-md-12 col-sm-12 m-2">
          <button className="btn btn-success" onClick={modalToggle}>
            Thay đổi thông tin
          </button>
        </div>
        <img
          className="col-xl-3 col-md-4 col-sm-12"
          src={detail.image}
          alt="detail.name"
        />
        <div className="col-xl-9 col-md-8 col-sm-12">
          <p className="h3">Họ và tên: {detail.name}</p>
          <p>Ngày sinh: {dateFormat(detail.doB, "dd/mm/yyyy")}</p>
          <p>Ngày sinh: {dateFormat(detail.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {department.name}</p>
          <p>Số ngày nghỉ còn lại: {detail.annualLeave}</p>
          <p>Số ngày đã làm thêm: {detail.overTime}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <Modal isOpen={show} toggle={modalToggle}>
          <ModalHeader closebutton toggle={modalToggle}>
            Cập nhật thông tin nhân viên
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
                    value={curStaff.name}
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
                    value={curStaff.doB}
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
                    value={curStaff.startDate}
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
                    value={curStaff.department}
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
                    value={curStaff.salaryScale}
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
                    value={curStaff.annualLeave}
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
                    value={curStaff.overTime}
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
                    Cập nhật thông tin
                  </Button>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
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
