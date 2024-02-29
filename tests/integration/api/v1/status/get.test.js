test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("https://www.githubstatus.com/");
  expect(response.status).toBe(200);
});
