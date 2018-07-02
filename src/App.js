import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    word: '',
    length: 0
  };

  textChangedHandler = (event) => {
    // const words = this.state.words;
    const word = event.target.value;
    const length = event.target.value.length;
    // const word = { 
    //   id: 0, 
    //   word: event.target.value, 
    //   length: event.target.value.length };

    // words.push(word);

    this.setState({
      word: word,
      length: length
      // wordCount: this.state.wordCount++
    })
  };

  render() {
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
            render a list - one component per character
            pass character as a prop
            chars are in boxes
            render the list in the app component
            when char clicked - remove char from input text
            affect text in the input field - bound
          </li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
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
        <p>{this.state.length}</p>
        <Validation length={this.state.length} />
        <div>
          {[...this.state.word].map((char) => {
            return (
              <Char char={char}
                key={} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
