import React from 'react';
import './bookevent.css';
import axios from 'axios';
class BookEvent extends React.Component {
  state={
    input:''
  }
  handleChange=({target:{name,value}})=> {
    this.setState({[name]: value})
  }

  handleClick =()=>{
    const {history} = this.props;
    axios.post('/bookevent',this.state)
    .then((data)=>{
    history.push('/events');
    })
  }

  handleSubmitForm=(event)=>{
    event.preventDefault();
  }
  render() {
    return (
      <div className="BookEvent">
        <form onSubmit={this.handleSubmitForm}>
          <div className="container">
            <div className="column1">
              <h2 className="h2">General</h2>
                <input className="input"
                  type="text"
                  name="title"
                  value={this.state.title}
                  placeholder="Event Name:"
                  onChange={this.handleChange}
                />
                <label className="label">Start Date:</label>
                <input className="input"
                  type="date"
                  name="startdate"
                  value={this.state.startdate}
                  onChange={this.handleChange}
                />
                <input className="input"
                  type="text"
                  name="note"
                  value={this.state.note}
                  placeholder="Note:"
                  onChange={this.handleChange}
                />
                <input className="input"
                  type="text"
                  name="capacity"
                  value={this.state.capacity}
                  placeholder="#Persons:"
                  onChange={this.handleChange}
                />
                <h2 className="h2">Lunch</h2>
                <input className="input"
                  type="text"
                  name="lunchnote"
                  value={this.state.lunchnote}
                  placeholder="Description:"
                  onChange={this.handleChange}
                />

                <h2 className="coffee">Coffee</h2>
                <input className="input"
                  type="text"
                  name="coffeenote"
                  value={this.state.coffeenote}
                  placeholder="Description:"
                  onChange={this.handleChange}
                />

                <h2 className="equipment">Equipment</h2>
                <input className="input"
                  type="text"
                  name="equipmentnote"
                  value={this.state.equipmentnote}
                  placeholder="Description:"
                  onChange={this.handleChange}
                />
            </div>
            <div className="column2">
            <input className="input"
              type="text"
              name="orgName"
              value={this.state.orgName}
              placeholder="Organization Name:"
              onChange={this.handleChange}
            />
            <label className="label">End Date:</label>
            <input className="input"
              type="date"
              name="enddate"
              value={this.state.enddate}
              onChange={this.handleChange}
            />
            <input className="input"
              type="Number"
              name="price"
              value={this.state.price}
              placeholder="Cost:"
              onChange={this.handleChange}
            />
            <input className="lunch"
              type="Number"
              name="lunchprice"
              value={this.state.lunchprice}
              placeholder="Cost/Person:"
              onChange={this.handleChange}
            />
            <label className="label">Time:</label>
            <input className="input"
              type="date"
              name="lunchtime"
              value={this.state.lunchtime}
              onChange={this.handleChange}
            />

            <input className="coffeecost"
              type="Number"
              name="coffeeprice"
              value={this.state.coffeeprice}
              placeholder="Cost/Person:"
              onChange={this.handleChange}
            />

            <label className="label">Time:</label>
            <input className="input"
              type="date"
              name="coffeetime"
              value={this.state.coffeetime}
              onChange={this.handleChange}
            />
            <input className="equipmentcost"
              type="Number"
              name="equipmentprice"
              value={this.state.equipmentprice}
              placeholder="Cost:"
              onChange={this.handleChange}
            />
            <h2 className="h2">Total Cost:</h2>
            </div>
          </div>
          <input className="submitBtn"
          type="submit"
          onClick={this.handleClick}
          value="Submit"
          >
          </input>
        </form>
      </div>
      )
  }
}
export default BookEvent
