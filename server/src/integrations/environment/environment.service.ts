/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AwsRegion } from './interfaces/aws-region.interface';
import { StorageType } from './interfaces/storage.interface';

@Injectable()
export class EnvironmentService {
  constructor(private configService: ConfigService) {}

  isDebugMode(): boolean {
    return this.configService.get<boolean>('DEBUG_MODE') ?? false;
  }

  isSignInPrefilled(): boolean {
    return this.configService.get<boolean>('IS_SIGN_IN_PREFILLED') ?? false;
  }

  isTelemetryEnabled(): boolean {
    return this.configService.get<boolean>('TELEMETRY_ENABLED') ?? true;
  }

  isTelemetryAnonymizationEnabled(): boolean {
    return (
      this.configService.get<boolean>('TELEMETRY_ANONYMIZATION_ENABLED') ?? true
    );
  }

  getPGDatabaseUrl(): string {
    return this.configService.get<string>('PG_DATABASE_URL')!;
  }

  getFrontBaseUrl(): string {
    return this.configService.get<string>('FRONT_BASE_URL')!;
  }

  getAccessTokenSecret(): string {
    return this.configService.get<string>('ACCESS_TOKEN_SECRET')!;
  }

  getAccessTokenExpiresIn(): string {
    return this.configService.get<string>('ACCESS_TOKEN_EXPIRES_IN') ?? '30m';
  }

  getRefreshTokenSecret(): string {
    return this.configService.get<string>('REFRESH_TOKEN_SECRET')!;
  }

  getRefreshTokenExpiresIn(): string {
    return this.configService.get<string>('REFRESH_TOKEN_EXPIRES_IN') ?? '90d';
  }

  getLoginTokenSecret(): string {
    return this.configService.get<string>('LOGIN_TOKEN_SECRET')!;
  }

  getLoginTokenExpiresIn(): string {
    return this.configService.get<string>('LOGIN_TOKEN_EXPIRES_IN') ?? '15m';
  }

  getFrontAuthCallbackUrl(): string {
    return (
      this.configService.get<string>('FRONT_AUTH_CALLBACK_URL') ??
      this.getFrontBaseUrl() + '/auth/callback'
    );
  }

  isAuthGoogleEnabled(): boolean {
    return this.configService.get<boolean>('AUTH_GOOGLE_ENABLED') ?? false;
  }

  getAuthGoogleClientId(): string | undefined {
    return this.configService.get<string>('AUTH_GOOGLE_CLIENT_ID');
  }

  getAuthGoogleClientSecret(): string | undefined {
    return this.configService.get<string>('AUTH_GOOGLE_CLIENT_SECRET');
  }

  getAuthGoogleCallbackUrl(): string | undefined {
    return this.configService.get<string>('AUTH_GOOGLE_CALLBACK_URL');
  }

  getStorageType(): StorageType {
    return (
      this.configService.get<StorageType>('STORAGE_TYPE') ?? StorageType.Local
    );
  }

  getStorageS3Region(): AwsRegion | undefined {
    return this.configService.get<AwsRegion>('STORAGE_S3_REGION');
  }

  getStorageS3Name(): string | undefined {
    return this.configService.get<AwsRegion>('STORAGE_S3_NAME');
  }

  getStorageLocalPath(): string {
    return (
      this.configService.get<string>('STORAGE_LOCAL_PATH') ?? '.local-storage'
    );
  }
}
