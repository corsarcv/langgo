import css from './Section.module.css'

export const Section = ({title, children}) =>(
    <div class={css.section}>
        {title && (<h2>{title}</h2>)}
        <div>{children}</div>
    </div>
)
