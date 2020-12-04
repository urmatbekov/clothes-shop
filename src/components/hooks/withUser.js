import React from "react"
import {UserConsumer} from "../provider/user-provider";

const withUser = (mapStateToProps, mapActionsToProps) => (Component) => (props) => {

    return (
        <UserConsumer>
            {({state, actions}) => {
                const propsState = mapStateToProps(state)
                const actionsProps = mapActionsToProps(actions)
                return <Component {...propsState} {...actionsProps} {...props}/>
            }}
        </UserConsumer>
    )
}

export default withUser;