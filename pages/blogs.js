import Head from 'next/head'
import PostListItem from '../components/blog/post-list-item'
import DefaultLayout from '../layouts/default-layout'
import ContactMeBanner from "../components/contact-me-banner/contact-me-banner"
import PageHeader from '../components/page-header/page-header'
import PostData from "../data/posts.json";

let PostDataHtml = Object.keys(PostData).map((item, i) => {
  
  if(i < Object.keys(PostData).length-1) {
    return (
      <PostListItem
        key={i}
        hasBottomPadding
        href={"/blogs/"+PostData[item]['url']}
        title={PostData[item]['title']}>
        {PostData[item]['intro']}
      </PostListItem>
    )
  } else {
    return (
      <PostListItem
        key={i}
        href={"/blogs/"+PostData[item]['url']}
        title={PostData[item]['title']}>
        {PostData[item]['intro']}
      </PostListItem>
    )
  }
  
}
)

export default function Blog() {
  return (
    <DefaultLayout>
      <Head>
        <title>Reinards.lv - Blogs</title>
      </Head>

      <div className="main-container">
        
        <PageHeader>Blogs</PageHeader>

        {PostDataHtml}

        <ContactMeBanner/>
      </div>


      {/* Footer */}

    </DefaultLayout>
  )
}
