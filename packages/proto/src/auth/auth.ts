/* eslint-disable */
import { Observable } from "rxjs";
import { BoolValue, StringValue } from "../google/protobuf/wrappers";

export enum Provider {
  GOOGLE = 0,
  GITHUB = 1,
  KAKAO = 2,
  UNRECOGNIZED = -1,
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface TokenPayload {
  id: string;
  name: string;
  email: string;
  provider: Provider;
  iat: number;
  exp: number;
}

export interface OAuthRequest {
  code: string;
  redirect: string;
  callback: string;
  provider: Provider;
}

export interface OAuthProfile {
  provider: Provider;
  providerId: string;
  email: string;
  name: string;
  profileImage: string;
}

export interface OAuthState {
  redirect: string;
  callback: string;
  provider: Provider;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  verifyToken(request: StringValue): Observable<BoolValue>;

  generateToken(request: OAuthProfile): Observable<Token>;

  getOAuthProfile(request: OAuthRequest): Observable<OAuthProfile>;
}

export interface AuthServiceController {
  verifyToken(request: StringValue): Promise<BoolValue> | Observable<BoolValue> | BoolValue;

  generateToken(request: OAuthProfile): Promise<Token> | Observable<Token> | Token;

  getOAuthProfile(request: OAuthRequest): Promise<OAuthProfile> | Observable<OAuthProfile> | OAuthProfile;
}

export const AUTH_SERVICE_NAME = "AuthService";
