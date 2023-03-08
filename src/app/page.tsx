import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import diniMueter from '../../public/POSTER_Interieur.jpg'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Image
        className='image'
        src={diniMueter}
        alt={'Dini Mueter isch hässig Poster'}
      />
      <div>
        <h1>
          Poster
          <br />
          DINI MUETER ISCH HÄSSIG
        </h1>
        <h2>
          Feministischer Streik 2023
          <br />
          EKdM x hässig x Hella Studio
        </h2>
      </div>

      <article>
        <p>
          Leuchtender 6-Farben-Druck, Ökologische HP-Latex-Print-Technologie mit
          wasserbasierender Tinte (aber dennoch wetterbeständig), ohne
          Lösungsmittel, lichtecht, geruchsneutrale Ausdrucke ohne
          Luftschadstoffe und zu 100% rezyklierbar.
          <br />
          Printed in Bern, Schweiz
        </p>
        <p>
          A1 (59,4x84,1cm)
          <br />
          Artwork by Hella Studio
        </p>
        <p>
          CHF 59.– inkl. Versand (CH)
          <br />
          Please allow 1-2 weeks for shipping.
        </p>
      </article>
      <a
        href='https://buy.stripe.com/9AQ4iE0Ja4zo2XK6op'
        target='_blank'
        rel='noreferrer'
        className='button'
      >
        Jetzt kaufen
      </a>
      <aside>
        <p className='noMB'>Questions:</p>
        <a href='mailto:hi@lookmom.ch'>hi@lookmom.ch</a>
      </aside>
    </main>
  )
}
