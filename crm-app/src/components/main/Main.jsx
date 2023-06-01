import React from 'react'
import Banner from './Banner'
import Course from './Course'
import Slider from './Slider'

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
    </main>
  )
}

export default Main