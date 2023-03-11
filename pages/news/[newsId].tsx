import { useRouter } from 'next/router'; // exposes router specific functionality
//our-domain.com/news/anything-important
// DYNAMIC ROUTING
function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;
    // send a request to the backend API
    // we'll use it to fetch some news in this case
    // fetch new item with newsId
    console.log(router.query.newsId) // use the file name between square brackets
    return <h1>The Details for the News</h1>
  }
  
  
export default DetailPage;