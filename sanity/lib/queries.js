import { defineQuery } from "next-sanity";

export const ALL_BLOGS_QUERY = defineQuery(`
  *[_type == "blog" && defined(slug.current)] | order(date desc, _createdAt desc) {
    _id,
    title,
    subtitle,
    slug,
    _createdAt,
    author->{
      _id,
      name,
      username,
      image,
      bio
    },
    date,
    readTime,
    views,
    category,
    tags,
    description,
    image {
      asset->{
        _id,
        url
      }
    },
    content,
    featured,
    publishedAt
  }
`);

export const ALL_BLOG_SLUGS_QUERY = defineQuery(`
  *[_type == "blog" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const BLOG_POST_QUERY = defineQuery(`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    slug,
    _createdAt,
    author->{
      _id,
      name,
      username,
      image,
      bio
    },
    date,
    readTime,
    views,
    category,
    tags,
    description,
    image {
      asset->{
        _id,
        url
      }
    },
    content,
    seo,
    publishedAt,
    featured,
    _updatedAt
  }
`);

export const RELATED_POSTS_QUERY = defineQuery(`
  *[_type == "blog" && category == $category && slug.current != $slug] | order(_createdAt desc)[0...3] {
    _id,
    title,
    subtitle,
    slug,
    _createdAt,
    author->{
      _id,
      name,
      username,
      image,
      bio
    },
    views,
    category,
    description,
    image {
      asset->{
        _id,
        url
      }
    },
  }
`);
