import React from 'react'
import Banner from './Banner'
import Course from './Course'
import Slider from './Slider'
import Subscribe from './Subscribe'
import Teachers from './Teachers'

function Main() {
  return (
    <main>
      <section>
        <Slider />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Course/>
      </section>
      <section>
        <Teachers/>
      </section>
      <section>
        <Subscribe/>
      </section>

    </main>
  )
}

export default Main