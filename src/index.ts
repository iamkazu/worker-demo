
type Comments = {
	id: number
	author: string
	body: string
	post_slug: string 
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const result = await env.DB.prepare(
			"select id, author, body, post_slug FROM comments",
		).run<Comments>();
		// console.log(JSON.stringify(request.cf?.["timezone"] ?? "unknown"))

		return new Response(JSON.stringify(result.results));
	},
} satisfies ExportedHandler<Env>;
