import React from 'react'
import { Helmet } from 'react-helmet'
import GalleryComponent from '../components/gallery/gallery.component'
function GalleryPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        {/* <p>Gallery Page</p> */}
        < GalleryComponent/>
    </>
  )
}

export default GalleryPage