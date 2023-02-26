import { useRouter } from 'next/router'; // exposes router specific functionality
//our-domain.com/news/anything-important
// DYNAMIC ROUTING
function DetailPage() {
    const router = useRouter();

    console.log(router.query.newsId) // use the file name between square brackets
    return <h1>The Details for the News</h1>
  }
  
  
export default DetailPage;