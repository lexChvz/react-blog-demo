import PropTypes from 'prop-types';
import Preview from './Preview';
import List from './List';
import { sliceArray } from '../utils/helpers/common';

export default function News({ articles, CustomTag, numberOfArticles }) {
  const slicedArticles = articles.length > 0 ? sliceArray(articles, 0, numberOfArticles) : [];
  let className = 'col-lg-4';

  if (CustomTag === Preview || CustomTag === List) {
    className = 'col-lg-12';
  }

  return (
    <div className='row'>
      {slicedArticles.map((article, i) => {
        return (
          <div className={className} key={i}>
            <CustomTag {...article} />
          </div>
        );
      })}
    </div>
  );
}

News.propTypes = {
  articles: PropTypes.array,
  CustomTag: PropTypes.func,
  numberOfArticles: PropTypes.number,
};
