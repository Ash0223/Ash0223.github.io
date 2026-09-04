const QUERY = `
query userProfile($username: String!) {
  matchedUser(username: $username) {
    username
    profile { ranking }
    submitStatsGlobal {
      acSubmissionNum { difficulty count }
    }
  }
}`;

export default async () => {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (portfolio stats proxy)",
        "Referer": "https://leetcode.com/"
      },
      body: JSON.stringify({ query: QUERY, variables: { username: "Ash223" } })
    });

    if (!response.ok) {
      return Response.json({ success: false, error: `LeetCode returned HTTP ${response.status}` }, { status: 502 });
    }

    const payload = await response.json();
    const user = payload?.data?.matchedUser;
    const rows = user?.submitStatsGlobal?.acSubmissionNum || [];
    const count = difficulty => Number(rows.find(item => item.difficulty === difficulty)?.count ?? 0);

    if (!user) {
      return Response.json({ success: false, error: "LeetCode profile not found" }, { status: 404 });
    }

    return Response.json({
      success: true,
      username: user.username,
      total: count("All"),
      easy: count("Easy"),
      medium: count("Medium"),
      hard: count("Hard"),
      ranking: user.profile?.ranking ?? null
    }, {
      headers: { "Cache-Control": "public, max-age=300, s-maxage=900" }
    });
  } catch (error) {
    return Response.json({ success: false, error: "Unable to reach LeetCode" }, { status: 502 });
  }
};
