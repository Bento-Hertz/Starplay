import IContent from 'interfaces/IContent';
import Content from './Content/content';
import style from './contents.module.scss';

interface Props {
    category: string;
    contentList: IContent[];
}

export default function Contents(props: Props) {

    const {category, contentList} = props;

    return (
        <section className={style.container}>
            <h1>{category}</h1>
            <div className={style.contents}>
                {contentList.map(content => 
                    <Content key={content.title} {...content}/>
                )}
            </div>
        </section>
    );
}