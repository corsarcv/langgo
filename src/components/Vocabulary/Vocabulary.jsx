import { Component } from "react";
import css from './Vocabulary.module.css'
import { Flipcard } from "components/FlipCard/FlipCard";
import { DataUtilities } from "utilities/dataUtilities";

export class Vocabulary extends Component {

    constructor(props) {
        super(props);
        this.dataUtilities = new DataUtilities();
      }

    state = {
        topic: null,
        language: null,
        word: null,
        hasError: false
    }
    onTopicChanged = (e) => {
        let newTopic = null;
        if (e.target.selectedIndex === 0)
            newTopic = null;
        else
            newTopic = e.target.options[e.target.selectedIndex].value

        this.setState({
            topic: newTopic,
            hasError: false
        }, this.onNext);
    }

    onDirectionChanged = (e) => {
        this.setState({
            language: e.target.options[e.target.selectedIndex].value,
            hasError: false
        }, this.onNext);
    }

    onNext = () => {
        let iterCount = 0;
        const maxIterCount = 100;
        let newWord = null;
        do {
            iterCount += 1;
            if (iterCount > maxIterCount)
                break;
            newWord = this.dataUtilities.getRandomWord(this.state.topic, this.state.language);
        } while (newWord === this.state.word && newWord)
        this.setState({word: newWord});
    }
    componentDidMount = () => {
        const defaultLang =  DataUtilities.getAllLanguages()[0].name;
        this.setState({ 
            language: defaultLang,
            word: this.dataUtilities.getRandomWord(null, defaultLang )
         });
      }

      componentDidCatch(error, info) {
       // Якщо метод був викликаний, отже, є помилка!
       console.log("Error", error, info);
       this.setState({hasError: true});
      }
     
     
    render = () => {
        if (this.state.hasError) {
            return <h1>Something went wrong, please change criteria and try again</h1>;
        }
        return (
        <div>
            <div className={css.options}>
                <select onChange={this.onTopicChanged} name="topic" id="topic">
                <option>All Topics</option>
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
}