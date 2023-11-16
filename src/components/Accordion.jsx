import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';
import { sliceArray } from '../utils/helpers/common';
import '../assets/styles/Accordion.css';

export default function Accordion({ numberOfArticles, articles }) {
  const slicedArticles = articles.length > 0 ? sliceArray(articles, 0, numberOfArticles) : [];
  return (
    <div className='Accordion accordion' id='accordionExample'>
      {slicedArticles.map((article, i) => {
        return <AccordionItem key={i} {...article} id={`heading${i}`} target={`collapse${i}`} />;
      })}
    </div>
  );
}

Accordion.propTypes = {
  numberOfArticles: PropTypes.number,
  articles: PropTypes.array,
};
