import css from './FlipCard.module.css'

export const Flipcard = (props) =>
    (
    <div className={css["flip-card"]}>
        <div className={css["flip-card-inner"]}>
            <div className={css["flip-card-front"]}>
                <h2>私</h2> 
            </div>
            <div className={css["flip-card-back"]}>
                <h3>Kana: わたし</h3>
                <h3>Romaji: Watashi</h3>
                <h3>English: I</h3> 
            </div>
        </div>
    </div>
    )