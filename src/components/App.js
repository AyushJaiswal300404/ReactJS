import React from 'react'
import CountButton from './CountBtn'

const App = () => {

    return (
        <div>
            <CountButton incrementBy={1} buttonColor={"blue"}/>
            <CountButton incrementBy={5} buttonColor={"red"}/>
            <CountButton incrementBy={7} buttonColor={"green"}/>
            <CountButton incrementBy={10} buttonColor={"yellow"}/>
            <CountButton incrementBy={99} buttonColor={"violet"}/>
        </div>
    )
}

export default App