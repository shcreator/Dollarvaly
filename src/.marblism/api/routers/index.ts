/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createCurrencyRouter from "./Currency.router";
import createExchangeRateRouter from "./ExchangeRate.router";
import createReserveRouter from "./Reserve.router";
import createExchangeOrderRouter from "./ExchangeOrder.router";
import createMessageRouter from "./Message.router";
import createReviewRouter from "./Review.router";
import createBlogPostRouter from "./BlogPost.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as CurrencyClientType } from "./Currency.router";
import { ClientType as ExchangeRateClientType } from "./ExchangeRate.router";
import { ClientType as ReserveClientType } from "./Reserve.router";
import { ClientType as ExchangeOrderClientType } from "./ExchangeOrder.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as ReviewClientType } from "./Review.router";
import { ClientType as BlogPostClientType } from "./BlogPost.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        currency: createCurrencyRouter(router, procedure),
        exchangeRate: createExchangeRateRouter(router, procedure),
        reserve: createReserveRouter(router, procedure),
        exchangeOrder: createExchangeOrderRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        review: createReviewRouter(router, procedure),
        blogPost: createBlogPostRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    currency: CurrencyClientType<AppRouter>;
    exchangeRate: ExchangeRateClientType<AppRouter>;
    reserve: ReserveClientType<AppRouter>;
    exchangeOrder: ExchangeOrderClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    review: ReviewClientType<AppRouter>;
    blogPost: BlogPostClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
