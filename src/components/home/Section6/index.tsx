import React, { FC } from 'react'
import cx from 'classnames'
import classes from './section6.module.scss'
import Image from 'next/image'

import img_avatar from '../../../assets/img/home/section6/avaminiS6.png'
import svg_bottom from '../../../assets/img/home/section6/bottom.svg'

const Section6: FC = () => {
  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section6)}>
        <div className={classes.coverContent}>
          <h5 className={classes.text1}>Vion Nguyen</h5>
          <div className={classes.wrapLine}>
            <span className={classes.line} />
          </div>
          <h2 className={classes.text2}>
            Memories are to remember. Your future and growth are to look forward
            to!
          </h2>
          <div className={classes.text3}>
            Although what I shared above has reminded people of the image of 1
            promiscuous person, I also have sad stories, sad memories, stories
            of pride about myself. These are stories about love, stories of
            adolescence, high school, college, and even recently going to work.
            Stories that touched and memorized me
          </div>
          <div className={classes.wrapAvatar}>
            <Image
              src={img_avatar}
              alt='an image'
              className={classes.img_avatar}
            />
            <div>Ng. Minh Hiep</div>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <Image
          src={svg_bottom}
          alt='radius'
          className={classes.img_shape_fill}
        />
      </div>
    </div>
  )
}

export default Section6
