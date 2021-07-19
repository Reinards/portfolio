import BlogLayout from '../../layouts/blog-layout'
import P from "../../components/blog/p"
import H2 from "../../components/blog/h2"
import A from "../../components/blog/a"
import Image from "next/image"

export default function Blog() {
  return (
    <BlogLayout
    metaTitle="Rosaella Brenda Koncepts | reinards.lv"
    title="Rosaella Brenda Koncepts">

        <Image src="/projects/rosaella/rosaella-2.png" layout="responsive" width="1920" height="1280" placeholder="blur" 
        blurDataURL="/projects/rosaella/rosaella-2.png" />
        <Image src="/projects/rosaella/rosaella-3.png" layout="responsive" width="1920" height="800" placeholder="blur" blurDataURL="/projects/rosaella/rosaella-3.png" />

        <P>
          Rosaella ir skolēnu mācību uzņēmums, kas veido ekoloģiskus sejas, ķermeņa, pēdu skrubjus kā arī vannas ziepes un sejas maskas. Šis ir pavisam jauns uzņēmums un mans uzdevums bija ātrā laikā izveidot brenda identitāti, kas atbilst Rosaella darbībai un vērtībām - ekoloģiski, maigi, dabīgi. Projekta gaitā tika izveidots arī vienkāršs e-veikals ar sākumlapu, produktu katalogu, blogu un, protams, norēķiniem.

        </P>
        <br/><br/>

        <Image src="/projects/rosaella/rosaella-colors.png" layout="responsive" width="1895" height="500" placeholder="blur" blurDataURL="/projects/rosaella/rosaella-colors.png" />
        <H2>Krāsu Palete</H2>
        <P>
        Zaļš un brūns, neapgāžami, ir krāsas, kas asociējas ar dabu.
        </P>

        <br/><br/>
        <Image src="/projects/rosaella/rosaella-type.png" layout="responsive" width="1920" height="1173" placeholder="blur" blurDataURL="/projects/rosaella/rosaella-type.png" />
        <H2>Tipogrāfija</H2>
        <P>
            Ne vienmēr ir jāizmanto daudzi fonti. Jo vairāk dažādi fonti tiek izmantoti, jo grūtāk ir tos salikt kopā un rast harmoniju. Šajā gadījumā tiek izmantots tikai Roboto fonts. Tas tiek izmantots mājaslapā, vizītkartei, lasāmam tekstam un visiem citiem digitāliem vai fiziskiem elementiem.

            <br/><br/>

            Otrs fonts, Dancing Script, tiek izmantots tikai logotipam. Kādēļ tieši šis? Tādēļ, ka ar roku rakstīts teksts asociējas ar dabīgu, paštaisītu un autentiskuma īpašībām. Konkrētais script fonts ir viegli lasāms un izskatās arī pietiekami moderns, tādēļ ideāli saliekas kopā ar otru, Roboto, fontu.
        </P>

        <br/><br/>
        <Image src="/projects/rosaella/rosaella-logo.png" layout="responsive" width="3418" height="1571" placeholder="blur" blurDataURL="/projects/rosaella/rosaella-logo.png" />
        <H2>Logo</H2>
        <P>
            Rosaella logo sastāv tikai no teksta. To var saukt par logotipu. Tas tiek attēlots tikai baltā vai melnā krāsā un var būt uzlikts gan uz fona gan bez fona.
            <br/><br/>
            Papildus galvenajam logotipam tika izveidota minimālā versija mazākiem attēliem, piemēram, Instagram profila bildei. Augstāk redzamajā attēlā ir parādīts, kādās krāsās ieteicams likt logo, ja tas tiek likts uz balta, melna, zaļa vai brūna fona.
        </P>         
        
        
        {/* <Image src="/projects/lmg/lmg-4.png" layout="responsive" width="1800" height="1370" placeholder="blur" blurDataURL="/projects/lmg/lmg-4.png" /> */}

    </BlogLayout>
  )
}
