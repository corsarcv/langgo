import css from './FlipCard.module.css'

export const Flipcard = ({word, language, onNext}) => {
    console.log('Flip for', word, language);
    const wordItems = Object.entries(word);
    return (
    <div className={css["flipcard-container"]}>
        <div className={css["flip-card"]}>
            <div className={css["flip-card-inner"]}>
                <div className={css["flip-card-front"]}>
                    <h2>{word[language]}</h2> 
                </div>
                <div className={css["flip-card-back"]}>
                    <ul>
                        {wordItems.map(([lang, display]) => 
                            lang !== language && (
                                <li>
                                    <h3 className={css["flip-back-word"]} key={lang}>{lang}: {display}</h3>
                                </li>)
                        )}
                    </ul>
                </div>
            </div>
           
        </div>
        <div onClick={onNext} className={css.r_wrap}>
                <div className={css.b_round}></div>
                    <div className={css.s_round}/>
                    <div className={css.s_arrow}></div>
                    
            </div>
                {/* <div className={css.arrow} onClick={onNext}>
                    <span></span>
                    <span></span>
                    <span></span>
                 </div> */}
    </div>
    )
                }