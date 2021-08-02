import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import  Layout  from '../components/Layout'
// import  Seo  from '../components/Seo'
import { SliceZone } from '../components/SliceZone'

const PageTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicPage
  console.log(doc.data.categories[0].category.raw.slug)

  return (
    <Layout>
      {/* category div */}
      {/* <div>{RichText.asText(doc.data.categories[0].category.raw.slug)}</div> */}
      <div className="slug">{doc.data.categories[0].category.raw.slug}</div>

      {/* <Seo title={page.data.document_display_name.text} /> */}
      <SliceZone sliceZone={doc.data.body} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
    
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBodyText
          ...PageDataBodyQuote
          ...PageDataBodyFullWidthImage
          ...PageDataBodyImageGallery
          ...PageDataBodyImageHighlight
        }
        categories {
          category {
            raw
          }
        }
      }
    }
  }
`

export default PageTemplate