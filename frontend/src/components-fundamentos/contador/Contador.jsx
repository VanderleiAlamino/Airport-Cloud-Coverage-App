import './Contador.scss'
import React, { Component } from 'react'

export default class Contador extends Component {


    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h4>Valor: {this.state.valor}</h4>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="form-group text-left">
                            <label htmlFor="passoInput">Passo:</label>
                            <input className="form-control" type="number" id="passoInput" value={this.state.passo}
                                onChange={e => this.setState({ passo: +e.target.value })} />
                        </div>
                    </div>
                </div>



                <div>
                    <button className="btn btn-primary mx-1" onClick={this.inc}>+</button>
                    <button className="btn btn-danger mx-1" onClick={this.dec}>-</button>
                </div>

            </div>
        )
    }
}