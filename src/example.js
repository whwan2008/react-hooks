import React, { useState , useContext,createContext} from 'react';
// import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

/*function Index(){
    useEffect(()=>{
        console.log('useEffect=>老弟你来了 index页面')
        return()=>{
            console.log('老弟，你走了!Index页面')
        }
    },[])
    return (<h2>wuhao</h2>)
}

function List(){
    return (<h2>list-Page</h2>)
} */

const CountContext=createContext();

function Counter(){
    const count=useContext(CountContext)
return (<h2>{count}</h2>)
}

function Example(){
    const [count,setCount]=useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount((count+1))}}>Click me!</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>

        {/* <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/'>列表</Link></li>
            </ul>
            <Route path='/' exact component={Index}/>
            <Route path='/list/' exact component={List}/>
        </Router> */}
        </div>
    )
}
export default Example