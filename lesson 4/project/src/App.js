import logo from './logo.svg';
import {inputComponent, inputComponentArr} from './otherJsFile/inputComponent.js';
import {socialCard, socialCardArr} from './otherJsFile/socialCard.js';
import {textComponent, textComponentArr} from './otherJsFile/textComponent.js';
import './App.css';

const App = () => {
	return (
    <div className = "card">
      <div className = "card_header">
        Dang nhap
      </div>
      <div className = "card_body">
        <div className = "form">
          {
            inputComponentArr.map((item) => inputComponent(item))
          }
        </div>
        <div className="div_btn">
          <button type="button" className = "btn">
            Dang nhap
          </button>
        </div>
        <div className="text_components">
          {
            textComponentArr.map((item)=>textComponent(item))
          }
        </div>
        <div className="social_cards">
          {
            socialCardArr.map((item) => socialCard(item))
          }
        </div>
      </div>
    </div>
  )
}


export default App;
