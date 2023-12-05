import { Excercise } from "./Exercise/Excercise";
import { Header } from "./Header/Header";
import { Section } from "./Section/Section";
import { TopicSelector } from "./TopicSelector/TopicSelector";
import japanese from '../data/japanese.json'
import { Component } from "react";

export class App extends Component{

  state = {
    
  }

  render = () => {
    return (
      <div>
        <Section>
          <Header/>
        </Section>
        <Section>
          <TopicSelector/>
        </Section>
        <Section>
          <Excercise/>
        </Section>
      </div>
    );
  };
}
