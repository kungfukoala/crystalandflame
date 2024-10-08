//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  post: Post;
  postConnection: PostConnection;
  page: Page;
  pageConnection: PageConnection;
  author: Author;
  authorConnection: AuthorConnection;
  issue: Issue;
  issueConnection: IssueConnection;
  designation: Designation;
  designationConnection: DesignationConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
};


export type QueryPageArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
};


export type QueryAuthorArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAuthorConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthorFilter>;
};


export type QueryIssueArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIssueConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
};


export type QueryDesignationArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDesignationConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DesignationFilter>;
};

export type DocumentFilter = {
  post?: InputMaybe<PostFilter>;
  page?: InputMaybe<PageFilter>;
  author?: InputMaybe<AuthorFilter>;
  issue?: InputMaybe<IssueFilter>;
  designation?: InputMaybe<DesignationFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Post | Page | Author | Issue | Designation | Folder;

export type PostAuthor = Author;

export type Post = Node & Document & {
  __typename?: 'Post';
  title: Scalars['String']['output'];
  author?: Maybe<PostAuthor>;
  date?: Maybe<Scalars['String']['output']>;
  draft?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostAuthorFilter = {
  author?: InputMaybe<AuthorFilter>;
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostFilter = {
  title?: InputMaybe<StringFilter>;
  author?: InputMaybe<PostAuthorFilter>;
  date?: InputMaybe<DatetimeFilter>;
  draft?: InputMaybe<BooleanFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type Page = Node & Document & {
  __typename?: 'Page';
  layout?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type PageFilter = {
  layout?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Page>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type Author = Node & Document & {
  __typename?: 'Author';
  author: Scalars['String']['output'];
  bio?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type AuthorFilter = {
  author?: InputMaybe<StringFilter>;
  bio?: InputMaybe<RichTextFilter>;
};

export type AuthorConnectionEdges = {
  __typename?: 'AuthorConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Author>;
};

export type AuthorConnection = Connection & {
  __typename?: 'AuthorConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<AuthorConnectionEdges>>>;
};

export type Issue = Node & Document & {
  __typename?: 'Issue';
  issue: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type IssueFilter = {
  issue?: InputMaybe<StringFilter>;
};

export type IssueConnectionEdges = {
  __typename?: 'IssueConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Issue>;
};

export type IssueConnection = Connection & {
  __typename?: 'IssueConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<IssueConnectionEdges>>>;
};

export type Designation = Node & Document & {
  __typename?: 'Designation';
  designation: Scalars['String']['output'];
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type DesignationFilter = {
  designation?: InputMaybe<StringFilter>;
  description?: InputMaybe<RichTextFilter>;
};

export type DesignationConnectionEdges = {
  __typename?: 'DesignationConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Designation>;
};

export type DesignationConnection = Connection & {
  __typename?: 'DesignationConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DesignationConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  createFolder: DocumentNode;
  updatePost: Post;
  createPost: Post;
  updatePage: Page;
  createPage: Page;
  updateAuthor: Author;
  createAuthor: Author;
  updateIssue: Issue;
  createIssue: Issue;
  updateDesignation: Designation;
  createDesignation: Designation;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationCreateFolderArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationUpdatePageArgs = {
  relativePath: Scalars['String']['input'];
  params: PageMutation;
};


export type MutationCreatePageArgs = {
  relativePath: Scalars['String']['input'];
  params: PageMutation;
};


export type MutationUpdateAuthorArgs = {
  relativePath: Scalars['String']['input'];
  params: AuthorMutation;
};


export type MutationCreateAuthorArgs = {
  relativePath: Scalars['String']['input'];
  params: AuthorMutation;
};


export type MutationUpdateIssueArgs = {
  relativePath: Scalars['String']['input'];
  params: IssueMutation;
};


export type MutationCreateIssueArgs = {
  relativePath: Scalars['String']['input'];
  params: IssueMutation;
};


export type MutationUpdateDesignationArgs = {
  relativePath: Scalars['String']['input'];
  params: DesignationMutation;
};


export type MutationCreateDesignationArgs = {
  relativePath: Scalars['String']['input'];
  params: DesignationMutation;
};

export type DocumentUpdateMutation = {
  post?: InputMaybe<PostMutation>;
  page?: InputMaybe<PageMutation>;
  author?: InputMaybe<AuthorMutation>;
  issue?: InputMaybe<IssueMutation>;
  designation?: InputMaybe<DesignationMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  post?: InputMaybe<PostMutation>;
  page?: InputMaybe<PageMutation>;
  author?: InputMaybe<AuthorMutation>;
  issue?: InputMaybe<IssueMutation>;
  designation?: InputMaybe<DesignationMutation>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
};

export type PageMutation = {
  layout?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
};

export type AuthorMutation = {
  author?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['JSON']['input']>;
};

export type IssueMutation = {
  issue?: InputMaybe<Scalars['String']['input']>;
};

export type DesignationMutation = {
  designation?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
};

export type PostPartsFragment = { __typename: 'Post', title: string, date?: string | null, draft?: boolean | null, body?: any | null, author?: { __typename: 'Author', author: string, bio?: any | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null };

export type PagePartsFragment = { __typename: 'Page', layout?: string | null, title: string, body?: any | null };

export type AuthorPartsFragment = { __typename: 'Author', author: string, bio?: any | null };

export type IssuePartsFragment = { __typename: 'Issue', issue: string };

export type DesignationPartsFragment = { __typename: 'Designation', designation: string, description?: any | null };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename: 'Post', id: string, title: string, date?: string | null, draft?: boolean | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, author?: { __typename: 'Author', author: string, bio?: any | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } };

export type PostConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
}>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PostConnectionEdges', cursor: string, node?: { __typename: 'Post', id: string, title: string, date?: string | null, draft?: boolean | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, author?: { __typename: 'Author', author: string, bio?: any | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null } | null> | null } };

export type PageQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename: 'Page', id: string, layout?: string | null, title: string, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PageConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
}>;


export type PageConnectionQuery = { __typename?: 'Query', pageConnection: { __typename?: 'PageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PageConnectionEdges', cursor: string, node?: { __typename: 'Page', id: string, layout?: string | null, title: string, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type AuthorQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type AuthorQuery = { __typename?: 'Query', author: { __typename: 'Author', id: string, author: string, bio?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type AuthorConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthorFilter>;
}>;


export type AuthorConnectionQuery = { __typename?: 'Query', authorConnection: { __typename?: 'AuthorConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'AuthorConnectionEdges', cursor: string, node?: { __typename: 'Author', id: string, author: string, bio?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type IssueQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type IssueQuery = { __typename?: 'Query', issue: { __typename: 'Issue', id: string, issue: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type IssueConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
}>;


export type IssueConnectionQuery = { __typename?: 'Query', issueConnection: { __typename?: 'IssueConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'IssueConnectionEdges', cursor: string, node?: { __typename: 'Issue', id: string, issue: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type DesignationQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type DesignationQuery = { __typename?: 'Query', designation: { __typename: 'Designation', id: string, designation: string, description?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type DesignationConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DesignationFilter>;
}>;


export type DesignationConnectionQuery = { __typename?: 'Query', designationConnection: { __typename?: 'DesignationConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'DesignationConnectionEdges', cursor: string, node?: { __typename: 'Designation', id: string, designation: string, description?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  author {
    ... on Author {
      __typename
      author
      bio
    }
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
  }
  date
  draft
  body
}
    `;
export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  __typename
  layout
  title
  body
}
    `;
export const AuthorPartsFragmentDoc = gql`
    fragment AuthorParts on Author {
  __typename
  author
  bio
}
    `;
export const IssuePartsFragmentDoc = gql`
    fragment IssueParts on Issue {
  __typename
  issue
}
    `;
export const DesignationPartsFragmentDoc = gql`
    fragment DesignationParts on Designation {
  __typename
  designation
  description
}
    `;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const AuthorDocument = gql`
    query author($relativePath: String!) {
  author(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AuthorParts
  }
}
    ${AuthorPartsFragmentDoc}`;
export const AuthorConnectionDocument = gql`
    query authorConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AuthorFilter) {
  authorConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AuthorParts
      }
    }
  }
}
    ${AuthorPartsFragmentDoc}`;
export const IssueDocument = gql`
    query issue($relativePath: String!) {
  issue(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...IssueParts
  }
}
    ${IssuePartsFragmentDoc}`;
export const IssueConnectionDocument = gql`
    query issueConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: IssueFilter) {
  issueConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...IssueParts
      }
    }
  }
}
    ${IssuePartsFragmentDoc}`;
export const DesignationDocument = gql`
    query designation($relativePath: String!) {
  designation(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DesignationParts
  }
}
    ${DesignationPartsFragmentDoc}`;
export const DesignationConnectionDocument = gql`
    query designationConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DesignationFilter) {
  designationConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DesignationParts
      }
    }
  }
}
    ${DesignationPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      },
    page(variables: PageQueryVariables, options?: C): Promise<{data: PageQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageQueryVariables, query: string}> {
        return requester<{data: PageQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageQueryVariables, query: string}, PageQueryVariables>(PageDocument, variables, options);
      },
    pageConnection(variables?: PageConnectionQueryVariables, options?: C): Promise<{data: PageConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageConnectionQueryVariables, query: string}> {
        return requester<{data: PageConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageConnectionQueryVariables, query: string}, PageConnectionQueryVariables>(PageConnectionDocument, variables, options);
      },
    author(variables: AuthorQueryVariables, options?: C): Promise<{data: AuthorQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: AuthorQueryVariables, query: string}> {
        return requester<{data: AuthorQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: AuthorQueryVariables, query: string}, AuthorQueryVariables>(AuthorDocument, variables, options);
      },
    authorConnection(variables?: AuthorConnectionQueryVariables, options?: C): Promise<{data: AuthorConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: AuthorConnectionQueryVariables, query: string}> {
        return requester<{data: AuthorConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: AuthorConnectionQueryVariables, query: string}, AuthorConnectionQueryVariables>(AuthorConnectionDocument, variables, options);
      },
    issue(variables: IssueQueryVariables, options?: C): Promise<{data: IssueQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: IssueQueryVariables, query: string}> {
        return requester<{data: IssueQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: IssueQueryVariables, query: string}, IssueQueryVariables>(IssueDocument, variables, options);
      },
    issueConnection(variables?: IssueConnectionQueryVariables, options?: C): Promise<{data: IssueConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: IssueConnectionQueryVariables, query: string}> {
        return requester<{data: IssueConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: IssueConnectionQueryVariables, query: string}, IssueConnectionQueryVariables>(IssueConnectionDocument, variables, options);
      },
    designation(variables: DesignationQueryVariables, options?: C): Promise<{data: DesignationQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: DesignationQueryVariables, query: string}> {
        return requester<{data: DesignationQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: DesignationQueryVariables, query: string}, DesignationQueryVariables>(DesignationDocument, variables, options);
      },
    designationConnection(variables?: DesignationConnectionQueryVariables, options?: C): Promise<{data: DesignationConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: DesignationConnectionQueryVariables, query: string}> {
        return requester<{data: DesignationConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: DesignationConnectionQueryVariables, query: string}, DesignationConnectionQueryVariables>(DesignationConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: {
      branch?: string,
      /**
       * Aside from `method` and `body`, all fetch options are passed
       * through to underlying fetch request
       */
      fetchOptions?: Omit<Parameters<typeof fetch>[1], 'body' | 'method'>,
    },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    }, options)

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "http://localhost:4001/graphql",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
) => {
  const requester = generateRequester(client)
  return getSdk(requester)
}

  