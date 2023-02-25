import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import diniMueter from '../../public/DiniMueter_EKdMxHASSIGxHELLASTUDIO_DIN_A1_2023_web.webp'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Image
        className='image'
        src={diniMueter}
        alt={'Dini Mueter isch hässig Poster'}
      />
      <h1>
        Poster
        <br />
        DINI MUETER ISCH HÄSSIG 2023
      </h1>

      <article>
        <p>
          Leuchtender 6-Farben-Druck, Ökologische HP-Latex-Print-Technologie mit
          wasserbasierender Tinte (aber dennoch wetterbeständig), ohne
          Lösungsmittel, lichtecht, geruchsneutrale Ausdrucke ohne
          Luftschadstoffe und zu 100% rezyklierbar.
        </p>
        <p>
          A1 (59,4x84,1cm)
          <br />
          Artwork by Hella Studio
        </p>
        <p>Please allow 1-2 weeks for shipping.</p>
      </article>
      <a
        href='https://buy.stripe.com/test_3cs9DHdRY6u1fOU3cc'
        target='_blank'
        rel='noreferrer'
        className='button'
      >
        BUY
      </a>
      <aside>
        <p className='noMB'>no credid card? no problem:</p>
        <a href='mailto:hi@lookmom.ch'>hi@lookmom.ch</a>
      </aside>
    </main>
  )
}
