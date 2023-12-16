import React, { FC } from 'react'
import cx from 'classnames'
import classes from './section4.module.scss'
import { listImageSection4 } from '@/constants/home'
import { ListImageSection4 } from '@/models/home'
import Image from 'next/image'

const Section4: FC = () => {
  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section4)}>
        <div className={classes.coverContent}>
          {listImageSection4.map((it: ListImageSection4) => (
            <div key={it.id} className={classes.widthItem}>
              <div
                className={classes.boxItem}
              >
                <div className={classes.wrapImage}>
                  <Image
                    src={it.src}
                    alt={it.alt}
                    className={classes.itemImage}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section4
