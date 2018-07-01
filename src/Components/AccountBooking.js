import React, {Component} from 'react';
import moment from 'moment';

class AccountBooking extends Component {

    render() {
        return (
            <div className="col-lg-4 offset-lg-4 col-sm-12 ">
                <div className="card">
                    <div className="card-body">
                        <h5 className={"card-title sign-" + (this.props.sign ? 'green' : 'red')}>
                            {this.props.sign ? '+' : '-'}&nbsp;{this.props.value}&nbsp;€
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {this.props.reference}
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {moment(this.props.spent_at).format('YY-MM-DD HH:mm')}
                        </h6>
                        <p className="card-text"></p>
                        <button className="btn btn-primary">Bearbeiten</button>&nbsp;
                        <button className="btn btn-danger" onClick={this.props.delete}>Löschen</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountBooking
