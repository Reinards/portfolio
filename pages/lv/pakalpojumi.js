import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import Navbar from '../../components/navbar/navbar'
import DefaultLayout from '../../layouts/default-layout'
import ContactMeBanner from "../../components/contact-me-banner/contact-me-banner"
import PageHeader from '../../components/page-header/page-header'
import DesignTh from "/public/design.svg"
import AlbumTh from "/public/album.svg"
import ConsultingTh from "/public/consulting.svg"
import WebTh from "/public/web.svg"
import BrandTh from "/public/branding.svg"
import SocialsTh from "/public/socials.svg"

export default function Services() {
  return (
    <DefaultLayout>
      <Head>
        <title>Pakalpojumi | reinards.lv</title>
      </Head>

      <div className="main-container">

        <PageHeader>Pakalpojumi</PageHeader>

        <div className="dn db-m db-l" style={{
            marginTop: "-90px"
        }}></div>

        <div className="dn-m dn-l" style={{
            marginTop: "-60px"
        }}></div>

        <div className="flex flex-wrap">
          <div className="w-50 w-third-ns">
            <div className="pa2 tc">
              <Image src={DesignTh} priority layout="responsive" />
              <h2 className="f5 f4-ns mb0 mb3-ns">Grafiskais Dizains & Radoši Projekti</h2>
            </div>
          </div>
          <div className="w-50 w-third-ns">
            <div className="pa2 tc">
              <Image src={AlbumTh} priority layout="responsive" />
              <h2 className="f5 f4-ns mb0 mb3-ns">Albuma Artwork</h2>
            </div>
          </div>
          <div className="w-50 w-third-ns">
            <div className="pa2 tc">
              <Image src={BrandTh} priority layout="responsive" />
              <h2 className="f5 f4-ns mb0 mb3-ns">Brenda Būvēšana & Menedžments</h2>
            </div>
          </div>
          <div className="w-50 w-third-ns">
            <div className="pa2 tc">
              <Image src={SocialsTh} priority layout="responsive" />
              <h2 className="f5 f4-ns">Organisks Mārketings Soc. Tīklos</h2>
            </div>
          </div>
          <div className="w-50 w-third-ns">
            <div className="pa2 tc">
              <Image src={ConsultingTh} priority layout="responsive" />
              <h2 className="f5 f4-ns">Brenda Konsultācijas</h2>
            </div>
          </div>
          <div className="w-50 w-third-ns">
            <div className="pa2 tc">
              <Image src={WebTh} prioritylayout="responsive" />
              <h2 className="f5 f4-ns">Mājaslapas Optimizācija & Analītika</h2>
            </div>
          </div>
        </div>

        <div className="dn db-ns" style={{
            marginBottom: "-50px"
        }}></div>

        <div className="dn-ns" style={{
            marginBottom: "-20px"
        }}></div>

        <ContactMeBanner/>
      </div>


      {/* Footer */}

    </DefaultLayout>
  )
}
