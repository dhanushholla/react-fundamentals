import logo from './logo.svg';
import './App.css';
import Message from './component/message';
import Namegreet from './component/namegreet';
import Hello from './component/hello';
import Welcome from './component/welcome';
import {Greet} from './component/Greet';//name based export and import
import Counter from './component/counter';
import FunctionClick from './component/functionclick';
import Classclick from './component/class_click';
import Eventbind from './component/eventbind';
import Parentcomponent from './component/parentcomponent';
import Usergreeting from './component/usergreeting';
import Namelist from './component/Namelist';
import Stylesheet from './component/Stylesheet';
import Inline from './component/inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './component/form';
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
      <Form></Form>
    </div>
  );
}

export default App;
