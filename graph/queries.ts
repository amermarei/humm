export const Articles = gql`
  query Articles(
    $lang: String = "en-US"
    $type: String = "food"
    $offset: Int = 0
    $limit: Int = 6
    $Offset2: Int
  ) {
    Article(
      sort: "-date_created"
      filter: {
        translations: { languages_code: { code: { _eq: $lang } } }
        status: { _eq: "published" }
        type: { _eq: $type }
      }
      offset: $offset
      limit: $limit
    ) {
      slug
      type
      press_link
      video
      date_created
      user_created {
        first_name
        last_name
      }
      translations(
        filter: { languages_code: { code: { _eq: $lang } } }
        offset: $Offset2
      ) {
        title
        cover {
          id
        }
      }
      category {
        id
        slug
        translations(filter: { languages_code: { code: { _eq: $lang } } }) {
          title
        }
      }
    }
  }
`;
export const GetAllShows = gql`
  query GetAllShows(
    $lang: String = "en-US"
    $offset: Int = 0
    $limit: Int = 6
  ) {
    shows(
      sort: "-date_created"
      filter: {
        translations: { languages_code: { code: { _eq: $lang } } }
        status: { _eq: "published" }
      }
      offset: $offset
      limit: $limit
    ) {
      slug
      date_created
      translations(filter: { languages_code: { code: { _eq: $lang } } }) {
        title
        description
        cover {
          id
        }
      }
      all_episodes {
        id
      }
    }
  }
`;

export const GetPosters = gql`
  query posters($lang: String) {
    posters {
      translations(filter: { languages_code: { code: { _eq: $lang } } }) {
        wide_title
        wide_url
        wide_cover {
          id
        }
        wide2_title
        wide2_url
        wide2_cover {
          id
        }
        normal_title
        normal_url
        normal_cover {
          id
        }
        normal2_title
        normal2_url
        normal2_cover {
          id
        }
      }
    }
  }
`;

export const singleArticle = gql`
  query Article(
    $slug: String
    $lang: String = "en-US"
    $type: String = "food"
  ) {
    Article(
      sort: "-date_created"
      filter: {
        slug: { _eq: $slug }
        translations: { languages_code: { code: { _eq: $lang } } }
        status: { _eq: "published" }
        type: { _eq: $type }
      }
    ) {
      slug
      type
      press_link
      video
      date_created
      user_created {
        first_name
        last_name
      }
      translations(filter: { languages_code: { code: { _eq: $lang } } }) {
        title
        cover {
          id
        }
        content
        description
      }
      category {
        id
        slug
        translations(filter: { languages_code: { code: { _eq: $lang } } }) {
          title
        }
      }
    }
  }
`;

export const singleCategory = gql`
  query Category(
    $slug: String
    $lang: String = "en-US"
    $type: String = "food"
    $offset: Int = 0
    $limit: Int = 6
  ) {
    category(
      filter: {
        slug: { _eq: $slug }
        translations: { languages_code: { code: { _eq: $lang } } }
        status: { _eq: "published" }
      }
    ) {
      slug
      translations(filter: { languages_code: { code: { _eq: $lang } } }) {
        id
        title
        cover {
          id
        }
      }
      articles(
        sort: "-date_created"
        filter: {
          translations: { languages_code: { code: { _eq: $lang } } }
          status: { _eq: "published" }
          type: { _eq: $type }
        }
        offset: $offset
        limit: $limit
      ) {
        slug
        type
        video
        date_created
        user_created {
          first_name
          last_name
        }
        translations(filter: { languages_code: { code: { _eq: $lang } } }) {
          title
          cover {
            id
          }
        }
        category {
          id
          slug
          translations(filter: { languages_code: { code: { _eq: $lang } } }) {
            title
          }
        }
      }
    }
  }
`;

export const singleShow = gql`
  query Show(
    $slug: String
    $lang: String = "en-US"
    $type: String = "episode"
    $offset: Int = 0
    $limit: Int = 6
  ) {
    shows(
      filter: {
        slug: { _eq: $slug }
        translations: { languages_code: { code: { _eq: $lang } } }
        status: { _eq: "published" }
      }
    ) {
      slug
      translations(filter: { languages_code: { code: { _eq: $lang } } }) {
        id
        title
        description
        cover {
          id
        }
      }
      all_episodes(
        sort: "-date_created"
        filter: {
          translations: { languages_code: { code: { _eq: $lang } } }
          status: { _eq: "published" }
          type: { _eq: $type }
        }
        offset: $offset
        limit: $limit
      ) {
        slug
        type
        video
        date_created
        user_created {
          first_name
          last_name
        }
        translations(filter: { languages_code: { code: { _eq: $lang } } }) {
          title
          cover {
            id
          }
        }
        category {
          id
          slug
          translations(filter: { languages_code: { code: { _eq: $lang } } }) {
            title
          }
        }
        shows {
          slug
          translations(filter: { languages_code: { code: { _eq: $lang } } }) {
            title
          }
        }
      }
    }
  }
`;

export const singleEpisode = gql`
  query episode(
    $slug: String
    $lang: String = "en-US"
    $type: String = "episode"
    $offset: Int = 0
    $limit: Int = 4
  ) {
    Article(
      sort: "-date_created"
      filter: {
        slug: { _eq: $slug }
        translations: { languages_code: { code: { _eq: $lang } } }
        status: { _eq: "published" }
        type: { _eq: $type }
      }
    ) {
      slug
      type
      video
      date_created
      user_created {
        first_name
        last_name
      }
      translations(filter: { languages_code: { code: { _eq: $lang } } }) {
        title
        cover {
          id
        }
        content
        description
      }
      shows {
        id
        slug
        translations(filter: { languages_code: { code: { _eq: $lang } } }) {
          title
        }
        all_episodes(
          sort: "-date_created"
          filter: {
            translations: { languages_code: { code: { _eq: $lang } } }
            status: { _eq: "published" }
            type: { _eq: $type }
          }
          offset: $offset
          limit: $limit
        ) {
          slug
          type
          video
          date_created
          user_created {
            first_name
            last_name
          }
          translations(filter: { languages_code: { code: { _eq: $lang } } }) {
            title
            cover {
              id
            }
          }
          category {
            id
            slug
            translations(filter: { languages_code: { code: { _eq: $lang } } }) {
              title
            }
          }
          shows {
            slug
            translations(filter: { languages_code: { code: { _eq: $lang } } }) {
              title
            }
          }
        }
      }
    }
  }
`;

export const getBrands = gql`
  query Brands($lang: String = "en-US") {
    homepage_translations(
      filter: { languages_code: { code: { _eq: $lang } } }
    ) {
      brands_list {
        directus_files_id {
          id
        }
      }
    }
  }
`;

export const homeLanding = gql`
  query Homepage_translations($lang: String = "en-US") {
    homepage_translations(
      filter: { languages_code: { code: { _eq: $lang } } }
    ) {
      home_about_description
      home_about_title
      home_intro_cover {
        id
      }
    }
  }
`;


export const getPage = gql`
 query GetPage($slug: String, $lang: String = "en-US") { 
  pages(    filter: {slug: {_eq: $slug}, 
  translations: {languages_code: {code: {_eq: $lang}}},
   status: {_eq: "published"}}  ) { 
      id  
        slug  
          translations(filter: {languages_code: {code: {_eq: $lang}}})
           {   
              title   
                 content  
                   } 
                    }} 
`