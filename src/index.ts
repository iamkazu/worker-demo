


type Comments = {
	id: number
	author: string
	body: string
	post_slug: string 
}

export default {
	async fetch(request, env): Promise<Response> {
		const result = await env.DB.prepare(
			"select id, author, body, post_slug FROM comments",
		).run<Comments>();
		return new Response(JSON.stringify(result.results));
	},
} satisfies ExportedHandler<Env>;
