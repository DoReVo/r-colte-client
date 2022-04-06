export declare namespace User {
  interface User {
    id: string;
    email?: string;
    createdAt: string;
    updatedAt: string;
    oauthAccounts: OauthAccount[];
  }

  interface OauthAccount {
    id: string;
    userId: string;
    provider: string;
    platformId: string;
    email: string;
    extra?: unknown;
    createdAt: string;
    updatedAt: string;
  }
}
