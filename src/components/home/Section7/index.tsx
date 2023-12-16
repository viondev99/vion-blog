import React, { FC } from 'react'
import cx from 'classnames'
import classes from './section7.module.scss'
import { listLogoSection7 } from '@/constants/home'
import { ListLogoSection7 } from '@/models/home'
import Image from 'next/image'

const Section7: FC = () => {
  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section7)}>
        <div className={classes.coverContent}>
          {listLogoSection7.map((it: ListLogoSection7) => (
            <div
              key={it.id}
              className={cx(classes.wrapItem, {
                [classes.paddingItem34]: it.id === 'logo3' || it.id === 'logo4',
                [classes.paddingItem56]: it.id === 'logo5' || it.id === 'logo6',
              })}
            >
              <Image src={it.img} alt={it.alt} className={classes.itemLogo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section7
