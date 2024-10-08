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

        createMany: procedure.input($Schema.CurrencyInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).currency.createMany(input as any))),

        create: procedure.input($Schema.CurrencyInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).currency.create(input as any))),

        deleteMany: procedure.input($Schema.CurrencyInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).currency.deleteMany(input as any))),

        delete: procedure.input($Schema.CurrencyInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).currency.delete(input as any))),

        findFirst: procedure.input($Schema.CurrencyInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).currency.findFirst(input as any))),

        findMany: procedure.input($Schema.CurrencyInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).currency.findMany(input as any))),

        findUnique: procedure.input($Schema.CurrencyInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).currency.findUnique(input as any))),

        updateMany: procedure.input($Schema.CurrencyInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).currency.updateMany(input as any))),

        update: procedure.input($Schema.CurrencyInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).currency.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CurrencyCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurrencyCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurrencyCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurrencyCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CurrencyCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurrencyCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CurrencyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CurrencyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurrencyCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurrencyCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CurrencyGetPayload<T>, Context>) => Promise<Prisma.CurrencyGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CurrencyDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurrencyDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurrencyDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurrencyDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CurrencyDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurrencyDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CurrencyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CurrencyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurrencyDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurrencyDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CurrencyGetPayload<T>, Context>) => Promise<Prisma.CurrencyGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CurrencyFindFirstArgs, TData = Prisma.CurrencyGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CurrencyFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CurrencyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CurrencyFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CurrencyFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CurrencyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CurrencyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CurrencyFindManyArgs, TData = Array<Prisma.CurrencyGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.CurrencyFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CurrencyGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CurrencyFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CurrencyFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CurrencyGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CurrencyGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CurrencyFindUniqueArgs, TData = Prisma.CurrencyGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CurrencyFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CurrencyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CurrencyFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CurrencyFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CurrencyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CurrencyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CurrencyUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurrencyUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurrencyUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurrencyUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CurrencyUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurrencyUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CurrencyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CurrencyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurrencyUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurrencyUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CurrencyGetPayload<T>, Context>) => Promise<Prisma.CurrencyGetPayload<T>>
            };

    };
}
