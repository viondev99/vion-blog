import React, { FC } from 'react'
import cx from 'classnames'
import classes from './section6.module.scss'
import Image from 'next/image'

import img_avatar from '../../../assets/img/home/section6/avatar_mini.png'
import svg_bottom from '../../../assets/img/home/section6/bottom.svg'

const Section6: FC = () => {
  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section6)}>
        <div className={classes.coverContent}>
          <h5 className={classes.text1}>Testimonials</h5>
          <div className={classes.wrapLine}>
            <span className={classes.line} />
          </div>
          <h2 className={classes.text2}>My Happy Clients!</h2>
          <div className={classes.text3}>
            Aliquip quae scipit eros. Anim commodi maiores pharetra, arcu
            incidunt, omnis iste incidunt cursus. Officia ea numquam vivamus
            repellen. Minus fermentum litora.
          </div>
          <div className={classes.wrapAvatar}>
            <Image
              src={img_avatar}
              alt='an image'
              className={classes.img_avatar}
            />
            <div>Deborah Sims</div>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <Image src={svg_bottom} alt='radius' className={classes.img_shape_fill} />
      </div>
    </div>
  )
}

export default Section6
