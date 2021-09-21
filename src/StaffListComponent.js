import React, { Component } from 'react';
import { Button, Card, CardTitle, CardText } from 'reactstrap';
import dateFormat from 'dateformat';

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        } 
    }

    onStaffSelect(staff) {
        this.setState ({
            selectedStaff: staff
        });
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <Card className="col-lg-4 col-md-6 col-xs-12 pl-5 pt-5 pb-5 pr-0 m-3" key={staff.id}>
                    <CardTitle>Họ và Tên: {staff.name}</CardTitle>
                    <CardText>
                        Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}<br />
                        Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}<br />
                        Phòng ban: {staff.department.name}<br />
                        Số ngày nghỉ còn lại: {staff.annualLeave}<br />
                        Số ngày đã làm thêm: {staff.overTime}
                    </CardText>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {
        const stafflist = this.props.staffs.map((staff) => {
            return(
                <Button onClick={() => this.onStaffSelect(staff)} className="col-lg-4 col-md-6 col-xs-12" key={staff.id} outline>{staff.name}</Button>
            );
        });
        return(
            <div>
                <div className="row">{stafflist}</div>
                <div className="row">{this.renderStaff(this.state.selectedStaff)}</div>
            </div>
        );
    }
}
export default StaffList;