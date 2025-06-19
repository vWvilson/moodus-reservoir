import { sanityClient } from "sanity:client";

import groq from "groq";



export async function getBlogs() {
    return await sanityClient.fetch(
      groq`*[_type == "blog" && defined(slug.current)] | order(_createdAt desc)`
    );
  }
  
export async function getBlog(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0] {
      title,
         bodyContent,
      featuredImage,
      slug
    }`,
    {
      slug,
    }
  );
}

  
