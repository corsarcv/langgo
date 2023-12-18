import { Component } from "react";
import hiragana from "../../images/hiragana.jpg";
import katakana from "../../images/katakana.jpg";
import dakuten from "../../images/hiragana-dakuten.jpg";
import css from "./Kana.module.css";

export class Kana extends Component {
    render = () => (
        <div className={css.container}>
            <img width="640" className={css.img} src={hiragana}></img>
            <img width="640" className={css.img} src={katakana}></img>
            <img width="640" className={css.img} src={dakuten}></img>
        </div>
    )
}