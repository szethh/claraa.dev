import { Schema } from '@effect/schema';
import { pipe, Record, Effect, Option } from 'effect';
import { FileError } from './errors';
import { RawPostSchema, type PostMetadata } from './schemas';

export const fmtDate = (date: string | Date) => new Date(date).toLocaleDateString();

export const getAllPosts = (): Effect.Effect<Record<string, PostMetadata>, FileError> => {
	const files = import.meta.glob('$lib/content/blog/**/*.svx');

	const process = pipe(
		files,
		Record.map((file, path) =>
			pipe(
				Effect.tryPromise({ try: file, catch: () => new FileError(`Could not load ${path}`) }),
				Effect.flatMap(Schema.decodeUnknown(RawPostSchema)),
				// Effect.tapError(({ message }) => Console.error(message)),
				Effect.map(({ metadata }) => metadata)
			)
		),
		Record.mapKeys((path) => path.replace('/src/lib/content/blog/', '').replace('/index.svx', '')),
		Effect.allWith({
			mode: 'either',
			concurrency: 'unbounded'
		}),
		Effect.map(
			Record.filterMap((postEither) =>
				postEither._tag === 'Right' ? Option.some(postEither.right) : Option.none()
			)
		)
	);

	return process;
};
