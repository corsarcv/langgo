import css from './FlipCard.module.css'

export const Flipcard = ({word, language, onNext}) => {
    if (!word)
        return (<h2>No results... Please change search criteria.</h2>)
    const wordItems = Object.entries(word.languages);
    return (
    <div className={css["flipcard-container"]}>
        <div className={css["flip-card"]}>
            <div className={css["flip-card-inner"]}>
                <div className={css["flip-card-front"]}>
                    <h2 className={css["flip-card-front-word"]}>
                        {word.languages[language]}
                    </h2> 
                    <div className={css["flip-card-front-topics"]}>
                        {word.topics.join(" | ")}
                    </div>
                </div>
                <div className={css["flip-card-back"]}>
                    <table>
                        <tbody>
                        {wordItems.map(([lang, display]) => 
                            lang !== language && (
                                <tr key={lang} className={css["flip-back-row"]}>
                                    <td className={css["flip-back-column"]}>
                                        <h3>{lang}</h3>
                                    </td>
                                    <td className={css["flip-back-column"]}>
                                        <h3>{display}</h3>
                                    </td>
                                </tr>)
                        )}
                        </tbody>
                    </table>
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