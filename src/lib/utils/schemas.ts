import { Schema } from '@effect/schema';
import type { SvelteComponent } from 'svelte';

const RequiredMetadata = Schema.Struct({
	title: Schema.String,
	date: Schema.Date,
	description: Schema.String,
	image: Schema.String.pipe(Schema.optional)
});

const ExtraMetadata = Schema.mutable(Schema.Record({ key: Schema.String, value: Schema.Any }));

export const PostMetadataSchema = Schema.extend(RequiredMetadata, ExtraMetadata);

export type PostMetadata = Schema.Schema.Type<typeof PostMetadataSchema>;

const SvelteComponentSchema = Schema.declare(
	(input: unknown): input is typeof SvelteComponent & { $$render: () => string } => {
		// return true;
		// unfortunately we can't check for $$render here
		// since svelte components are different depending on
		// whether they are imported in the browser or server
		return (
			typeof input === 'object' &&
			input !== null &&
			'$$render' in input &&
			typeof input['$$render'] === 'function'
		);
	}
);

export const RawPostSchema = Schema.Struct({
	metadata: PostMetadataSchema,
	default: SvelteComponentSchema
});

export type RawPost = Schema.Schema.Type<typeof RawPostSchema>;

export const PostSchema = Schema.Struct({
	metadata: PostMetadataSchema,
	slug: Schema.String,
	readingTime: Schema.Number,
	readingTimeText: Schema.String
});

export type Post = Schema.Schema.Type<typeof PostSchema>;
