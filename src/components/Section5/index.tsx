import { FC, useEffect, useState } from 'react'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import './Section5.css'

export const Section5: FC = () => {

  return (
    <section className='main__section section__5'>
      <p>Do ea tempor fugiat nulla incididunt ea irure fugiat do cillum voluptate. Irure aliquip nulla incididunt magna eiusmod non. Amet labore exercitation ex exercitation ex ipsum pariatur ut.</p>
      <div>
        <p>¡Síguenos en nuestras redes sociales!</p>
        <div className='social__container'>
          <a href='https://www.facebook.com/' target='__blank' rel='norefferrer'>
            <Facebook />
          </a>
          <a href='https://www.instagram.com/' target='__blank' rel='norefferrer'>
            <Instagram />
          </a>
          <a href='https://www.twitter.com/' target='__blank' rel='norefferrer'>
            <Twitter />
          </a>
        </div>
      </div>
      <p>Aqui algo despidiendonos de los visitantes</p>
      <div className="wing wing__wrap__1">
        <div className="wing wing__1"></div>
      </div>
      <div className="wing wing__wrap__2">
        <div className="wing wing__2"></div>
      </div>
      <div className='bubbles__container'>
        <div className='bubble'></div>
      </div>
    </section>
  )
}