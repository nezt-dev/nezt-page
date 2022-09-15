import { FC } from "react";
import './Section.css'

interface Props {
    title?: string;
    children: JSX.Element | JSX.Element [];
    styles?: {};
    classNames?: string;
}

export const Section: FC<Props> = ({ title, children, styles, classNames = '' }) => {
    return (
        <section style={ styles } className={ `section__main ${ classNames }` }>
            { title && <p className='title'>{ title }</p> }
            { children }
        </section>
    )
}