/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ExchangeOrderInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeOrder.createMany(input as any))),

        create: procedure.input($Schema.ExchangeOrderInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeOrder.create(input as any))),

        deleteMany: procedure.input($Schema.ExchangeOrderInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeOrder.deleteMany(input as any))),

        delete: procedure.input($Schema.ExchangeOrderInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeOrder.delete(input as any))),

        findFirst: procedure.input($Schema.ExchangeOrderInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).exchangeOrder.findFirst(input as any))),

        findMany: procedure.input($Schema.ExchangeOrderInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).exchangeOrder.findMany(input as any))),

        findUnique: procedure.input($Schema.ExchangeOrderInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).exchangeOrder.findUnique(input as any))),

        updateMany: procedure.input($Schema.ExchangeOrderInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeOrder.updateMany(input as any))),

        update: procedure.input($Schema.ExchangeOrderInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeOrder.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ExchangeOrderCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeOrderCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeOrderCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeOrderCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ExchangeOrderCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeOrderCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExchangeOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ExchangeOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeOrderCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeOrderCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExchangeOrderGetPayload<T>, Context>) => Promise<Prisma.ExchangeOrderGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ExchangeOrderDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeOrderDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeOrderDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeOrderDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ExchangeOrderDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeOrderDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExchangeOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ExchangeOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeOrderDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeOrderDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExchangeOrderGetPayload<T>, Context>) => Promise<Prisma.ExchangeOrderGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ExchangeOrderFindFirstArgs, TData = Prisma.ExchangeOrderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ExchangeOrderFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ExchangeOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExchangeOrderFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExchangeOrderFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ExchangeOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExchangeOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ExchangeOrderFindManyArgs, TData = Array<Prisma.ExchangeOrderGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ExchangeOrderFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ExchangeOrderGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExchangeOrderFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExchangeOrderFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ExchangeOrderGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ExchangeOrderGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ExchangeOrderFindUniqueArgs, TData = Prisma.ExchangeOrderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ExchangeOrderFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ExchangeOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExchangeOrderFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExchangeOrderFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ExchangeOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExchangeOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ExchangeOrderUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeOrderUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeOrderUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeOrderUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ExchangeOrderUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeOrderUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExchangeOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ExchangeOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeOrderUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeOrderUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExchangeOrderGetPayload<T>, Context>) => Promise<Prisma.ExchangeOrderGetPayload<T>>
            };

    };
}
