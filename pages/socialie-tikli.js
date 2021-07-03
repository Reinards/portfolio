import Head from 'next/head'
import BackButton from '../components/back-button/back-button'
import ContactMeBanner from '../components/contact-me-banner/contact-me-banner'
import ImgPost from '../components/img-post/img-post'

import Data from '../data/services.json';

let PostData = Object.keys(Data.media.posts).map((item, i)=>{
    let data = Data.media.posts[item];
    return (
        <div key={i} className="w-100 w-third-ns lh-0">
            <ImgPost thumbnail={data.thumbnail} fullRes={data.fullRes} title={data.title} desc={data.desc}/>
        </div>
    )
});

export default function Home() {
  return (
    <div>
        <Head>
            <title>Reinards.lv - {Data.media.pageTitle}</title>
        </Head>
    
        <div className="main-container">
            
            <BackButton/>
            <div className="header">
                <h1 className="header-1">{Data.media.title}</h1>
                <p className="f4">{Data.media.pageDescLong}</p>
            </div>

            <div className="post-grid flex flex-wrap mt4 mt6-ns">
                {PostData}
            </div>

            <ContactMeBanner/>
            
        </div>

    </div>
  )
}
