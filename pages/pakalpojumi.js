import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import Navbar from '../components/navbar/navbar'
import DefaultLayout from '../layouts/default-layout'
import ContactMeBanner from "../components/contact-me-banner/contact-me-banner"
import PageHeader from '../components/page-header/page-header'
import DesignTh from "../public/services-design.jpg"
import WebsiteTh from "../public/services-web.jpg"
import BrandTh from "../public/services-website.jpg"
import VideoTh from "../public/services-video.jpg"

export default function Services() {
  return (
    <DefaultLayout>
      <Head>
        <title>Reinards.lv - Pakalpojumi</title>
      </Head>

      <div className="main-container">

        <PageHeader>Pakalpojumi</PageHeader>

        <Image src={DesignTh} priority placeholder="blur" blurDataURL={DesignTh} layout="responsive" />
        <p className="paragraph">
        <span className="accent b">Grafiskis Dizains</span> - Es varu Tev palīdzēt visos dizaina jautājumos praktiski un konsultāciju formā. Nekad neierobežoju sevi tajā, kādus darbus uzņemos. Pirms es uzsāku strādāt ar klientu, tiek rīkots bezmaksas video zvans vai tikšanās, kuras laikā kopā izrunājam visu par projekta gaitu, nosacījumiem, termiņiem, budžetu un iespējām no manas puses palīdzēt. 
        
        <br/><br/>
        Daži piemēri tam, ko es uzņemos ir:<br/> 
        * Mājaslapas Dizains/ Mobilās Lietotnes Dizains <br/>
        * Vizuālā Brenda Identitāte (Logo, Vizītkarte u.c) <br/>
        * Grafikas Sociālajiem Tīkliem <br/>
        * Plakāti, Etiķetes, Kartes, Katalogi <br/>
        * Vektorgrafikas Ilustrācijas / Ikonas <br/>
        * Foto Rediģēšana
        <br/><br/>

        Pat ja tas, ko meklē, nav šajā sarakstā, droši raksti man, kopā izskatīsim iespējas.
        </p>

        <div className="pb5 db"></div>



        <Image className="mb3" src={BrandTh} priority placeholder="blur" blurDataURL={BrandTh} layout="responsive" />
        <p className="paragraph">
        <span className="accent b">Brendings</span> - Pirms stāstīt par to, kā varu palīdzēt, vēlos precizēt to, kas ir brendings, jo sabiedrībā klejo maldinoši uzskati. Brendings ir tavas attiecības ar klientu, tas ir tas, kādu pozīciju tu esi ieņēmis sava klienta prātā un ko viņš par tevi saka citiem. Tas ir tas, kāda ir tava uzņēmuma personība un kā tu to parādi sabiedrībai. Tas NAV tikai logo!

        <br/><br/>
        Par šo esmu pat uzraksījis veselu rakstu, jo tas ir ļoti psiholoģisks un advancēts process, kuru ne visi spēj novērtēt (tieši visu maldinošo un kļūdaino uzskatu dēļ).<br/><br/>
        Spied šeit, lai lasītu rakstu un iepazītos ar to, kas ir brendings.

        <br/><br/>

        Kā brenda speciālists es Tev varu palīdzēt izveidot brenda stratēģiju (Šī ir tava brenda sirds un dvēsele), izstrādāt vizuālo identitāti un izveidot plānu sociālo tīklu organiskam mārketingam, atbilstoši tava brenda personībai un stratēģijai. Šo visu piedāvāju divos variantos - Individuālu konsultāciju formā kā arī ilgtermiņa projekta formā.

        <br/><br/>
        Individuālas konsultācijas iesaku tikai tad, ja ir konkrēts jautājums vai arī ja Tev ir iespējas pašam strādāt ar brenda būvēšanu. Ja neesi izglītots par brendu vai arī ja tavā uzņēmumā nav neviens, kas Tev palīdzēs, individuālas konsultācijas būs tikai laika un tavu līdzekļu nelietderīga tērēšana, labāk izmantot manu palīdzību. Es parūpēšos par visa brendinga procesa vadīšanu un veiksmīgu brenda būvēšanu.
        </p>

        <div className="pb5 db"></div>

        <Image className="mb3" src={WebsiteTh} priority placeholder="blur" blurDataURL={WebsiteTh} layout="responsive" />
        <p className="paragraph">
        <span className="accent b">Mājaslapu Izstrāde & Analītika</span> - Ar mājaslapu izstrādi nodarbojos jau 6+ gadus. Esmu pazīstams ar to kodu, visdažādākajām tehnoloģijām, iespējām, limitācijām un potenciālām problēmām. Es palīdzēšu Tev saprast, ar ko sākt, kas ir svarīgākais, kur investēt vairāk un kur mazāk līdzekļu. Palīdzēšu gan ar esošu mājaslapu gan vadīt jaunas mājaslapas izstrādi. Galvenais, es pārliecināšos, ka mājaslapa ir tava investīcija nevis tikai izdevums.

        <br/><br/>
        Papildus mājaslapas izstrādei es piedāvāju piesaistīt Google Analytics vai citus analītikas rīkus lietotāju darbību izpētīšanai mājaslapas optimizēšanai. Izpētīsim, kur lietotāji iesprūst, kur pazūd interese un kādu informāciju tie apskata visvairāk.
        </p>

        {/* <div className="pb5 db"></div> */}
{/* 
        <Image className="mb3" src={VideoTh} priority placeholder="blur" blurDataURL={VideoTh} layout="responsive" />
        <p className="paragraph">
        <span className="accent b">Video Rediģēšana</span> - Varu Tev palīdzēt gan ar nelielu video apstrādi sociālajiem tīkliem gan apstrādāt garākus video projektiem, konkursiem, mājaslapai un pat mūzikas video.
        </p> */}

        <ContactMeBanner/>
      </div>


      {/* Footer */}

    </DefaultLayout>
  )
}
