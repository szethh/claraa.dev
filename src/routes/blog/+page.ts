import { FileError } from '$lib/utils/errors';
import { RawPostSchema, type PostMetadata } from '$lib/utils/schemas';
import { Schema } from '@effect/schema';
import { Effect, Option, pipe, Record } from 'effect';

export const load = async () => {
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
		})
	);

	const res = await Effect.runPromise(process);

	const filtered: Record<string, PostMetadata> = Record.filterMap(res, (postEither) =>
		postEither._tag === 'Right' ? Option.some(postEither.right) : Option.none()
	);

	// Record.modify('image', (post) => '')
	// const withImages = Record.map(filtered, Record.modify('image', (post) => ''));

	return {
		posts: filtered
	};
};
