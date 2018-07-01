import React, {Component} from 'react';

class BookingInput extends Component {

    render() {
        return (
            <div className="col-lg-4 offset-lg-4 col-sm-12 ">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className={"sign sign-" + (this.props.sign ? 'green' : 'red') + ' input-group-text'}
                              onClick={this.props.signChange}>{this.props.sign ? '+' : '-'}</span>
                    </div>

                    <input className="form-control"
                           type={'number'}
                           placeholder="Betrage"
                           step="0.01"
                           value={this.props.value}
                           onChange={this.props.valueChange}/>
                    <div className="input-group-append">
                        <span className="input-group-text">€</span>
                    </div>
                </div>
                <div className="form-group">
                    <input className="form-control"
                           type={'text'}
                           placeholder="Verwendungszweck"
                           value={this.props.reference}
                           onChange={this.props.referenceChange}/>
                </div>
                <div className="form-group">
                    <input className="form-control"
                           type={'datetime-local'}
                           placeholder="Verwendungszweck"
                           value={this.props.spent_at}
                           onChange={this.props.spent_atChange}/>
                </div>
            </div>
        )
    };
}

export default BookingInput
