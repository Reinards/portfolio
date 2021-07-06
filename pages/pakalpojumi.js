import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar/navbar'
import DefaultLayout from '../layouts/default-layout'
import ContactMeBanner from "../components/contact-me-banner/contact-me-banner"
import PageHeader from '../components/page-header/page-header'

export default function Services() {
  return (
    <DefaultLayout>
      <Head>
        <title>Reinards.lv - Sākumlapa</title>
      </Head>

      <div className="main-container">

        <PageHeader>Pakalpojumi</PageHeader>

        <img className="mb3" src="https://via.placeholder.com/1280x200?text=Dizains" />
        <p className="tj">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper quam est, eget accumsan purus facilisis non. Nulla a euismod magna. Integer mattis rutrum metus, sed bibendum magna scelerisque vitae. Morbi consequat lorem vel elit ornare iaculis. Vivamus tincidunt suscipit eleifend. Vivamus et lorem justo. Nullam vitae tincidunt risus. Aliquam porta ligula sit amet justo maximus pellentesque. Nulla fermentum sollicitudin blandit. Quisque accumsan cursus malesuada. Nullam a pellentesque mi. Etiam scelerisque elementum imperdiet. Sed ac est sodales, dapibus nunc sed, interdum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu ornare justo. Suspendisse suscipit et justo vel sagittis.
        </p>

        <img className="mb3 mt4 mt6-ns" src="https://via.placeholder.com/1280x200?text=Dizains" />
        <p className="tj">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper quam est, eget accumsan purus facilisis non. Nulla a euismod magna. Integer mattis rutrum metus, sed bibendum magna scelerisque vitae. Morbi consequat lorem vel elit ornare iaculis. Vivamus tincidunt suscipit eleifend. Vivamus et lorem justo. Nullam vitae tincidunt risus. Aliquam porta ligula sit amet justo maximus pellentesque. Nulla fermentum sollicitudin blandit. Quisque accumsan cursus malesuada. Nullam a pellentesque mi. Etiam scelerisque elementum imperdiet. Sed ac est sodales, dapibus nunc sed, interdum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu ornare justo. Suspendisse suscipit et justo vel sagittis.
        </p>

        <ContactMeBanner/>
      </div>


      {/* Footer */}

    </DefaultLayout>
  )
}
