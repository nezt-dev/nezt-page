import Carousel from 'react-material-ui-carousel';
import './App.css'
import { Section } from './components'

function App() {

  return (
    <div className='root'>
      <Section classNames='center'>
        <div className='img__container'>
          <img src='/nezt_isotipo.png' alt='Nezt Agency' />
        </div>
      </Section>

      <Section>
        <Carousel>
          <div style={{ backgroundColor: 'red', width: '100%', height: '100vh' }}></div>
          <div style={{ backgroundColor: 'blue', width: '100%', height: '100vh' }}></div>
          <div style={{ backgroundColor: 'green', width: '100%', height: '100vh' }}></div>
          <div style={{ backgroundColor: 'yellow', width: '100%', height: '100vh' }}></div>
        </Carousel>
      </Section>

      <Section styles={{ flexDirection: 'column' }}>
        <p>Voluptate cupidatat non ullamco amet ad fugiat occaecat excepteur quis consequat sint dolor irure reprehenderit. Aliquip aliquip sit occaecat eiusmod velit consequat duis consequat do occaecat amet eu sint id. Ea Lorem minim exercitation Lorem id id laborum incididunt culpa aliquip officia do cupidatat. Mollit eu adipisicing nulla minim. Dolore exercitation reprehenderit incididunt sint ullamco ex et. Laborum eu laborum nulla veniam ipsum.
          Reprehenderit excepteur consectetur proident ad do proident ipsum. Cillum nulla nostrud veniam ullamco laboris. Exercitation excepteur non laborum esse esse ea quis in ut.
        </p>
      </Section>

      <Section>
        <p>Non est mollit irure sint sint laboris ipsum ea non aliquip ullamco velit ad nisi. Pariatur laborum amet quis id ut magna voluptate ad consectetur. Qui incididunt nostrud adipisicing mollit cillum velit duis adipisicing et elit. Cupidatat occaecat magna velit anim anim occaecat pariatur reprehenderit. Quis aliquip est in ut consequat irure consectetur ipsum quis ad. Ad fugiat ex occaecat laboris cillum eu fugiat cupidatat non voluptate cillum est.</p>
      </Section>

      <Section classNames='section__5'>
        <p>Do ea tempor fugiat nulla incididunt ea irure fugiat do cillum voluptate. Irure aliquip nulla incididunt magna eiusmod non. Amet labore exercitation ex exercitation ex ipsum pariatur ut.</p>
        <div className="wing wing__1"></div>
        <div className="wing wing__2"></div>
      </Section>
    </div>
  )
}

export default App;