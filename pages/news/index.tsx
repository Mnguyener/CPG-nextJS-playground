//our-domain.com/news
import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
    return <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href="/news/article-1">Article 1</Link></li>
        <li><Link href="/news/article-2">Article 2</Link></li>
      </ul>
    </Fragment>
  }
  
  
export default NewsPage;