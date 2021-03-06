// @flow

import {
  Link,
} from 'ethly-api'

/**
 * Class that represents link in db. You could use linksModel to add new link
 * like this: new Link(new LinkSpecification(...)).save(...)
 */

export class LinkSpecification {
  id: string
  label: string
  url: string
  description: string
  hashtags: Array<string>
  timestamp: number

  constructor(id: string, label: string, url: string, description: string, hashtags: Array<string>, timestamp: number) {
    this.id = id
    this.label = label
    this.url = url
    this.description = description
    this.hashtags = hashtags
    this.timestamp = timestamp
  }

  static toApiLink(link: LinkSpecification): Link {
    return new Link(
      link.url,
      link.label,
      link.description,
      link.hashtags
    )
  }

  static fromApiLinkWithId(id: string, link: Link): LinkSpecification {
    return new LinkSpecification(
      id,
      link.label,
      link.url,
      link.description,
      link.hashtags,
      link.timestamp
    )
  }

  /**
   * Creates {@type LinkSpecification} from raw JSON.
   */
  static fromBodyWithId(id: string, body: any): LinkSpecification {
    if (id == null) {
      throw new Error('Please specify id')
    }
    if (body.label == null) {
      throw new Error('Please specify label')
    }
    if (body.url == null) {
      throw new Error('Please specify url')
    }
    return new LinkSpecification(
      id,
      body.label,
      body.url,
      body.description == null ? '' : body.description,
      body.hashtags == null ? [] : body.hashtags,
      0
    )
  }
}
