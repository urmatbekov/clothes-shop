import React, {Component} from 'react';
import Header from "../header/header";
import UseScript from "../hooks/useScript";
import Cart from "../cart/cart";
import WelcomArea from "../welcom-area/welcom-area";
import TopCategory from "../top-category/top-category";
import NewArrivals from "../new-arrivals/new-arrivals";
import Brands from "../brands/brands";
import {UserProvider} from "../provider/user-provider";

class App extends Component {

    state = {
        user: {
            isAuthenticated: false
        }
    }

    login = () => {
        this.setState({
            user: {
                id: 1,
                username: "Nurkadyr",
                email: "nurkadyr@gmail.com",
                isAuthenticated: true
            }
        })
    }

    logout = () => {
        this.setState({user: {isAuthenticated: false}})
    }

    render() {
        const actions = {
            login: this.login,
            logout: this.logout
        }
        const state = this.state
        return (
            <UserProvider value={{state, actions}}>
                <Header/>
                <Cart/>
                <WelcomArea/>
                <TopCategory/>
                <NewArrivals/>
                <Brands/>
                <UseScript url={"js/active.js"}/>
            </UserProvider>
        );
    }
}

export default App;