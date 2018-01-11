import React, { Component } from 'react'
import { addRecipe, removeFromCalendar} from '../actions'
import { connect } from 'react-redux'

class App extends Component {


    render() {
        console.log(this.props)
        return (
          <div>
            Hello World!
          </div>
        );
    }
}
//Map our redux state to our component props
function mapStateToProps({calendar, food}) {
    const dayOrder = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday','sunday']


    return {
        calendar: dayOrder.map((day) => ({
            day,
            meals: Object.assign({}, food[calendar[day]])
            })
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
