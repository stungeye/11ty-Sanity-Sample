# 11ty-Sanity-Sample

Simple static site generator using [11ty](https://www.11ty.dev/) with data pulled from [Sanity.io](https://www.sanity.io/).

## Environment Variables

Project depends on environment variable for the Sanity project id and dataset. These can be provided through the environment, or in a `.env.development` file via [dotenv](https://github.com/motdotla/dotenv):

```
SANITY_PROJECT_ID="yourProjectId"
SANITY_DATASET="production"
```
