import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    word: ''
  };

  textChangedHandler = (event) => {
    const word = event.target.value;

    this.setState({
      word: word
    })
  };

  removeCharListener = (index) => {
    let wordArray = this.state.word.split('');
    wordArray = [...this.state.word];
    wordArray.splice(index, 1);

    const word = wordArray.join('');

    this.setState({
      word: word
    })
  };

  render() {
    let wordArray = [...this.state.word]

    let charList = <div>
      {wordArray.map((char, index) => {
        return (
          <Char char={char}
            key={index}
            click={() => this.removeCharListener(index)} />
        )
      })}
    </div>

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
            create input DONE
            add event listener DONE
            create a change handler DONE
            probably need state access DONE
            nothing conditional DONE
          </li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop
            create new ValidationComponent DONE
            receives text length as a prop DONE
            store in state DONE
          </li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
            work inside ValidationComponent DONE
            either output text too short or long enough DONE
            won't need to manage state DONE
            create a p inside ValidationComponent
          </li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
            create CharComponent as inline box - style DONE
          </li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
            render a list - one component per character DONE
            pass character as a prop DONE
            chars are in boxes DONE
            render the list in the app component DONE
            when char clicked - remove char from input text DONE
            affect text in the input field - bound DONE
          </li>
          <li>When you click a CharComponent, it should be removed from the entered text. DONE</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!
          map and splice not available to array of chars as string
          split method on text passing empty strings
          make a string an array of characters
          splice to join - turns it back into text
        </p>
        <input
          type="text"
          value={this.state.word}
          onChange={event => this.textChangedHandler(event)} />
        <p>{this.state.word.length}</p>
        <Validation length={this.state.word.length} />
        {charList}
      </div>
    );
  }
}

export default App;
