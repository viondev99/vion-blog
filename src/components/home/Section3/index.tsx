import React, { FC } from 'react'
import cx from 'classnames'
import classes from './section3.module.scss'

const Section3: FC = () => {
  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section3)}>
        <div className={classes.coverContent}>
          <h5 className={classes.title1}>
            I love traveling, to places with beautiful nature, beautiful
            architecture, and typical dishes of that place. Da Nang and Hoi An
            are probably my favorite tourist destinations. The handrail karaoke
            service here is also excellent, the beautiful maids and
            enthusiastically serve customers from A-Z.
          </h5>
          <h2 className={classes.title2}>
            Traveling is my #1 favorite. Discovering people in places I’ve been
            to.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Section3
