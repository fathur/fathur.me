export type Cursor = {
  afterCursor: string | null;
  beforeCursor: string | null;
};

export type Paging = {
  length: number;
  total: number;
};

export interface CollectionMeta {
  cursor: Cursor;
  paging: Paging;
}

export interface IGetCollectionResponse<Entity> {
  data: {
    data: Entity[];
    meta: CollectionMeta;
    success: boolean;
  };
}

export type Auction = {
  id?: number;
  title?: string;
  description?: string;
  max_bid?: number;
  finished_at?: number;
};

export interface Auth0User {
  email: string;
  email_verified: boolean;
  nickname: string;
  name: string;
  picture?: string;
  sub: string;
  updated_at: string;
  family_name: string;
  given_name: string;
  locale: string;
}
