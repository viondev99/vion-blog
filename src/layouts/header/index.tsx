import React, { FC, useState, lazy, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import classes from './header.module.scss'
import cx from 'classnames'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import logo from '../../assets/img/header/logo_header.png'
import { ListIconSocial, ListSiteBar } from '@/models/header'
import { listSiteBar, listSocial } from '@/constants/layouts'

import icLightRowMenu from '../../assets/icons/header/ic_lightRowMenu.svg'
import icExit from '../../assets/icons/header/ic_exit.svg'

const ListMenuMobile = lazy(() => import('./listMenuMobile'))

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const isMobileLg = useDeviceDetect('mobile-lg')
  const { pathname } = useRouter()

  return (
    <div className={'ContainerHeader'}>
      <div className={classes.header}>
        <div className={classes.coverHeader}>
          <div className={classes.wrapLeft}>
            <Link href={'/'} className={classes.linkLogo}>
              <Image src={logo} alt='logo' className={classes.logo} />
            </Link>
          </div>
          {!isMobileLg ? (
            <div className={classes.wrapRight}>
              <div className={classes.wrapSiteBarLeft}>
                {listSiteBar.map((it: ListSiteBar) => (
                  <Link
                    href={`${it.url}`}
                    key={it.id}
                    className={cx(
                      classes.linkSitebar,
                      pathname === it.url ? classes.selected : ''
                    )}
                  >
                    {it.content}
                  </Link>
                ))}
              </div>
              <div className={classes.wrapSiteBarRight}>
                {listSocial.map((it: ListIconSocial) => (
                  <Link
                    href={it.url}
                    key={it.id}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx(classes.linkSocial, it.id === 'linkedin' ? classes.linkLinkedin : '')}
                  >
                    <Image
                      src={it.src}
                      alt={it.alt}
                      className={cx({
                        [classes.icFB]: it.id === 'fb',
                        [classes.icIns]: it.id === 'ins',
                        [classes.icLinkedin]: it.id === 'linkedin',
                      })}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className={classes.wrapRightMobile}>
              <div
                className={classes.menuSelect}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                {!isOpenMenu ? (
                  <Image
                    src={icLightRowMenu}
                    alt='icon three row with white color'
                    className={classes.icLightRowMenu}
                  />
                ) : (
                  <Image
                    src={icExit}
                    alt='icon exit'
                    className={classes.icExit}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {isOpenMenu && (
        <Suspense fallback={null}>
          <ListMenuMobile listSiteBar={listSiteBar} listSocial={listSocial} />
        </Suspense>
      )}
    </div>
  )
}

export default Header
