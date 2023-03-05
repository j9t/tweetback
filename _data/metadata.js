let data = {
	username: "j9t", // No leading @ here
	homeLabel: "meiert.com",
	homeUrl: "https://meiert.com/en/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;