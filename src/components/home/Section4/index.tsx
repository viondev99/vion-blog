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
              <div className={classes.boxItem}>
                <div className={classes.wrapImage}>
                  <Image
                    src={it.src}
                    alt={it.alt}
                    className={cx(classes.itemImage, {
                      [classes.img1]: it.id === 'img1',
                      [classes.img2]: it.id === 'img2',
                      [classes.img3]: it.id === 'img3',
                      [classes.img4]: it.id === 'img4',
                    })}
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
