import { Provider } from '@nestjs/common';
import { IRateLimiterMongoOptions } from 'rate-limiter-flexible';
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

export interface RateLimiterModuleOptions extends Partial<IRateLimiterMongoOptions> {
    type?: string;
    pointsConsumed?: number;
    trustedProxyHeader?: string;
    rateLimitDecoratorOnly?: boolean; // When set, only apply rate-limiter when the @RateLimit decorator is set.
}

export interface RateLimiterOptionsFactory {
    createRateLimiterOptions(): Promise<RateLimiterModuleOptions> | RateLimiterModuleOptions;
}

export interface RateLimiterModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<RateLimiterOptionsFactory>;
    useClass?: Type<RateLimiterOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<RateLimiterModuleOptions> | RateLimiterModuleOptions;
    inject?: any[];
    extraProviders?: Provider[];
}
