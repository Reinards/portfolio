import BlogLayout from '../../layouts/blog-layout'
import P from "../../components/blog/p"
import H2 from "../../components/blog/h2"
import Image from "next/image"

export default function Blog() {
  return (
    <BlogLayout
    metaTitle="Saldus TIKS Lietotņu Izstrāde | reinards.lv"
    title="Saldus TIKS Lietotņu Izstrāde">

        <P>
          Sadarbībā ar Saldus TIKS tika izveidotas divas lietotnes dažādiem pasākumiem Saldus novadā. Abas lietotnes tika paredzētas izmantošanai no mobilajām ierīcēm. Projektu izstrādei nebija atvēlēts ilgs laiks un daudz līdzekļu tādēļ izstrādāt atsevišķi lietotni iOS un Android ierīcēm nebija iespējams.
          
          <br/><br/>
          
          Manis piedāvātā alternatīva bija izveidot mājaslapu pēc PWA ideoloģijas. Kas īsti ir PWA? Vienkārši sakot tā ir mājaslapa, kurai ir pieejamas "native" lietotņu funkcijas, piemēram, iespēja ieinstalēt, iespēja izmantot offline, iespēja izmantot ierīces sensorus. Tā ir mājaslapa, kura spēj izmantot funkcijas, kas agrāk bija pieejamas tikai mobilajām lietotnēm. 

          <br/><br/>
          Tādēļ, ka projekts tika veidots ar PWA, uzstādīt un sagatavot lietotnes lietošanai aizņēma mazāk par dienu, jo viss kas vajadzīgs ir parasts web serveris. Ejot tipisko mobilo lietotņu izveides ceļu nāktos ievietot lietotni Google Play un App Store. Tās ir lielas izmaksas priekš tik nelielām lietotnēm kā šīs.
          
          <br/><br/>
        
          Viena no lietotnēm ir pieejama apskatei - https://tehnika.saldus.lv <br/>
          Ņemot vērā budžetu un to, ka mājaslapa tika paredzēta apskatei TIKAI caur mobilajām ierīcēm kontroles punktos pie apskates objektiem, tā nav saderīga ar lielākiem ekrāniem.
        </P>
        
        {/* <Image src="/projects/lmg/lmg-4.png" layout="responsive" width="1800" height="1370" placeholder="blur" blurDataURL="/projects/lmg/lmg-4.png" /> */}

    </BlogLayout>
  )
}
