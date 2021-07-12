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
          Sadarbībā ar Saldus TIKS tika izveidotas divas lietotnes dažādiem pasākumiem Saldus novadā. Abas lietotnes tika paredzētas izmantošanai no mobilajām ierīcēm. Projektu izstrādei nebija atvēlēts ilgs laiks un daudz līdzekļu tādēļ izstrādāt atsevišķi lietotni iOS un Android ierīcēm nebija opcija.
          
          <br/><br/>
          
          Manis piedāvātā alternatīva ir izveidot mājaslapu pēc PWA ideoloģijas. Kas īsti ir PWA? Vienkārši sakot tā ir mājaslapa, kurai ir daudzas "native" lietotņu labās funkcionalitātes, piemēram, iespēja ieinstalēt, iespēja izmantot offline, iespēja izmantot ierīces sensorus
          
          <br/><br/>
          
          Abas lietotnes tika izveidotas mēneša laikā, uzliktas uz servera un gatavas izmantošanai.
        </P>
        
        {/* <Image src="/projects/lmg/lmg-4.png" layout="responsive" width="1800" height="1370" placeholder="blur" blurDataURL="/projects/lmg/lmg-4.png" /> */}

    </BlogLayout>
  )
}
