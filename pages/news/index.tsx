//our-domain.com/news
import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
    return <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href="/news/article-1">Article 1</Link></li>
        <li>Article 2</li>
      </ul>
    </Fragment>
  }
  
  
export default NewsPage;