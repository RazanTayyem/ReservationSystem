import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./bookevent.css";
import axios from "axios";

class BookEvent extends React.Component {
  state = {
    input: "",
    startDate: new Date(),
    endDate: new Date()
  };

  handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleChangeStartDate = date => {
    console.log("date", date);
    this.setState({ startDate: date });
  };
  handleChangeEndDate = date => {
    console.log("date", date);
    this.setState({ endDate: date });
  };

  handleClick = () => {
    const { history } = this.props;
    axios.post("/bookevent", this.state).then(data => {
      history.push("/events");
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="page">
        <div>
          <NavBar />
        </div>
        <div className="both">
          <SideBar />
          <div className="BookEvent">
            <form>
              <div className="container">
                <div className="column1">
                  <h2 className="h2">General</h2>
                  <input
                    className="input"
                    type="text"
                    name="title"
                    placeholder="Event Name:"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <label className="label">Start Date:</label>
                  <DatePicker
                    className="bookdates"
                    selected={this.state.startDate}
                    // onSelect={this.handleSelect}
                    onChange={this.handleChangeStartDate}
                  />

                  <input
                    className="note"
                    type="text"
                    name="note"
                    placeholder="Note:"
                    value={this.state.note}
                    onChange={this.handleChange}
                  />
                  <input
                    className="input"
                    type="text"
                    name="capacity"
                    placeholder="#Persons:"
                    value={this.state.capacity}
                    onChange={this.handleChange}
                  />
                  <h2 className="h2">Lunch</h2>
                  <input
                    className="note"
                    type="text"
                    name="lunchnote"
                    placeholder="Description:"
                    value={this.state.lunchnote}
                    onChange={this.handleChange}
                  />

                  <h2 className="coffee">Coffee</h2>
                  <input
                    className="note"
                    type="text"
                    name="coffeenote"
                    placeholder="Description:"
                    value={this.state.coffeenote}
                    onChange={this.handleChange}
                  />

                  <h2 className="equipment">Equipment</h2>
                  <input
                    className="note"
                    type="text"
                    name="equipmentnote"
                    placeholder="Description:"
                    value={this.state.equipmentnote}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="column2">
                  <input
                    className="input"
                    type="text"
                    name="orgName"
                    placeholder="Organization Name"
                    value={this.state.orgName}
                    onChange={this.handleChange}
                  />
                  <label className="label">End Date:</label>
                  <DatePicker
                    className="bookdates"
                    selected={this.state.endDate}
                    // onSelect={this.handleSelect}
                    onChange={this.handleChangeEndDate}
                  />

                  <input
                    className="input"
                    type="Number"
                    name="price"
                    placeholder="Cost:"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                  <input
                    className="lunchcost"
                    type="Number"
                    name="lunchprice"
                    placeholder="Cost/Person:"
                    value={this.state.lunchprice}
                    onChange={this.handleChange}
                  />

                  <input
                    className="lunchtime"
                    type="text"
                    name="time"
                    placeholder="Time:"
                    value={this.state.lunchtime}
                    onChange={this.handleChange}
                  />

                  <input
                    className="coffeecost"
                    type="Number"
                    name="coffeeprice"
                    placeholder="Cost/Person:"
                    value={this.state.coffeeprice}
                    onChange={this.handleChange}
                  />

                  <input
                    className="coffeetime"
                    type="text"
                    name="time"
                    placeholder="Time:"
                    value={this.state.coffeetime}
                    onChange={this.handleChange}
                  />
                  <input
                    className="equipmentcost"
                    type="Number"
                    name="equipmentprice"
                    placeholder="Cost:"
                    value={this.state.equipmentprice}
                    onChange={this.handleChange}
                  />
                  <div className="total">
                    <h2 className="totalcost">Total Cost:</h2>
                    <input
                      className="submitBtn"
                      type="submit"
                      onClick={this.handleClick}
                      value="Submit"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default BookEvent;
