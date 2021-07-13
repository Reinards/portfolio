import BlogLayout from '../../layouts/blog-layout'
import P from "../../components/blog/p"
import H2 from "../../components/blog/h2"
import A from "../../components/blog/a"
import Image from "next/image"

export default function Blog() {
  return (
    <BlogLayout
    metaTitle="Kapelleru Nama Projekts - Mobilās Lietotnes Izstrāde | reinards.lv"
    title="Kapelleru Nama Projekts - Mobilās Lietotnes Izstrāde">

        <P>
          Viens no vecākajiem projektiem manā portfolio ir lietotne mobilajām ierīcēm, kas tika veidota sadarbībā ar Kapelleru Namu un Cemex finansējumu.
          
          <br/><br/>
          
          Projekta gaitā tika izveidota lietotne/spēle jauniešu izglītošanai Saldus Novadā. Līdzīgi, kā projektā ar Saldus TIKS, projekta budžets neatļāva izstrādāt atsevišķu lietotni Android un iOS platformām. Zinot jauniešus un to, ka tiem ir tendence "sērfot" internetā, vienkārši izveidot mājaslapu arī nederēja, jo tas novērstu fokusu no pašas spēles.

          <br/><br/>
          Vidusceļš šajā gadījumā ir hibrīdlietotne. Tā ir tāda lietotne, kas oriģināli veidota kā mājaslapa, taču izmantojot kādu starpnieku, piemēram, Cordova, pārvērš šo mājaslapu par pilnībā funkcionējošu mobilo lietotni.
          
          <br/><br/>
        
          Šādi izveidotu lietotni ir iespējams ievietot Google Play vai App Store, taču tam nebija ne laika ne līdzekļu. Lietotnes uzģenerēto APK failu jeb instalācijas failu bija iespējams manuāli ievietot Kapelleru Nama planšetdatoros un ieinstalēt.

          <br/><br/>
          Diemžēl no šī projekta bilžu man nav, taču, ja ir interese, šeit links uz kodu: <br/>
          <A>https://github.com/Reinards/skaties-daba</A>
        </P>
        
        {/* <Image src="/projects/lmg/lmg-4.png" layout="responsive" width="1800" height="1370" placeholder="blur" blurDataURL="/projects/lmg/lmg-4.png" /> */}

    </BlogLayout>
  )
}
