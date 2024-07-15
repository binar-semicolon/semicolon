import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Account = {
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type Like = {
    A: string;
    B: string;
};
export type Post = {
    id: Generated<string>;
    createdAt: Generated<Timestamp>;
    userId: string;
    content: string | null;
    parentId: string | null;
    views: Generated<number>;
    media: string[];
};
export type Session = {
    sessionToken: string;
    userId: string;
    expires: Timestamp;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type User = {
    id: Generated<string>;
    username: string | null;
    name: string | null;
    email: string;
    registered: Timestamp | null;
    location: string | null;
    verified: Generated<boolean>;
    emailVerified: Timestamp | null;
    birthday: Timestamp | null;
    image: string | null;
    bio: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type UserFollow = {
    A: string;
    B: string;
};
export type VerificationToken = {
    identifier: string;
    token: string;
    expires: Timestamp;
};
export type DB = {
    _Like: Like;
    _UserFollow: UserFollow;
    Account: Account;
    Post: Post;
    Session: Session;
    User: User;
    VerificationToken: VerificationToken;
};
