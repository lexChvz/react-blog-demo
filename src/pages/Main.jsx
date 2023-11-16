import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Thumbnail from '../components/Thumbnail';
import List from '../components/List';
import Card from '../components/Card';
import Preview from '../components/Preview';
import Accordion from '../components/Accordion';
import News from '../components/News';

import { fetchArticles } from '../services/fetchArticles';

import '../assets/styles/pages/Main.css';

export default function Main() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles('https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json', setArticles);
  }, []);

  return (
    <main className='App-content'>
      <section className='Section'>
        <News articles={articles} CustomTag={Thumbnail} numberOfArticles={6} />
      </section>

      <section className='Section row'>
        <div className='col-lg-8'>
          <Header />
          <News articles={articles} CustomTag={Thumbnail} numberOfArticles={6} />
        </div>
        <div className='col-lg-4'>
          <div className='row'>
            <div className='col-lg-12'>
              <Header />
            </div>
            <ul className='list-group-flush'>
              <News articles={articles} CustomTag={List} numberOfArticles={5} />
            </ul>
          </div>
        </div>
      </section>
      <section className='Section row'>
        <div className='col-lg-8'>
          <div className='row'>
            <div className='col-lg-12'>
              <Header subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, nihil corrupti, ipsum placeat culpa vero sunt dolorem dolores accusamus' />
            </div>
            <News articles={articles} CustomTag={Card} numberOfArticles={6} />
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='row'>
            <div className='col-lg-12'>
              <Header />
            </div>
            <News articles={articles} CustomTag={Preview} numberOfArticles={6} />
          </div>
        </div>
      </section>
      <section className='Section row'>
        <div className='col-lg-12'>
          <Header />
        </div>
        <div className='d-block d-lg-none'>
          <Accordion articles={articles} numberOfArticles={3} />
        </div>
        <div className='d-none d-lg-block col-lg-12'>
          <News articles={articles} CustomTag={List} numberOfArticles={6} />
        </div>
      </section>
    </main>
  );
}
