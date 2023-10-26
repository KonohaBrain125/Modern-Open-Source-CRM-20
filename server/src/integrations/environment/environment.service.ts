/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AwsRegion } from './interfaces/aws-region.interface';
import { StorageType } from './interfaces/storage.interface';
import { SupportDriver } from './interfaces/support.interface';
import { LoggerDriver } from './interfaces/logger.interface';

@Injectable()
export class EnvironmentService {
  constructor(private configService: ConfigService) {}

  isDebugMode(): boolean {
    return this.configService.get<boolean>('DEBUG_MODE') ?? false;
  }

  isSignInPrefilled(): boolean {
    return this.configService.get<boolean>('SIGN_IN_PREFILLED') ?? false;
  }

  isDataModelSettingsEnabled(): boolean {
    return (
      this.configService.get<boolean>('IS_DATA_MODEL_SETTINGS_ENABLED') ?? false
    );
  }

  isDevelopersSettingsEnabled(): boolean {
    return (
      this.configService.get<boolean>('IS_DEVELOPERS_SETTINGS_ENABLED') ?? false
    );
  }

  isTelemetryEnabled(): boolean {
    return this.configService.get<boolean>('TELEMETRY_ENABLED') ?? true;
  }

  isTelemetryAnonymizationEnabled(): boolean {
    return (
      this.configService.get<boolean>('TELEMETRY_ANONYMIZATION_ENABLED') ?? true
    );
  }

  isFlexibleBackendEnabled(): boolean {
    return this.configService.get<boolean>('FLEXIBLE_BACKEND_ENABLED') ?? false;
  }

  getPort(): number {
    return this.configService.get<number>('PORT') ?? 3000;
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

  getRefreshTokenCoolDown(): string {
    return this.configService.get<string>('REFRESH_TOKEN_COOL_DOWN') ?? '1m';
  }

  getLoginTokenSecret(): string {
    return this.configService.get<string>('LOGIN_TOKEN_SECRET')!;
  }

  getLoginTokenExpiresIn(): string {
    return this.configService.get<string>('LOGIN_TOKEN_EXPIRES_IN') ?? '15m';
  }

  getApiTokenExpiresIn(): string {
    return this.configService.get<string>('API_TOKEN_EXPIRES_IN') ?? '1000y';
  }

  getFrontAuthCallbackUrl(): string {
    return (
      this.configService.get<string>('FRONT_AUTH_CALLBACK_URL') ??
      this.getFrontBaseUrl() + '/verify'
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
    return this.configService.get<string>('STORAGE_S3_NAME');
  }

  getStorageS3Endpoint(): string | undefined {
    return this.configService.get<string>('STORAGE_S3_ENDPOINT');
  }

  getStorageLocalPath(): string {
    return (
      this.configService.get<string>('STORAGE_LOCAL_PATH') ?? '.local-storage'
    );
  }

  getSupportDriver(): string {
    return (
      this.configService.get<string>('SUPPORT_DRIVER') ?? SupportDriver.None
    );
  }

  getSupportFrontChatId(): string | undefined {
    return this.configService.get<string>('SUPPORT_FRONT_CHAT_ID');
  }

  getSupportFrontHMACKey(): string | undefined {
    return this.configService.get<string>('SUPPORT_FRONT_HMAC_KEY');
  }

  getLoggerDriver(): string {
    return (
      this.configService.get<string>('LOGGER_DRIVER') ?? LoggerDriver.Console
    );
  }

  getLogLevels(): LogLevel[] {
    return (
      this.configService.get<LogLevel[]>('LOG_LEVELS') ?? [
        'log',
        'error',
        'warn',
      ]
    );
  }

  getSentryDSN(): string | undefined {
    return this.configService.get<string>('SENTRY_DSN');
  }
}
