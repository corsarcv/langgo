import { Component } from "react";
import css from './Excercise.module.css'
import { Flipcard } from "components/FlipCard/FlipCard";

export class Vocabulary extends Component {
    state = {
        topic: 'all',
        direction: 'japanese'
    }
    onTopicChanged = (e) => {
        this.setState({topic: e.target.options[e.selectedIndex]});
    }

    onDirectionChanged = (e) => {
        this.setState({direction: e.target.options[e.selectedIndex]});
    }
    render = () => (
        <div>
            <div className={css.options}>
                <select onChange={this.onTopicChanged} name="topic" id="topic">
                    <option value="all">All Topics</option>
                    <option value="verbs">Verbs</option>
                    <option value="greetings">Greatings</option>
                    <option value="travel">Travel</option>
                    <option value="resturant">Restaurant</option>
                    <option value="time">Time</option>
                    <option value="directions">Directions</option>
                </select>
                <select onChange={this.onDirectionChanged} name="direction" id="direction">
                    <option value="japanese">日本語 - English</option>
                    <option value="english">English - 日本語</option>
                    <option value="romaji">Romaji - English</option>
                    <option value="kanji">漢字 - English</option>
                </select>
            </div>
            <Flipcard/>     
        </div>
    )
}