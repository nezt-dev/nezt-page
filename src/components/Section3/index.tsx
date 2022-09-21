import { FC } from 'react'
import Carousel from 'react-material-ui-carousel'
import './Section3.css'

export const Section3: FC = () => {
  return (
    <section className='main__section section__3'>
      <Carousel animation='slide' indicators={ false } autoPlay={ false }>
          <div className='employee' style={{ backgroundColor: 'red', height: '100vh', }}>
            <p className='employee__name'>Nombre de Samuel</p>
            <p className='employee__stack'>Stack de Samuel</p>
            <div className='employee__pic' style={{ border: 'thin solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Foto del pene de Samuel
            </div>
            <div className='employee__description'>
              <p>Aliqua est cupidatat est Lorem deserunt dolore velit culpa nostrud mollit sint consequat enim. Elit duis dolore duis eu. In reprehenderit ad irure ea amet est magna id magna proident. Ipsum sint sunt eu amet sunt mollit mollit nostrud eiusmod.</p>
            </div>
          </div>

          <div className='employee' style={{ backgroundColor: 'blue', height: '100vh', }}>
            <p className='employee__name'>Nombre de Yeremy</p>
            <p className='employee__stack'>Stack de Yeremy</p>
            <div className='employee__pic' style={{ border: 'thin solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Foto del pene de Yeremy
            </div>
            <div className='employee__description'>
              <p>Labore labore consequat nisi sint pariatur ad ut nisi nulla. Ea nostrud veniam et aliqua labore proident officia commodo. Aute incididunt velit officia eiusmod non exercitation cillum magna eiusmod nulla voluptate. Tempor ullamco ea labore aliqua. Enim ex velit mollit et anim deserunt ad officia duis esse laborum voluptate adipisicing ipsum. Magna occaecat dolore exercitation enim cillum nisi incididunt Lorem mollit minim aliqua ea. Aliquip officia enim eu id non enim nostrud adipisicing ex anim consequat deserunt anim consectetur.</p>
            </div>
          </div>

          <div className='employee' style={{ backgroundColor: 'green', height: '100vh', }}>
            <p className='employee__name'>Nombre de Alberto</p>
            <p className='employee__stack'>Stack de Alberto</p>
            <div className='employee__pic' style={{ border: 'thin solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Foto del pene de Alberto
            </div>
            <div className='employee__description'>
              <p>Aliquip ullamco minim sunt exercitation. Laboris eiusmod veniam veniam adipisicing tempor voluptate consectetur. Tempor enim mollit sunt ipsum eu ad tempor. Enim tempor pariatur nisi in eu esse voluptate magna reprehenderit ea cillum exercitation adipisicing excepteur.</p>
            </div>
          </div>

          <div className='employee' style={{ backgroundColor: 'purple', height: '100vh', }}>
            <p className='employee__name'>Nombre de Miguel F</p>
            <p className='employee__stack'>Stack de Miguel F</p>
            <div className='employee__pic' style={{ border: 'thin solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Foto del pene de Miguel F
            </div>
            <div className='employee__description'>
              <p>Dolor ipsum irure dolor cillum amet dolor anim incididunt id ullamco laborum incididunt laborum. Aliquip id duis voluptate mollit consectetur sint ea exercitation irure in mollit Lorem aliquip. Amet ea et duis proident labore anim deserunt ex aliquip. Est incididunt officia in ea. Elit sunt Lorem incididunt irure duis.</p>
            </div>
          </div>

          <div className='employee' style={{ backgroundColor: 'Pink', height: '100vh', }}>
            <p className='employee__name'>Nombre de Miguel F</p>
            <p className='employee__stack'>Stack de Miguel F</p>
            <div className='employee__pic' style={{ border: 'thin solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Foto del pene de Miguel F
            </div>
            <div className='employee__description'>
              <p>Non adipisicing non aute esse enim exercitation exercitation nostrud fugiat. Velit officia sint duis Lorem. Esse fugiat dolor dolore magna ut amet ad. Anim dolor ipsum cillum cupidatat aliquip ullamco consectetur.</p>
            </div>
          </div>

        </Carousel>
    </section>
  )
}