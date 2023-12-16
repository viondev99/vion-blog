import React, { FC } from 'react'
import cx from 'classnames'
import classes from './section1.module.scss'

const Section1: FC = () => {
  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section1)}>
        <div className={classes.coverContent}>
          <div className={classes.content}>
            <h5 className={classes.title1}>
              My main role for work is Front-end Developer. Outside of work, I
              love raising marine ornamental fish, traveling, singing karaoke
              with staff
            </h5>
            <h2 className={classes.title2}>
              For me, work and entertainment must be in harmony
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
