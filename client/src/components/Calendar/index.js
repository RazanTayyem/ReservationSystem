import React, {Component} from 'react';
import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import axios from 'axios'
const localizer = Calendar.momentLocalizer(moment);

class BigCalendar extends Component {

  state={
      events:{},
    }

  componentDidMount(){
    axios.get('/')
    .then((data)=>{
      const result =data.data;
      this.setState({
        events: result,
      })
    }).catch((error)=>{
      console.log(error);
    })
  }

    click=()=>{
      const {history}= this.props;
      history.push('/bookevent');
    }

    show=()=>{
      console.log(this.props);
      const {history}= this.props;
      history.push('/detailsevent');
    }

    render() {
      return (
        <div>
          <Calendar
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={this.state.events}
            style={{ height: "100vh" }}
            onSelectEvent={this.show}
            onSelectSlot={this.click}
          />
        </div>
      );
    }
}
export default BigCalendar;
