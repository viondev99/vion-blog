import React, { FC } from 'react'
import cx from 'classnames'
import classes from './section3.module.scss'

const Section3: FC = () => {
  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section3)}>
        <div className={classes.coverContent}>
          <h5 className={classes.title1}>Services for All Age Women</h5>
          <h2 className={classes.title2}>
            I Love to Help People Feel Great about How They Look.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Section3
