# Celesti

[Celesti](https://celesti.z13.web.core.windows.net/) allows you to create simple yet beautiful visualizations, based on CSS transforms. It is not a full-fledged animation library; instead, it's aimed at taking some of string out of having elements orbit each other, moving elements from points a to z, within a single parent element.

## Setup

| Install                                                    |
| ---------------------------------------------------------- |
| [Node](https://nodejs.org)                                 |
| [Parcel Bundler](https://github.com/parcel-bundler/parcel) |
| Run `yarn install`                                         |
| (for deployement) Run `az login`                           |

## Commands

| Command              | Effect                                              |
| -------------------- | --------------------------------------------------- |
| `npm run start`      | Uses parcel to compile the TS, SCSS, and Index.html |
| `npm run build`      | Uses `tsc` to compile TypeScript into /dist         |
| `npm run build-docs` | Uses parcel to compile the docs folder.             |
