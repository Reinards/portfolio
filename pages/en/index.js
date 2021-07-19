import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/navbar/navbar'
import DefaultLayout from '../../layouts/default-layout'
import ContactMeBanner from "../../components/contact-me-banner/contact-me-banner"
import PageHeader from "../../components/page-header/page-header";
import ProjectListItem from '../../components/projects/project-list-item'

import Projects from "../../data/projects.json"

export default function Home() {
  return (
    <DefaultLayout en>
      <Head>
        <title>Project List | reinards.lv</title>
      </Head>

      <div className="main-container">
        
        <PageHeader>Reinards Saulītis</PageHeader>

        {/* Portfolio */}
        {/* <span className="tc pb3 db gray">* Uzspied uz kāda no attēliem, lai uzzinātu par konkrētā projekta gaitu</span> */}
        
        <div id="portfolio-grid">

          {/* ROW Start */}
          <div className="portfolio-row v-gap">

            <div className="portfolio-col">
              <div className="portfolio-item v-gap">
                <ProjectListItem en data={Projects.storysail}/>
              </div>
              <div className="portfolio-item">
                <ProjectListItem en data={Projects.lmg}/>
              </div>
            </div>

            <div className="portfolio-col">
              <div className="portfolio-item portfolio-item--v2">
                <ProjectListItem en data={Projects.vdc}/>
              </div>
            </div>

            <div className="portfolio-col">
              <div className="portfolio-item v-gap">
                <ProjectListItem en data={Projects.rosaella}/>
              </div>
              <div className="portfolio-item">
                <ProjectListItem en data={Projects.chalete}/>
              </div>
            </div>

          </div>
          {/* ROW End */}

          {/* ROW Start */}
          <div className="portfolio-row">

            <div className="portfolio-col">
              <div className="portfolio-item portfolio-item--v2">
                <ProjectListItem en data={Projects.kapellerunams}/>
              </div>
            </div>

            <div className="portfolio-col">
              <div className="portfolio-item">
                <ProjectListItem en data={Projects.tiks}/>
              </div>
              {/* <div className="portfolio-item">
                <ProjectListItem data={Projects.chalete}/>
              </div> */}
            </div>

            <div className="portfolio-col">
              {/* <div className="portfolio-item portfolio-item--v2">
                <ProjectListItem data={Projects.ommmsome}/>
              </div> */}
            </div>

          </div>
          {/* ROW End */}


        </div>

        <ContactMeBanner en/>
      </div>


      {/* Footer */}

    </DefaultLayout>
  )
}
