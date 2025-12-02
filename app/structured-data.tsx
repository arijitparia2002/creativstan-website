import content from '@/config/content.json'

export function generateStructuredData() {
  const baseUrl = 'https://creativstan.com'

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: content.siteInfo.title,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: content.siteInfo.description,
    email: content.siteInfo.email,
    telephone: `+91${content.siteInfo.whatsappNumber}`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    sameAs: [
      content.socialMedia.instagram,
      content.socialMedia.facebook,
      content.socialMedia.twitter,
      content.socialMedia.linkedin
    ].filter(url => url !== '#')
  }

  // Professional Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: content.siteInfo.title,
    image: `${baseUrl}/logo.png`,
    '@id': baseUrl,
    url: baseUrl,
    telephone: `+91${content.siteInfo.whatsappNumber}`,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6139,
      longitude: 77.2090
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '18:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '15'
    }
  }

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: content.siteInfo.title,
    url: baseUrl,
    description: content.siteInfo.description,
    publisher: {
      '@type': 'Organization',
      name: content.siteInfo.title
    }
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: `${baseUrl}/#portfolio`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Services',
        item: `${baseUrl}/#services`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: `${baseUrl}/#contact`
      }
    ]
  }

  return {
    organizationSchema,
    serviceSchema,
    websiteSchema,
    breadcrumbSchema
  }
}

export default function StructuredData() {
  const { organizationSchema, serviceSchema, websiteSchema, breadcrumbSchema } = generateStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
