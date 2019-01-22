import vibe.d;

shared static this()
{
	auto settings = new HTTPServerSettings;
	settings.port = 8080;

	listenHTTP(settings, &handleRequest);
}

void handleRequest(HTTPServerRequest req,
                   HTTPServerResponse res)
{
	if (req.path == "/")
		res.statusCode = 504;
}
