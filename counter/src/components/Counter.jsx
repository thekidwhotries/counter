import React, { useState } from 'react'

function Counter() {

    // How to create state variable?
    const [counter , setCounter  ] = useState(0)

    
    const incrementCounter = ()=>{
        setCounter(counter+1)
    }

    const decrementCounter = () => setCounter(counter-5)

    const resetCounter = () => setCounter(0)
    return (
        <div>
            <h1>Counter</h1>
            <div className='biggest-div'>

                <div className='top-div'>
                    {counter}
                </div>

                <div className='bottom-div'>
                    <button className='add' onClick={incrementCounter}>
                    increment
                    </button>
                    
                    <button className='reset' onClick={resetCounter}>
                    reset
                    </button>

                    <button className='subtract' onClick={decrementCounter}>
                    decrement
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Counter
