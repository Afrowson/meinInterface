import React, {Component} from 'react';
import moment from 'moment';

import AccountBooking from "./AccountBooking";
import BookingInput from "./BookingInput";

class Bookings extends Component {
    state = {
        value: 0.00,
        reference: '',
        sign: false,
        spent_at: moment().format("YYYY-MM-DDTHH:mm"),
        accountBookings: [{value: 0, reference: 'banane', spent_at: moment()}]
    };

    valueChange = (event) => {
        this.setState({value: event.target.value});
    }
    referenceChange = (event) => {
        this.setState({reference: event.target.value});
    }
    spent_atChange = (event) => {
        console.log(event.target)
        this.setState({spent_at: moment(event.target.value).format("YYYY-MM-DDTHH:mm")});
    }
    signChange = () => {
        this.setState(prevState => ({sign: !prevState.sign}))
    }
    addEntryHandler = () => {
        if (this.state.value === 0) {
            return
        }
        this.setState(prevState => ({
            value: '',
            reference: '',
            accountBookings: [...prevState.accountBookings, {
                value: prevState.value,
                reference: prevState.reference,
                spent_at: prevState.spent_at,
                sign: prevState.sign
            }]
        }));
        console.log(this.state.items)
    }
    removeEntryHandler = index =>{
        var newBookings = this.state.accountBookings;
        newBookings.splice(index, 1);
        this.setState({accountBookings: newBookings})
    }

    render() {

        return (
            <div className="App">
                <h1>Buchungen</h1>
                <BookingInput
                    value={this.state.value}
                    reference={this.state.reference}
                    spent_at={this.state.spent_at}
                    sign={this.state.sign}
                    valueChange={this.valueChange.bind(this)}
                    referenceChange={this.referenceChange.bind(this)}
                    spent_atChange={this.spent_atChange.bind(this)}
                    signChange={this.signChange.bind(this)}
                />
                <button className={'btn btn-primary'} onClick={this.addEntryHandler}>Hinzufügen</button>

                <div className="container">
                    <div className="row m-3">
                        {this.state.accountBookings.map((booking, index) =>
                            <AccountBooking reference={booking.reference}
                                            value={booking.value}
                                            spent_at={booking.spent_at}
                                            sign={booking.sign}
                                            key={index}
                                            delete={this.removeEntryHandler.bind(this,index)}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Bookings
