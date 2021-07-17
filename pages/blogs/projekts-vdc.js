import BlogLayout from '../../layouts/blog-layout'
import P from "../../components/blog/p"
import H2 from "../../components/blog/h2"
import Image from "next/image"

export default function Blog() {
  return (
    <BlogLayout
    metaTitle="Projekts Veģetatīvās Distonijas Centrs | reinards.lv"
    title="Projekts Veģetatīvās Distonijas Centrs">

        <Image src="/projects/vdc/vdc-1.png" layout="responsive" width="1920" height="1280" placeholder="blur" blurDataURL="/projects/vdc/vdc-1.png" />
        <Image src="/projects/vdc/vdc-5.png" layout="responsive" width="1920" height="800" placeholder="blur" blurDataURL="/projects/vdc/vdc-5.png" />

        <P>
          Veģetatīvās Distonijas Centrs ir viens no labākajiem piemēriem citiem uzņēmumiem, ja runājam par mājaslapas izveidi. VDC savu mājaslapu ir pārveidojuši vairāk kā 3 reizes pēdējo 4 gadu laikā. Kādēļ? Tādēļ ka mājaslapa visu laiku tiek pielāgota, lai labāk rezonētu ar klientiem. Tiek veiktas aptaujas un ievāktas atsauksmes par to, cik viegli vai sarežģīti klientam ir izmantot mājaslapu.
          
          <br/><br/>
          
          Esmu piedalījies katrā no šīm pārveides reizēm un varu teikt, ka pašreizējā versija tik tiešām atspoguļo VDC vislabāk. Gan krāsu izvēle, gan viegli pārskatāmais dizains rada mierīgu atmosfēru, kas šī uzņēmuma klientiem ir tik ļoti nepieciešams.
        </P>
        
        <H2>Fokuss uz UX</H2>
        <P>
            VDC klienti ir cilvēki, kuriem ikdienā ir pietiekami daudz stresa un savu problēmu, par kurām domāt. Šādi cilvēki novērtēs dizainu, kas tiem neliek domāt. Tie novērtēs katru sīkumiņu, kas viņu pieredzi šajā mājaslapā atvieglos kaut par mazumiņu.
            <br/><br/>
            Sākot ar navigācijas novietojumu un beidzot ar iespēju navigāciju atvērt/aizvērt izmantojot SWIPE darbību (pavelkot ar pirkstu) - viss ir pēc iespējas vairāk pielāgots, lai mājaslapa būtu ērti lietojama un informācija viegli uztverama.
            <br/><br/>
            Viss šis var likties lieki cilvēkiem, kas ir orientēti tikai uz peļņu un conversions, taču jāatceras, ka arī Google un citi meklētāji priekšroku dod mājaslapām, kuras ir ērti lietojamas. Google zina patiešām visu par tavu mājaslapu.
        </P>
        
        <H2>Logo Labojumi</H2>
        <P>
            Strādājot pie mājaslapas, es pamanīju, ka kompānijas logo ir 2 problēmas:<br/>
            1. Tas ir tikai vienā izmērā (Nav responsīvs)<br/>
            2. Kontrasts starp krāsām ir pārāk neliels<br/><br/>
            
            <Image src="/projects/vdc/vdc-4.png" layout="responsive" width="1920" height="2036" placeholder="blur" blurDataURL="/projects/vdc/vdc-4.png" />
            Mūsdienās nepietiek tikai ar vienu logo failu, jo logo var tikt izmantots kā uz gigantiskiem reklāmu plakātiem tā uz miniatūrām ikonām Apple Watch ierīcēs. Attiecīgi, dizaina gaitā ir nepieciešams izveidot vairākas versijas ar atšķirīgu detaļu līmeni. Piemēram, viens no variantiem ir logo, kas paredzēts izmantošanai mājaslapas "favicon" vietā. Šī ikona nav lielāka par 32 pikseļiem. Šādos izmēros nav iespējams ievietot gan logo gan tekstu tā lai to varētu salasīt. Turpretim šādu logo versiju nav loģiski izmantot tad, ja logo tiek ievietots mājaslapā kā bilde, kur ir daudz vairāk vietas detaļām.
            Nav jāveic milzīgas izmaiņas pašā logo, pietiek izveidot 3 līdz 5 dažādas logo versijas un pārliecināties, ka katras versijas logo ir viegli saskatāms un tajā nav nekā lieka.
            
            <br/><br/>
            
            <Image src="/projects/vdc/vdc-2.png" layout="responsive" width="1128" height="435" placeholder="blur" blurDataURL="/projects/vdc/vdc-2.png" />
            <Image src="/projects/vdc/vdc-3.png" layout="responsive" width="1130" height="440" placeholder="blur" blurDataURL="/projects/vdc/vdc-3.png" />
            Otrais punkts ir svarīgs tādēļ, ka logo ne vienmēr tiek skatīts perfektos apstākļos un pasaulē eksistē arī cilvēki ar redzes problēmām. Ja starp logo fonu un pašu logo nav pietiekami liels kontrasts, var būt ļoti lielas grūtības kaut ko saskatīt, piemēram, tiešā saules apgaismojumā vai cilvēkiem ar . Tādēļ ir pieņemtas proporcijas, kuras ir pietiekami lielas, lai iepriekš minētā problēma nebūtu tik dramatiska.
            
            <br/><br/>
            
            Abu problēmu novēršana bija darbs, kas man aizņēma vien stundu, bet novērš klienta potenciālās nākotnes problēmas uz visiem laikiem.
        </P>

        

    </BlogLayout>
  )
}
