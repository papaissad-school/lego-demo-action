const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);

  const time = new Date().toTimeString();
  core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);

  // create an issue to greet the user and use the github-token input to authenticate
  const octokit = github.getOctokit(core.getInput("github-token"));
  octokit.rest.issues.create({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    title: `Hello, ${nameToGreet}!`,
    body: `This is an automated issue created by the Say Hello Action on ${new Date().toDateString()}.`,
  });

} catch (error) {
  core.setFailed(error.message);
}
