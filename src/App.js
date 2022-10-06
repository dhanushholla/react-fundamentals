import logo from "./logo.svg";
import "./App.css";
import Message from "./component/message";
import Namegreet from "./component/namegreet";
import Hello from "./component/hello";
import Welcome from "./component/welcome";
import { Greet } from "./component/Greet"; //name based export and import
import Counter from "./component/counter";
import FunctionClick from "./component/functionclick";
import Classclick from "./component/class_click";
import Eventbind from "./component/eventbind";
import Parentcomponent from "./component/parentcomponent";
import Usergreeting from "./component/usergreeting";
import Namelist from "./component/Namelist";
import Stylesheet from "./component/Stylesheet";
import Inline from "./component/inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./component/form";
import LifecycleA from "./component/LifecycleA";
import Fragmentdemo from "./component/Fragmentdemo";
import Table from "./component/Table";
import React, { PureComponent } from "react";
import Parentcomp from "./component/Parentcomp";
import Refsdemo from "./component/Refsdemo";
import Focusinput from "./component/Focusinput";
import FRparentinput from "./component/FRparentinput";
import Portaldemo from "./component/Portaldemo";
import Hero from "./component/Hero";
import ErrorBoundary from "./component/ErrorBoundary";
import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";
import KeyCounter from "./component/KeyCounter";
import ClickCounter2 from "./component/ClickCounter2";
import HoverCounter2 from "./component/HoverCounter2";
import User from "./component/User";
import County from "./component/County";
import Compc from "./component/Compc";
import { UserProvider } from "./component/Usercontext";
import Postlist from "./component/Postlist";
import Postform from "./component/Postform";
import HookCounter from "./component/HookCounter";
import Hookcounter2 from "./component/Hookcounter2";
import Hookcounter3 from "./component/Hookcounter3";
import HookCounter4 from "./component/HookCounter4";
import Hookue1 from "./component/Hookue1";
import Hookue2 from "./component/Hookue2";
import Hookue3 from "./component/Hookue3";
import Mousecontainer from "./component/Mousecontainer";
import Intervalhookcounter from "./component/Intervalhookcounter";
import Datafetchue from "./component/Datafetchue";
import Datafetchue2 from "./component/Datafetchue2";
import Datafetchue3 from "./component/Datafecthue3";
import Compc1 from "./component/Compc1";

export const urcontext=React.createContext()
export const chncontext=React.createContext()
//import Greet from './component/Greet'; normal import for default export
// import Greetcomponent from './component/Greet'; different name import for default export
function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <Welcome></Welcome>
      <Hello></Hello>
      <Namegreet name="Sharvani" relation="Mother"><button>call amma</button></Namegreet>
      <Namegreet name="Bala" relation="Manager">
        <p>He works on Tekion</p>
      </Namegreet>  */}
      {/* <Message></Message> */}

      {/**here the name="" is the thing seen to be passed by App to the component Namegreet thus inside nameGreet it must be accessed by this.props.name where this point to namegreet and props.name meant as this sent by APP which is name  */}
      {/* <Greetcomponent></Greetcomponent>  default export different name import*/}
      {/* <Counter></Counter> */}
      {/* destructured namegreet call below line */}
      {/* <Namegreet name="Bala" relation="Manager">
        <p>He works on Tekion</p>
      </Namegreet>  */}
      {/* <FunctionClick></FunctionClick>
      <Classclick></Classclick> */}
      {/* <Eventbind></Eventbind> */}
      {/* <Parentcomponent></Parentcomponent> */}
      {/* <Usergreeting></Usergreeting> */}
      {/* <Namelist></Namelist> */}
      {/* <Stylesheet clsname='secondary'></Stylesheet>
      <Inline></Inline> */}
      {/* <h1 className='error'>error by cssstylesheet - appStyles.css</h1>
      <h1 className={styles.success}> success -appStyles.module.css</h1> */}
      {/* <Form></Form> */}
      {/* <LifecycleA/> */}
      {/* <Fragmentdemo></Fragmentdemo> */}
      {/* <Table></Table> */}
      {/* <Parentcomp></Parentcomp> */}
      {/* <Refsdemo></Refsdemo> */}
      {/* <Focusinput></Focusinput> */}
      {/* <FRparentinput></FRparentinput> */}
      {/* <Portaldemo></Portaldemo> */}
      {/* trying to wrap the component which we think could cause an error inside the errorboundary, here our fallback UI is nothing but 'seems like we encountered an error' */}
      {/* <ErrorBoundary><Hero heroname='ironman'></Hero></ErrorBoundary> 
      <ErrorBoundary><Hero heroname='superman'></Hero></ErrorBoundary> 
      <ErrorBoundary>
       <Hero heroname='villain'></Hero>
      </ErrorBoundary> */}
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      <KeyCounter></KeyCounter> */}
      {/* <ClickCounter2></ClickCounter2>
      <HoverCounter2></HoverCounter2>
      <User render={(isloggedin)=> (isloggedin)?"holla":"guest"}></User> */}
      {/* <County
        render={(count, increment) => (
          <ClickCounter2 count={count} increment={increment} />
  )}
      ></County>
      <County
        render={(count, increment) => (
          <HoverCounter2 count={count} increment={increment} />
        )}
      ></County> */}
      {/* step 2 of the context */}
      {/* here we are providing the userprovider of usercontext in app.. so all descendants of app say compc,compe,compf can consume these context value.   value attribute on the userprovider is used to send our desired value down to the descendants */}
      {/* <UserProvider value="Dhanush Holla ">
          <Compc></Compc>
      </UserProvider>
     */}

        {/*react and http requests  */}
        {/* <Postlist></Postlist> */}
        {/* <Postform></Postform> */}

        {/* react hooks */}
        {/* useState */}
        {/* <HookCounter></HookCounter> */}
        {/* <Hookcounter2></Hookcounter2> */}
        {/* <Hookcounter3></Hookcounter3> */}
        {/* <HookCounter4></HookCounter4> */}

        {/* useEffect */}
        {/* <Hookue1></Hookue1> */}
        {/* <Hookue2></Hookue2> */}
        {/* <Hookue3></Hookue3> */}
        {/* <Mousecontainer></Mousecontainer> */}
        {/* <Intervalhookcounter></Intervalhookcounter> */}
        {/* <Datafetchue2></Datafetchue2> */}
        {/* <Datafetchue3></Datafetchue3> */}

        {/* Usecontext hook  we try to consume the provided context value in compe1.js using usecontextHook*/}
        {/* <urcontext.Provider value={"this is eg of usecontext hook"}>
         <chncontext.Provider value={"part 3 video number 60"}>
          <Compc1></Compc1>
         </chncontext.Provider>
       </urcontext.Provider> 
     */}
    </div>
  );
}

export default App;
