import React, { FC, useState } from 'react'
import cx from 'classnames'
import Image from 'next/image'
import classes from './section2.module.scss'
import Link from 'next/link'

import img_model from '../../../assets/img/home/section2/iamatvmo.png'
import ic_arrow_right from '../../../assets/icons/arrow_right_white_small.svg'
import ic_arrow_right_black from '../../../assets/icons/arrow_right_black_small.svg'

const Section2: FC = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false)

  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section2)}>
        <div className={classes.coverContent}>
          <div className={classes.wrapLeft}>
            <div className={classes.setPadding}>
              <div className={classes.setConcept}>
                <div className={classes.coverImage}>
                  <Image
                    src={img_model}
                    alt='an image, a people blowing out the birthday cake candles'
                    title={'This is my 23 years old birthday, when I working at VMO Holdings company'}
                    className={classes.imgModel}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.wrapRight}>
            <div className={classes.contentRight}>
              <h3 className={classes.title1}>
                Discover Your Personal Style and the Confidence That Comes with
                It.
              </h3>
              <div className={classes.title2}>
                Tempora aliqua cillum accusamus aperiam pharetra cupidatat
                fermentum viverra delectus quidem incidunt tempus itaque quam,
                id blandit dolores, proin reiciendis. Nostrum proin sem veniam
                veritatis inceptos!
              </div>
              <div className={classes.actionBottom}>
                <Link
                  href={'#'}
                  rel='noopener noreferrer'
                  className={classes.readMore}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Image
                    src={isHovering ? ic_arrow_right_black : ic_arrow_right}
                    alt='icon arrow right'
                    width={15}
                    height={15}
                    className={classes.icArrow}
                  />
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
