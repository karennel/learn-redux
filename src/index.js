// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { createStore } from 'redux';

// INCREMENT DECREMENT EXAMPLE

// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':  return state + 1; 
//         case 'DECREMENT':  return state - 1;
//         default: return state;  
//     }
// }

// const Counter = ({
//     value,
//     onIncrement,
//     onDecrement
// }) => {
//     return (
//         <div>
//             <h1>{value}</h1>
//             <button onClick={onIncrement}>+</button>
//             <button onClick={onDecrement}>-</button>
//         </div>
//     )
// };

// const store = createStore(counter); 

// console.log('store.getstate',store.getState()); 

// const render = () => {

//     ReactDOM.render( 
//         <Counter value={store.getState()} 
//         onIncrement={()=> store.dispatch({type:'INCREMENT'})}
//         onDecrement={()=> store.dispatch({type:'DECREMENT'})}
//         />,
//         document.getElementById('root'));
//         registerServiceWorker();
//     }

// store.subscribe(render);
// render(); 

//TESTING 123

import expect from 'expect'; 
import deepFreeze from 'deep-freeze'; 

// const toggleTodo = (todo) => {

//     console.log(todo); 
//     return { ...todo,
//         completed: !todo.completed };
// }

// const addCounter = (list) => {
//     return [...list,0];
// }

// const removeCounter = (list,index) => {
//     // console.log(' slice',
//     // list.slice(0,index),
//     // list.slice(index+ 1));
//     return [
//         ...list.slice(0,index),
//         ...list.slice(index+ 1)
//     ];
// } 

// const incrementCounter = (list, index) => {
//     return [
//         ...list.slice(0,index),
//         list[index] + 1,
//         ...list.slice(index + 1)
//     ]
// }

// const testIncrementCounter = () => {
//     const listBefore = [0,10,20];
//     const listAfter = [0,11,20];

//     expect(
//         incrementCounter(listBefore,1)
//     ).toEqual(listAfter); 
// };

// const testRemoveCounter = () => {
//     const listBefore = [0,10,20];
//     const listAfter = [0,20];

//     deepFreeze(listBefore); 

//     expect(
//         removeCounter(listBefore,1)
//     ).toEqual(listAfter);
// };

// const testAddCounter = () => {
//     const listBefore = []; 
//     const listAfter = [0];

//     deepFreeze(listBefore); 

//     expect(
//         addCounter(listBefore)
//     ).toEqual(listAfter);
// };

// const testToggleTodo = () => {
//     const todoBefore = {
//         id: 0,
//         text: 'Learn Redux',
//         completed: false
//     };
//     const todoAfter = {
//         id: 0,
//         text: 'Learn Redux',
//         completed: true
//     };

//     deepFreeze(todoBefore); 

//     expect(
//         toggleTodo(todoBefore)
//     ).toEqual(todoAfter);
// };

// testToggleTodo(); 

// testAddCounter();
// testRemoveCounter(); 
// testIncrementCounter(); 

// REDUCER

const todos = (state = [], action) => {

    console.log('in todos' , state); 
    switch(action.type) {
        case 'ADD_TODO':
          return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed:false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo, 
                    completed: !todo.completed
                } 
            })
        default: return state; 
    }
};

const testAddTodo = () => {
    const stateBefore = [
        {id: 0,
        text: 'blah blah',
        completed: false
        }
    ];
    const action = {
        type: 'ADD_TODO',
        id: 1,
        text: 'Learn Redux'
    };

    const stateAfter = [
        {id: 0,
            text: 'blah blah',
            completed: false
            },
        {
            id: 1,
            text: 'Learn Redux',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
}


const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'blah blah',
            completed: false
        },
        {
            id: 1,
            text: 'learn react',
            completed: false
        },
        {
            id: 2,
            text: 'shopping',
            completed: false
        }
    ]
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }
    const stateAfter = [
        {
            id: 0,
            text: 'blah blah',
            completed: false
        },
        {
            id: 1,
            text: 'learn react',
            completed: true
        },
        {
            id: 2,
            text: 'shopping',
            completed: false
        }
    ];

    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)
    ).toEqual(stateAfter);
}

// testAddTodo(); 
testToggleTodo(); 

console.log('All tests passed!');

