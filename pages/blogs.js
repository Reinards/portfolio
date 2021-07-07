import Head from 'next/head'
import PostListItem from '../components/blog/post-list-item'
import DefaultLayout from '../layouts/default-layout'
import ContactMeBanner from "../components/contact-me-banner/contact-me-banner"
import PageHeader from '../components/page-header/page-header'

export default function Blog() {
  return (
    <DefaultLayout>
      <Head>
        <title>Reinards.lv - Blogs</title>
      </Head>

      <div className="main-container">
        
        <PageHeader>Blogs</PageHeader>

        <PostListItem
            hasBottomPadding
            href="blogs/lmgroup-brendings"
            title="LM Group Buve Brendinga Process">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper quam est, eget accumsan purus facilisis non. Nulla a euismod magna. Integer mattis rutrum metus
        </PostListItem>

        <PostListItem
            hasBottomPadding
            href="blogs/lmgroup-brendings"
            title="LM Group Buve Brendinga Process">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper quam est, eget accumsan purus facilisis non. Nulla a euismod magna. Integer mattis rutrum metus
        </PostListItem>

        <PostListItem
            hasBottomPadding
            href="blogs/lmgroup-brendings"
            title="LM Group Buve Brendinga Process">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper quam est, eget accumsan purus facilisis non. Nulla a euismod magna. Integer mattis rutrum metus
        </PostListItem>

        <PostListItem
            hasBottomPadding
            href="lmgroup-brendings"
            title="LM Group Buve Brendinga Process">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper quam est, eget accumsan purus facilisis non. Nulla a euismod magna. Integer mattis rutrum metus
        </PostListItem>

        <PostListItem
            href="lmgroup-brendings"
            title="LM Group Buve Brendinga Process">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper quam est, eget accumsan purus facilisis non. Nulla a euismod magna. Integer mattis rutrum metus
        </PostListItem>


        <ContactMeBanner/>
      </div>


      {/* Footer */}

    </DefaultLayout>
  )
}
