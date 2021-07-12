import BlogLayout from '../../layouts/blog-layout'
import P from "../../components/blog/p"
import H2 from "../../components/blog/h2"
import Image from "next/image"

export default function Blog() {
  return (
    <BlogLayout
    metaTitle="Par Projektu Chalete | reinards.lv"
    title="Par Projektu Chalete">

        <Image src="/projects/chalete/chalete-2.png" layout="responsive" width="1280" height="900" placeholder="blur" blurDataURL="/projects/chalete/chalete-2.png" />
        
        <P>
          Chalete ir kompānija, kura Latvijā izplata kokapstrādes produktus - eļļas, lakas, krāsas u.c. Šis ir jauns uzņēmums, līdz ar to ir nepieciešams strādāt gan pie mājaslapas gan pie brenda, gan produktu etiķetēm, katalogiem un visa pārējā, kas jaunam uzņēmumam nepieciešams, lai sevi parādītu kā ekspertu.
          
          <br/><br/>
          
          2021. gada sākumā kompānijas prioritātēs ir izveidot digitālu katalogu, kas kalpo kā informācijas avots kompānijām un individuāliem klientiem, taču internetā pieejamās opcijas neatbilda kompānijas prasībām, tādēļ Chalete vērsās pie manis pēc palīdzības. Neilgā laikā tika izveidota mājaslapa ar vairāk kā 30 produktiem. Mājaslapa ir būvēta pēc SSG principa un produkti tiek glabāti JSON failā, līdz ar to nav nepieciešama datubāze un dārga uzturēšana.
          
          <br/><br/>
          
          Protams, šāds variants nav ideāls uzņēmumiem, kuri regulāri plāno papildināt vai mainīt produktus, jo izmaiņas var veikt tikai ar programmētāja palīdzību. Šāda ir problēma, ar kuru saskārāmies neilgi pēc mājaslapas publicēšanas, jo mājaslapas plānošanas procesā šāda potenciāla problēma tika noraidīta no klienta puses. 
          
          <br/><br/>
          
          Risinājums būtu mājaslapai pieslēgt CMS jeb satura pārvaldes sistēmu, ar kuras palīdzību jebkurš, spētu ievietot produktus katalogā.
          
          <br/><br/> Otrs variants, kas šobrīd tiek virzīts uz priekšu kā labāks variants un ieguldījums nākotnē ir internetveikala izveide. Mūsdienās, pateicoties tādām platformām kā Shopify, Squarespace u.c. ir iespējams dažu dienu laikā izveidot savu, pilnībā funkcionējošu internetveikalu, kas mēnesī var izmaksāt pat tik maz kā 24$.
        </P>
        
        <H2>Nākotnes Plāni - eCommerce</H2>
        <P>
            Šobrīd tiek plānots mājaslapas kataloga daļu pārlikt uz Shopify platformas un izveidot internetveikalu. Šāds gājiens atvieglotu darbu un ietaupītu līdzekļus, jo administrēt Shopify produktu katalogu ir daudz vienkāršāk un to spētu darīt jebkurš cilvēks ar nelielu apmācību. Shopify integrācija arī dotu iespēju klientiem norēķināties un pasūtīt produktus pa tiešo no mājaslapas, izsūtīt automatizētus rēķinus, kā arī ievākt e-pastus mārketinga nolūkiem.
            
            <br/><br/>
            
            Atšķirībā no Gatsby bibliotēkas, uz kuras šobrīd ir izveidota mājaslapa, Shopify ļauj pilnīgu mājaslapas rediģēšanu caur admin paneli bez programmētāja starpniecības. Tas nozīmē, ka arī teksti, bildes un kontaktinformāciju ir iespējams labot cilvēkam bez IT specializācijas.
        </P>
        

    </BlogLayout>
  )
}
