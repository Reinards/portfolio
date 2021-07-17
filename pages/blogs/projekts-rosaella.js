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
          StorySail ir konceptuāla premium brendinga kompānija. Šajā projektā tika izstrādāts StorySail brends, vizuālā identitāte un mājaslapa.
          Šī ir kompānija, kas saviem klientiem sniedz brendinga pakalpojumus - viss sākot ar stratēģiju un beidzot ar mārketingu. 
          <br/><br/>
          Kompānijas interesēs ir sniegt pēc iespējas kvalitatīvāku pakalpojumu un piesaistīt "lielus" klientus, tādēļ arī tās tēls ir prestižs un liecina par kvalitāti. Viens no svarīgākajiem elementiem, kas piedalās šīs prestižās sajūtas veidošanā ir zelta krāsa, kas tiek izmantota gan logo gan mājaslapā, gan visos citos nākotnes medijos, piemēram uz vizītkartes vai dokumentos.

        </P>
        <br/><br/>

        <Image src="/projects/rosaella/rosaella-colors.png" layout="responsive" width="1895" height="500" placeholder="blur" blurDataURL="/projects/rosaella/rosaella-colors.png" />
        <H2>Krāsu Palete</H2>
        <P>
        StorySail krāsu palete sastāv no diviem zelta krāsas toņiem, gandrīz melnas un baltas. Zeltam ir daudz un dažādu iespējamo toņu. Šajā gadījumā tiek izmantots tonis, kas izskatās nedaudz dabīgāks un ne tik ļoti dzeltens.
        </P>

        <br/><br/>
        <Image src="/projects/rosaella/rosaella-type.png" layout="responsive" width="1920" height="1173" placeholder="blur" blurDataURL="/projects/rosaella/rosaella-type.png" />
        <H2>Tipogrāfija</H2>
        <P>
            Fonti tika izvēlēti ņemot vērā to, ka viena no StorySail identitātes īpašībām ir būt progresīviem, moderniem. Šeit nācās izvēlēties kādu no klasiskajiem serif fontiem vai arī kādu modernāku. Serif fonts pilnīgi noteikti vēl vairāk pastiprinātu prestiža un kvalitātes sajūtu, taču tajā pašā laikā radītu vecuma, stagnācijas un konservatīvisma asociācijas - izejot no šī tika izvēlēts Poppins un Roboto. Roboto ir nedaudz saspiestāks un vieglāk padodas lasīšanai, tādēļ tiek izmantots kā sekundārais un body fonts.
        </P>

        <br/><br/>
        <Image src="/projects/rosaella/rosaella-logo.png" layout="responsive" width="3418" height="1571" placeholder="blur" blurDataURL="/projects/rosaella/rosaella-logo.png" />
        <H2>Logo</H2>
        <P>
            StorySail Logo kocepts radās no kompānijas divām galvenajām vērtībām - Pozitīva ietekme un Jēga. Kompānijas misija ir piedalīties labākas pasaules veidošanā, strādājot ar brendiem un padarot tos draudzīgākus, vairāk orientētus ap cilvēku nevis ienākumiem, jo šai pasaulei tik tiešām ir nepieciešams vairāk līdzjūtības un savstarpējas vienotības.
            <br/><br/>
            Logo sastāv no diviem elementiem - sirds un kompasa bultas. Sirds simbolizē kompānijas līdzjūtību pret cilvēkiem un pasauli. Bulta simbolizē kompānijas misiju dalīties ar šo pozitīvo, uz cilvēku orientēto domāšanu.
            <br/><br/>
            Logo sastāv no divām dažādām versijām un to variācijām - Pilnā versija (Logo + Logotips) un Minimālā versija (Tikai logo). Katrs no variantiem ir izveidots kā zelts uz melna, balts uz melna, melns uz balta un grayscale jeb pelēkā versija.
        </P>         
        
        
        {/* <Image src="/projects/lmg/lmg-4.png" layout="responsive" width="1800" height="1370" placeholder="blur" blurDataURL="/projects/lmg/lmg-4.png" /> */}

    </BlogLayout>
  )
}
