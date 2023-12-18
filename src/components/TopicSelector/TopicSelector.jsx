import { Vocabulary } from 'components/Exercise/Vocabulary';
import css from './TopicSelector.module.css'
import { Component } from "react";
import { Grammar } from 'components/Exercise/Grammar';
import { Kana } from 'components/Kana/Kana';
import { Kanji } from 'components/Exercise/Kanji';

export class TopicSelector extends Component{
    state = {
        selectedTopic: null
    }

    onTopicSelected = (e) => {
        if (this.state.selectedTopic)
            document.querySelector(`#${this.state.selectedTopic}`).classList.remove(css.selected);
        this.setState({selectedTopic: e.target.id});
        e.target.classList.add(css.selected);
    }

    render = () => (
        <div className={css.main}>
            <ul className={css.topics}>
                <li id="vocabulary" className={css.topicSelector} onClick={this.onTopicSelected}>Vocabulary</li>
                <li id="grammar" className={css.topicSelector} onClick={this.onTopicSelected}>Grammar</li>
                <li id="kana" className={css.topicSelector} onClick={this.onTopicSelected}>Kana</li>
                <li id="kanji" className={css.topicSelector} onClick={this.onTopicSelected}>Kanji</li>
            </ul>
            {this.state.selectedTopic==="vocabulary" && <Vocabulary/>}
            {this.state.selectedTopic==="grammar" && <Grammar/>}
            {this.state.selectedTopic==="kana" && <Kana/>}
            {this.state.selectedTopic==="kanji" && <Kanji/>}
        </div>
    )
}