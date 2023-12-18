import { Component } from "react";
import hiragana from "../../images/hiragana.jpg";
import katakana from "../../images/katakana.jpg";
import dakuten from "../../images/hiragana-dakuten.jpg";
import css from "./Kana.module.css";

export class Kana extends Component {
    render = () => (
        <div className={css.container}>
            <img width="640" className={css.img} alt="hiragana" src={hiragana}></img>
            <img width="640" className={css.img} alt="katakana" src={katakana}></img>
            <img width="640" className={css.img} alt="dakuten" src={dakuten}></img>
        </div>
    )
}