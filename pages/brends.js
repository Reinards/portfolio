import Head from 'next/head'
import BackButton from '../components/back-button/back-button'
import ContactMeBanner from '../components/contact-me-banner/contact-me-banner'
import ImgPost from '../components/img-post/img-post'

import Data from '../data/services.json';

let PostData = Object.keys(Data.brand.posts).map((item, i)=>{
    let data = Data.brand.posts[item];
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
            <title>Reinards.lv - {Data.brand.pageTitle}</title>
        </Head>
    
        <div className="main-container">
            
            <BackButton/>
            <div className="header">
                <h1 className="header-1">{Data.brand.title}</h1>
                <p className="f4">{Data.brand.pageDescLong}</p>
            </div>

            <div className="post-grid flex flex-wrap mt4 mt6-ns">
                {PostData}
            </div>

            <ContactMeBanner/>
            
        </div>

    </div>
  )
}
