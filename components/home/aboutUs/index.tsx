'use client'
import Image from 'next/image'
import Button from '@/components/common/Button'
import styles from './styles.module.css'
import imgSrc from '@/public/assets/images/aboutus.png'

const AboutUs = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutWrapper}>
        
        <div className={styles.imageWrap}>
          <Image
            src={imgSrc}
            alt="About Us"
            width={1000}
            quality={100}
            height={1000}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.subtitle}>About Us</span>

          <h2 className={styles.title}>
            Crafting structures that last a lifetime
          </h2>

          <p className={styles.text}>
            Crafting structures that last a lifetime requires a holistic approach
            that integrates advanced materials, resilient design, and sustainability.
          </p>

          <ul className={styles.features}>
            <li>Comprehensive Services</li>
            <li>Advanced Technology</li>
            <li>Transparent Communication</li>
          </ul>

          <div className={styles.actions}>
            <Button text="Get Free Quote" link="/contact" type={2} />
            <div className={styles.contact}>
              <span>Call support center 24x7</span>
              <strong>+1 809 120 6705</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs