import { FC } from 'react'
import './Section1.css'

export const Section1: FC = () => {
  return (
    <section className='main__section section__1'>
      <div className='iso__container'>
        <img src="/nezt_isotipo_negativo.png" alt="Nezt Agency" />
      </div>
      <div className='logo__container'>
        <img src="/nezt_logotipo_negativo.png" alt="Nezt Logo" />
      </div>
      <div className='agency__container'>
        <p className='agency'>Agency</p>
      </div>
    </section>
  )
}