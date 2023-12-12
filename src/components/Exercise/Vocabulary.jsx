import { Component } from "react";
import css from './Excercise.module.css'
import { Flipcard } from "components/FlipCard/FlipCard";
import { DataUtilities } from "utilities/dataUtilities";

export class Vocabulary extends Component {
    state = {
        topic: 'all',
        language: DataUtilities.getAllLanguages()[0].name,
        word: DataUtilities.getRandomWord(null)
    }
    onTopicChanged = (e) => {
        console.log('=>Prev:', this.state.topic);
        console.log('Setting topic', e.target.options[e.target.selectedIndex].value)
        this.setState({topic: e.target.options[e.target.selectedIndex].value});
    }

    onDirectionChanged = (e) => {
        console.log('=>Prev:', this.state.language);
        console.log('Setting language', e.target.options[e.target.selectedIndex].value);
        this.setState({language: e.target.options[e.target.selectedIndex].value});
    }

    onNext = () => {
        let iterCount = 0;
        const maxIterCount = 100;
        let newWord = null;
        do {
            iterCount += 1;
            if (iterCount > maxIterCount)
                break;
            newWord = DataUtilities.getRandomWord(this.state.topic);
        } while (newWord === this.state.word)
        this.setState({word: newWord});
    }
    render = () => (
        <div>
            <div className={css.options}>
                <select onChange={this.onTopicChanged} name="topic" id="topic">
                <option value="all">All Topics</option>
                    {DataUtilities.getAllTopics().map(topic=>(
                        <option key={topic} value={topic}>{topic}</option>
                    ))}
                </select>
                <select onChange={this.onDirectionChanged} name="direction" id="direction">
                    {DataUtilities.getAllLanguages().map(lang => (
                         <option key={lang.name} value={lang.name}>{lang.display}</option>
                    ))}
                </select>
            </div>
            <Flipcard word={this.state.word} language={this.state.language} onNext={this.onNext}/>     
        </div>
    )
}