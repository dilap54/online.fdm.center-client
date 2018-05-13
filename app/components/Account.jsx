import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => ({
    account: state.account
})

class Account extends Component {
    render(){
        const { account } = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/img/LogoHorizontalDescription.svg" width="180" />
                    </Link>
                    <div className="collapse navbar-collapse show">
                        <ul className="navbar-nav">
                            <form className="form-inline">
                                <input className="form-control" placeholder="Почта" />
                                <input className="form-control" placeholder="Пароль" />
                                <button className="btn btn-outline-success">Войти</button>
                            </form>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Зарегистрироваться</Link>
                            </li>
                            <li className="nav-item warn">
                                <a className="nav-link" href="#">Заказы</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <br />
                <span>{account.token}</span>
            </nav>
        )
    }
}

export default connect(mapStateToProps)(Account);
