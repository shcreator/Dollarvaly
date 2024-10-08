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

        createMany: procedure.input($Schema.ReserveInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reserve.createMany(input as any))),

        create: procedure.input($Schema.ReserveInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reserve.create(input as any))),

        deleteMany: procedure.input($Schema.ReserveInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reserve.deleteMany(input as any))),

        delete: procedure.input($Schema.ReserveInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reserve.delete(input as any))),

        findFirst: procedure.input($Schema.ReserveInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).reserve.findFirst(input as any))),

        findMany: procedure.input($Schema.ReserveInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).reserve.findMany(input as any))),

        findUnique: procedure.input($Schema.ReserveInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).reserve.findUnique(input as any))),

        updateMany: procedure.input($Schema.ReserveInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reserve.updateMany(input as any))),

        update: procedure.input($Schema.ReserveInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reserve.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ReserveCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReserveCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReserveCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReserveCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ReserveCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReserveCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReserveGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReserveGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReserveCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReserveCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReserveGetPayload<T>, Context>) => Promise<Prisma.ReserveGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ReserveDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReserveDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReserveDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReserveDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ReserveDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReserveDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReserveGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReserveGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReserveDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReserveDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReserveGetPayload<T>, Context>) => Promise<Prisma.ReserveGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ReserveFindFirstArgs, TData = Prisma.ReserveGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ReserveFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReserveGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReserveFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReserveFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReserveGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReserveGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ReserveFindManyArgs, TData = Array<Prisma.ReserveGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ReserveFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ReserveGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReserveFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReserveFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ReserveGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ReserveGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ReserveFindUniqueArgs, TData = Prisma.ReserveGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ReserveFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReserveGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReserveFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReserveFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReserveGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReserveGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ReserveUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReserveUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReserveUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReserveUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ReserveUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReserveUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReserveGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReserveGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReserveUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReserveUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReserveGetPayload<T>, Context>) => Promise<Prisma.ReserveGetPayload<T>>
            };

    };
}
