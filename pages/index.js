import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="overflow-h">
      <Head>
        <title>Reinards.lv - Sākumlapa</title>
      </Head>

      <div className="index-flex vh-100-l">
        
        <div className="w-100 w-50-l vh-50 vh-100-l relative">
          <div className="vh-50 vh-100-l flex items-center justify-center">
            <div>
              <span className="f4 f3-ns fw-300">Ar ko varu Tev palīdzēt?</span>
              <h1 className="header-1">Reinards Jānis <br/> Saulītis</h1>
              {/* <div className="flex"> */}
                {/* <Link href="/">
                  <a className="f4 link black o-90 accent-hover">Par mani</a>
                </Link>
                <span className="ph2 f4 o-90">//</span> */}
              {/* </div> */}
              <a href="mailto:reinardssaulitis@gmail.com" className="f5 f4-ns link index-email-banner">reinardssaulitis@gmail.com</a>
            </div>
          </div>
          {/* <a href="emailto:reinardssaulitis@gmail.com" className="index-email-banner pv4 ph5 f4 link white">reinardssaulitis@gmail.com</a> */}
        </div>

        <div className="w-100 w-50-l">
          <div className="flex flex-wrap ">
            <Link href="dizains">
              <a className="w-100 w-50-m w-50-l w-50-xl vh-50 index-service-block isb-bg1">
                <h2 className="">Grafiskais Dizains, UX, Māksla</h2>
              </a>
            </Link>
            <Link href="majaslapas">
              <a className="w-100 w-50-m w-50-l w-50-xl vh-50 index-service-block isb-bg2">
                <h2 className="">Mājaslapu Optimizācija</h2>
              </a>
            </Link>
            <Link href="brends">
              <a className="w-100 w-50-m w-50-l w-50-xl vh-50 index-service-block isb-bg3">
                <h2 className="">Brenda Stratēģija un Tēls</h2>
              </a>
            </Link>
            <Link href="socialie-tikli">
              <a className="w-100 w-50-m w-50-l w-50-xl vh-50 index-service-block isb-bg4">
                <h2 className="">Sociālie tīkli un saturs</h2>
              </a>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
