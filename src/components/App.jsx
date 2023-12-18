import { Header } from "./Header/Header";
import { Section } from "./Section/Section";
import { TopicSelector } from "./TopicSelector/TopicSelector";
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
      </div>
    );
  };
}
