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
        <span className="accent b">Grafiskis Dizains, UI, UX</span> - Dizains ir valoda, caur kuru iespējams izpaust visdažādākās idejas, norādīt uz darbību vai uzdot jautājumu. Labi pārdomāts dizains ir kā mūzika tavām acīm un smadzenēm. Neviens negrib divas stundas meklēt, kā atvērt navigāciju. Manis piedāvātie pakalpojumi iedalās 3 dažādās apakškategorijās - <b>UI dizains</b> jeb interfeiss, <b>UX dizains</b> jeb lietotāja pieredze, <b>grafiskais dizains</b> (viss pārējais). 
        <br/><br/>
        UI Dizains - Tas ietver gan mājaslapas dizainu, gan mobilās lietotnes. Tas ir jebkas, kam būs tieša saskarne ar lietotāju digitālā platformā. Sākot ar pogām un beidzot ar pilnas mājaslapas dizaina istrādi. Jebkurš spēj izveidot "dizainu", bet izveidot dizainu, kas ir proporcionāls izmēros, kur krāsas un attēli ir harmonijā viens ar otru, kur tekstu var salasīt un kas strādā gan uz datoriem gan mobilajām ierīcēm ir nepieciešams speciālists.

        <br/><br/>
        UX Dizains - Skaists dizains ne vienmēr ir funkcionāls. UX dizaineri pārliecinās par to, ka mājaslapa ir ērti lietojama visiem potenciālajiem klientiem. Tie pārliecinās, ka dizains strādā gan tumšās telpās, gan tiešā saules apgaismojumā un ka arī cilvēki ar invaliditāti spēj izmantot mājaslapu. UX dizains bieži vien tiek pastumts malā, bet tas rezultējas tikai ar aizkaitinātiem un apjukušiem klientiem.

        <br/><br/>
        Cits - Palīdzēšu tev ar logo, vizītkartes, etiķešu, iepakojuma, ilustrācijas izveidi un pat apstrādāt video. Es sevi neierobežoju ar konkrēta veida darbu. Ja kaut kas izklausās interesanti un kaut cik nozīmīgi, esmu gatavs investēt savu laiku, lai atrisinātu tavu radošo problēmu.
        </p>

        <div className="pb5 db"></div>

        <Image className="mb3" src={WebsiteTh} priority placeholder="blur" blurDataURL={WebsiteTh} layout="responsive" />
        <p className="paragraph">
        <span className="accent b">Mājaslapu Optimizācija</span> - Ar mājaslapu izstrādi nodarbojos jau 6+ gadus. Esmu pazīstams ar to kodu, visdažādākajām tehnoloģijām un bibliotēkām, iespējām, limitācijām un potenciālām problēmām. Es palīdzēšu Tev saprast, ar ko sākt, kas ir svarīgākais, kur investēt vairāk un kur mazāk līdzekļu. Palīdzēšu gan ar esošu mājaslapu gan vadīt jaunas mājaslapas izstrādi. Galvenais, es pārliecināšos, ka mājaslapa ir tava investīcija nevis tikai izdevums.
        </p>

        <div className="pb5 db"></div>

        <Image className="mb3" src={BrandTh} priority placeholder="blur" blurDataURL={BrandTh} layout="responsive" />
        <p className="paragraph">
        <span className="accent b">Pilna Spektra Brendings</span> - Brends nav tikai logo. Brends nav arī mārketings. Brends ir tavas attiecības ar taviem klientiem. Tas ir kā viņi tevi savos prātos ir "reģistrējuši" un ko par tevi saka citiem. Es strādāju ar brendiem, lai izveidotu stratēģiju, kuras mērķis ir klientu prātos radīt pareizu attēlu par to, kas tu esi, ar ko nodarbojies un kādēļ viņiem izvēlēties tevi nevis tavus konkurentus. Brends ir tas, kas galu galā nosaka vai klients izvēlēsies tevi vai kādu citu. Pat ja tev ir pasaulē labākais produkts, nepareiza komunikācija to cilvēku acīs var padarīt par parastu produktu.

        <br/><br/>
        Piedāvāju gan individuālas konsultācijas gan ilgtermiņa sadarbību, kuras laikā uzņemos visu atbildību par tava brenda izstrādi sākot ar stratēģiju un identitātes izstrādi, beidzot ar sociālajiem tīkliem, to saturu un apmācībām brenda izstrādē.
        </p>

        <ContactMeBanner/>
      </div>


      {/* Footer */}

    </DefaultLayout>
  )
}
